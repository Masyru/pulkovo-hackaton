import pandas as pd
import numpy as np
import parse
import cal
import random as rnd
import json
import re
from collections import Counter
import datetime
        
def optimize_schedule(path1, path2, path3, n=10**3):
    best_score = 10**4
    best_schedule = None
    for iter_ in range(n):
        schedule = get_schedule(path1, path2, path3)
        undefined = 0
        for date in schedule['teachers'].keys():
            for room in schedule['teachers'][date].keys():
                for i in range(4):
                    if schedule['rooms'][date][room][i] != 0:
                        if schedule['teachers'][date][room][i] == '':
                            undefined += 1
        if undefined < best_score:
            best_score = undefined
            best_schedule = schedule
        print(f'{iter_:07d}/{n}: {best_score:010d}', end='\r')
    
    return best_schedule['rooms'], best_schedule['teachers'], best_schedule['programs']

def get_schedule(path1, # Path to params
                 path2, # Path to shifts
                 path3): # Path to vacations
    MAX_PAIRS = 4
    PAIRS_HOURS = 2


    def hours_into_pairs(x):
        if x < PAIRS_HOURS:
            return 1
        elif x < PAIRS_HOURS*2 and x > PAIRS_HOURS:
            return 2
        elif x > PAIRS_HOURS*2 and x < PAIRS_HOURS*3:
            return 3
        elif x > PAIRS_HOURS*3:
            return 4
        else:
            return x//PAIRS_HOURS

    def nice_dist(p, n):

        if n == 1:
            return [p]
        size = int(p/n)
        while int((p-size)/(n-1)) != (p-size)/(n-1):
            size += 1
        size_other = int((p-size)/(n-1))
        out = [size_other]*(n-1)
        flag = False
        if size < size_other:
            return out+[size]
        while True:
            for i in range(len(out)):
                if size == out[0]:
                    flag  = True
                    break
                out[i] += 1
                size -= 1
            if flag:
                break
        return out+[size]

    def calendarMatrix2sparse(calendar_matrix, support_matrix=False, placeholder=0):
        mtrx = {}
        rooms = rooms_params['room'].unique()
        for d in range(1, 32):
            for m in range(0, 12):
                if calendar_matrix.loc[m, d] == 0:
                    mtrx[f'{d:02d}.{m+1:02d}'] = {room:[placeholder, placeholder, placeholder, placeholder] for room in rooms}
        if support_matrix:
            support_matrix = {key:{room:4 for room in rooms} for key in mtrx.keys() }
            return mtrx, support_matrix
        else:
            return mtrx

    def get_random_room_distribution(scalendar_matrix, support_matrix, groups_params, profiles, profiles_names):
        all_keys = list(scalendar_matrix.keys())
        groups = {}
        undefined = []
        profiles_date = {}
        for i, row in groups_params.iterrows():
            rooms = []
            keys = []
            for j in range(row['face2face_days']):
                strt = len(rooms)
                c = 0
                while c < 10**4:
                    room = row['available_rooms'][rnd.randint(0, row['available_rooms_count']-1)]
                    key = all_keys[rnd.randint(0, len(all_keys)-1)]
                    if support_matrix[key][room]-row['pairs_a_day'] >= 0 and not key in keys:
                        rooms.append(room)
                        keys.append(key)
                        support_matrix[key][room] -= row['pairs_a_day']


                        if not key+'|'+room in profiles_date_room.keys():
                            profiles_date_room[key+'|'+room] = set()
                        profiles_date_room[key+'|'+room].add(row['program_id'])

                        if not key in profiles_date_room.keys():
                            profiles_date[key] = set()
                        profiles_date[key].add(row['program_id'])

                        ln = 0
                        for i in range(len(scalendar_matrix[key][room])):
                            if scalendar_matrix[key][room][i] == 0:
                                scalendar_matrix[key][room][i] = row['group_id']
                                profiles[key][room][i] = row['program_id']
                                profiles_names[key][room][i] = row['program']
                                ln += 1
                            if ln == row['pairs_a_day']:
                                break
                        break
                    c += 1
                if strt - len(rooms) == 0:
                    undefined.append((row['group_id'], j+1))

            groups[row['group_id']] = (keys, rooms)
        return scalendar_matrix, support_matrix, groups, undefined, profiles_date,  profiles, profiles_names

    def terms_again(x, calendar, vacs, shift):
        prep = ' '.join(x.split())
        last = 0
        days = []
        vac_days = []
        for key in calendar.keys():
            days += [el+last for el in calendar[key]]
            vac_days += [el+last for el in vacs[key]]
            last += max(calendar[key])
        mask = np.ones((len(days), ))
        mask[np.array(vac_days)-1] = 0

        if prep == 'пятидневный':
            return [mask]
        else:
            tmp = [np.array(list(shift[int(i)]) + [0 for _ in range(len(mask)-len(shift[int(i)]))]) for i in re.findall(r'\d', prep)]
            return tmp 

    def get_vacations(calendar, vacations):
        cum_sum = 0
        for i in range(1, 13):
            cum_sum += len(calendar[i])


        vacs_dict = {el:np.ones((cum_sum, )) for el in vacations.columns}
        for col in vacations.columns:
            prev_max = 0
            for i, row in enumerate(vacations[col]):
                if row[0] != 0:
                    vacs_dict[col][prev_max+row[1]*10:prev_max+row[1]*10+row[0]] = 0
                prev_max += max(calendar[i+1])

        return vacs_dict

    def available_date(sched, programs_id, dates, profiles_date):
        base = dates[sched == 1]
        base = list(filter(lambda x: x in profiles_date.keys(), base))
        new_base = []
        for el in base:
            if len(profiles_date[el].intersection(set(programs_id))) > 0:
                new_base.append(el)
        return new_base

    def get_dates_by_program(program_id, schedule, profiles_date):
        new_sched = []
        for el in schedule:
            if program_id in profiles_date[el]:
                new_sched.append(el)
        return el


    programs_params, rooms_params, teachers_params = parse.two(path1)
    shifts = parse.four(path2)
    vacations = parse.five(path3)
    vacations = vacations.iloc[:-2]
    vacations.index = [i for i in range(1, 13)]
    vacations.columns = [el.split()[0]+' '+el.split()[1][0]+'.'+el.split()[2][0]+'.' if len(el.split()) == 3 else el for el in vacations.columns]
    teachers_params['programs_id'] = teachers_params['programs_id'].apply(lambda x: list(map(int, x)))


    shifts_dct = {i:shifts[f'смена №{i}'].replace('д', 1).replace('н', 0).replace('', 0).values for i in range(1, 5)}

    programs_params = programs_params[programs_params['BBCC_workers_count_now'] != 0]
    programs_params['pairs_a_day'] = (programs_params['hours_in_class'].astype(int)/programs_params['face2face_days']).astype(int)
    programs_params['pairs_a_day'] =  programs_params['pairs_a_day'].apply(lambda x: hours_into_pairs(x))

    teachers_params['schedule'][teachers_params['schedule'] == 'сменный'] = teachers_params['changes_schedule'][teachers_params['schedule'] == 'сменный']
    teachers_params = teachers_params.drop(['changes_schedule'], axis=1)
    teachers_params= teachers_params[teachers_params['schedule'] != 'индивидуальный']

    # Parse available rooms for certain programm
    available_rooms = []
    for i, row in programs_params[['discipline', 'features']].iterrows():
        disc = ' '.join(row['discipline'].split())
        features = row['features']
        tmp_available = []
        for j, room_row in rooms_params.iterrows():
            if room_row['room'] in features:
                tmp_available.append(room_row['room'])
                continue

            if disc in room_row['available4']:
                flag = True
                for feature in features:
                    if not feature in room_row['config']:
                        flag = False
                        break
                if flag:
                    tmp_available.append(room_row['room'])
        available_rooms.append(tmp_available)
    programs_params['available_rooms'] = available_rooms
    programs_params = programs_params.reset_index()
    programs_params['index'] = programs_params['index']+1
    new_df = []
    helper_col = []
    for i, row in programs_params.iterrows():
        helper_col.extend(nice_dist(row['BBCC_workers_count_now'], row['groups_count_now']))
        new_df.extend([list(row.values)]*row['groups_count_now'])

    groups_params = pd.DataFrame(new_df, columns=programs_params.columns).rename(columns={'index':'program_id'})
    groups_params = groups_params.reset_index().rename(columns={'index':'group_id'})
    groups_params['group_id'] += 1
    groups_params['group_size'] = helper_col

    available_rooms = []
    for i, row in groups_params.iterrows():
        tmp_rooms = []
        if len(row['available_rooms'])  == 1:
            available_rooms.append(row['available_rooms'])
            continue
        for room in row['available_rooms']:

            if rooms_params[rooms_params['room'] == room]['capacity'].iloc[0] >= row['group_size']:
                tmp_rooms.append(room)
        available_rooms.append(tmp_rooms)
    groups_params['available_rooms'] = available_rooms
    groups_params = groups_params[list(groups_params.columns[:4])+['face2face_days', 'pairs_a_day', 'available_rooms', 'group_size']]

    # CALENDAR PROCCESSING
    calendar = cal.get_calendar(datetime.datetime.now().year)
    tmp = [[f'{d:02d}.{m:02d}' for d in calendar[m]] for m in range(1, 13)]
    dates = []
    for group in tmp:
        dates += group
    dates = np.array(dates)
    vacs = cal.get_vacations(datetime.datetime.now().year)
    calendar_matrix = pd.DataFrame(np.zeros((12, 31)), columns=[i for i in range(1, 32)]).astype(int)
    for i in range(calendar_matrix.shape[0]):
        if max(calendar[i+1]) != 31:
            calendar_matrix.iloc[i, -(31-max(calendar[i+1])):] = -1
    for i in range(0, 12):
        tmp = np.array(list(zip([list(vacs.items())[i][0] for _ in range(len(list(vacs.items())[i][1]))], list(vacs.items())[i][1])))
        calendar_matrix.iloc[tmp[:, 0]-1, tmp[:, 1]-1] = -1
    scalendar_matrix, support_matrix = calendarMatrix2sparse(calendar_matrix, True)
    profiles = calendarMatrix2sparse(calendar_matrix, False)
    profiles_names = calendarMatrix2sparse(calendar_matrix, False, placeholder='')

    vacations_mask = get_vacations(calendar, vacations)

    groups_params['available_rooms_count'] = groups_params['available_rooms'].apply(lambda x: len(x))
    groups_params = groups_params.sample(frac=1)

    # ROOMS PLANNER
    scalendar_matrix, support_matrix, groups, undefined, profiles_date, profiles, profiles_names = get_random_room_distribution(scalendar_matrix, support_matrix, groups_params, profiles, profiles_names)

    teachers_params['schedule'] = teachers_params['schedule'].apply(lambda x: terms_again(x, calendar, vacs, shifts_dct))


    for key in vacations_mask.keys():
        row = teachers_params[teachers_params['name'] == key].iloc[0]
        sched = row['schedule']
        for i in range(len(sched)):
            sched[i] = sched[i]*vacations_mask[key]
        teachers_params['schedule'][teachers_params['name'] == key].iloc[0] = sched
    scheds = []
    for i, row in teachers_params.iterrows():
        tmp = list(map(lambda x: available_date(x, row['programs_id'], dates, profiles_date), row['schedule']))
        scheds.append(list(filter(lambda x: x != [], tmp)))
    teachers_params['schedule'] = scheds


    teachers_params = teachers_params.sample(frac=1)
    teachers_params['programs_id'] = teachers_params['programs_id'].apply(lambda x: list(map(int, x)))

    teachers_params = teachers_params[teachers_params['schedule'].apply(lambda x: len(x)) != 0]
    teachers_support = {date:{el:[0, 0, 0, 0] for el in teachers_params['name']} for date in scalendar_matrix.keys()}
    teachers = calendarMatrix2sparse(calendar_matrix, placeholder='')

    # TEACHERS PLANNER
    for i, row in teachers_params.iterrows():
        programs = row['programs_id']
        sched = row['schedule'][rnd.randint(0, len(row['schedule'])-1)]
        for date in sched:
            for room in profiles[date].keys():
                for program in programs:
                    if program in profiles[date][room]:
                        for j, profile in enumerate(profiles[date][room]):
                            if teachers_support[date][row['name']][j] == 0 and profile == program:
                                teachers[date][room][j] = row['name']
                                teachers_support[date][row['name']][j] = 1
        return {'rooms':scalendar_matrix, 'teachers':teachers, 'programs':profiles_names}
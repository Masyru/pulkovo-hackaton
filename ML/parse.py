import xlrd
import pandas as pd
import numpy as np
import re

def one(filename):
    rb = xlrd.open_workbook(filename)
    sheet = rb.sheet_by_index(0)
    vals = [sheet.row_values(rownum) for rownum in range(sheet.nrows)]
    local_info = []
    last_month = ""
    types = {}
    month = {}
    what_doing = {}
    s = -1
    for col in range(8, len(vals[0])):
        if vals[0][col] != "":
            month[vals[0][col]] = [int(vals[2][col].split()[1])]
            if last_month != "":
                month[last_month].append(int(vals[2][col - 2].split()[1]))
            last_month = vals[0][col]

    month[last_month].append(int(vals[2][-1].split()[1]))

    for row in range(len(vals)):
        if vals[row][6] != "":
            types[vals[row][6]] = []
            for col in range(8, len(vals[row])):
                if col == 112 or col == 110:
                    continue
                else:
                    if vals[2][col] != "":
                        types[vals[row][6]].append(vals[row][col])

    return pd.DataFrame(month, index=['from', 'to']), pd.DataFrame(types)

def two(filename):
    # SYSTEM FUNCS
    def fucking_terms(x):
        shortcuts = {
            'ПОЗ ВС': 'Противообледенительная защита ВС'
        }
        x = x.replace('\n', '')
        if 'кроме' in x:
            tmp = ' '.join(x.replace('кроме', '').strip().split())
            tmp = shortcuts[tmp] if tmp in shortcuts.keys() else tmp 
            return [el for el in programs_params['discipline'].unique() if el != tmp]
        
        elif 'все дисциплины' in ' '.join(x.split()):
            return programs_params['discipline'].unique()
        
        out = []
        for el in x.split(';'):
            el = ' '.join(el.split())
            if 'програм' in x:
                tmp = []
                splitted = x.split()
                flag = False
                flag1 = False
                for el in splitted:
                    if 'програм' in el:
                        flag = True
                        continue

                    if flag1:
                        tmp.append('П'+re.findall(r'\d+', el)[0])
                        break

                    if flag:
                        if el == 'и':
                            flag1 = True
                            continue
                        tmp.append('П'+re.findall(r'\d+', el)[0])
                name = x.split(',')[0]
                name = shortcuts[name] if name in shortcuts.keys() else name 

                out += [name] + tmp
            else:
                name = el.split(',')[0]
                name = shortcuts[name] if name in shortcuts.keys() else name
                out += [name]
        return out

    def fucking_terms2(x):
        prep = ' '.join(x.split())
        if 'без парт' in prep:
            return ['без парт']
        elif 'интерактивная доска' in prep:
            return ['интерактивная доска']
        else:
            tmp = []
            for el in rooms_params['room']:
                if el in prep:
                    tmp.append(el)
            return tmp
        
    def ihate_terms(row):
        prep = ' '.join(row[1].split()).lower()
        try:
            if 'при распределении' in prep:
                forr = []
                which = []
                if len(re.findall(r'\d+ и \d+', prep)) > 0:
                    forr = re.findall(r'\d+', re.findall(r'\d+ и \d+', prep)[0])
                    which=(int(re.findall(r'\d+', prep)[-1]))
                else:
                    forr = re.findall(r'\d+', re.findall(r'\d+;\d+', prep)[0])
                    which=(int(re.findall(r'\d+', prep)[-1]))
                out = []
                for el in row[0]:
                    if el in forr:
                        out.append(which)
                    else:
                        out.append(100)
                return out
            elif  'нет других' in prep:
                return [9999]*len(row[0])
            elif 'нет' == prep:
                return [100]*len(row[0])
            elif 'в рабочие смены' in prep:
                return [100]*len(row[0])
            elif len(re.findall(r'(\d+ на теор)|(\d+\s?-\s?на теор)', prep)) > 0:
                query = re.findall(r'(\d+ на теор)|(\d+\s?-\s?на теор)', prep)[0]
                return [int(re.findall(r'\d+', query[0]+query[1])[0])]*len(row[0])
            else:
                return [int(prep)]*len(row[0])
        except:
            return [99999]*len(row[0])
    # THE END OF SYSTEMN FUNCS



    dfs = pd.read_excel(filename, sheet_name=None)

    # PROGRAMS
    programs_params = dfs['параметры программ'].iloc[:, 1:]
    programs_params.columns = ['discipline', 'program', 'features', 'academic_hours', 
                            'hours_in_class', 'practical_hours', 'hours_in_SDO', 
                            'face2face_days', 'groups_count_now', 'BBCC_workers_count_now', 
                            'outside_listeners_could_be_learnt', 'teachers_now', 'rooms_count']
    prev = None
    tmp_disc = []
    for el in programs_params['discipline']:
        if not el is np.nan:
            prev = el
            tmp_disc.append(el)
        else:
            tmp_disc.append(prev)
    programs_params['discipline'] = tmp_disc
    programs_params['discipline'] = programs_params['discipline'].apply(lambda x: x.replace('\n', ''))
    programs_params['features'] = programs_params['features'].fillna('нет').apply(lambda x: x.lower())
    programs_params[['practical_hours', 'hours_in_SDO']] = programs_params[['practical_hours', 'hours_in_SDO']].astype(str).apply(lambda x: x.apply(lambda y: y.strip()), axis=0)
    programs_params = programs_params.loc[programs_params.iloc[:, :7].dropna().index].reset_index(drop=True)
    programs_params = programs_params.replace('-', 0).fillna(0)
    programs_params[['practical_hours', 'hours_in_SDO']] = programs_params[['practical_hours', 'hours_in_SDO']].astype(float)
    programs_params.iloc[:, -6:] = programs_params.iloc[:, -6:].astype(int)
    programs_params['features'] = programs_params['features'].apply(lambda x: 'нет' if 'желат' in ' '.join(x.split()) else x)
    programs_params['hours_in_class'] = programs_params['hours_in_class'].astype(int)

    # ROOMS
    rooms_params = dfs['параметры аудиторий']
    rooms_params.iloc[:, 2:] = rooms_params.iloc[:, 2:].apply(lambda x: x.apply(lambda y: ' '.join(y.replace('\n', ' ').split())), axis=0)
    rooms_params['Вид занятий'] = rooms_params['Вид занятий'].apply(lambda x: x.split('/'))
    rooms_params['Конфигурация аудитории'] = rooms_params['Конфигурация аудитории'].apply(lambda x: 'без парт' if 'стулья без парт, для тренинговых форматов' in ' '.join(x.split()) else ' '.join(x.split())).apply(lambda x: x.split(', '))
    rooms_params['config'] = rooms_params['Вид занятий'] + rooms_params['Конфигурация аудитории']
    rooms_params = rooms_params.drop(['Вид занятий', 'Конфигурация аудитории'], axis=1)
    rooms_params.columns = ['room', 'capacity', 'advantage4', 'available4', 'config']
    rooms_params['room'] = rooms_params['room'].astype(str).apply(lambda x: ''.join(x.split()).lower())
    rooms_params['available4'] = rooms_params['available4'].apply(lambda x: fucking_terms(x))
    new_available = []
    add2config = []
    for i, el in enumerate(rooms_params['available4']):
        new_available.append([])
        add2config.append([])
        for el1 in el:
            if len(re.findall(r'П\d+', el1)) > 0:
                add2config[i].append(el1)
            else:
                new_available[i].append(el1)
    add2config = np.array(add2config)
    rooms_params['available4'] = new_available
    rooms_params['config'] = rooms_params['config']+add2config

    # PROGRAMS CONTINUING
    programs_params['features'] = programs_params['features'].apply(lambda x: 'нет' if 'желат' in ' '.join(x.split()) else x).apply(lambda x: fucking_terms2(x))

    # TEACHERS
    teachers_params = dfs['параметры преподавателей']
    teachers_params = teachers_params.drop(['Может проводить занятия по темам', 'Дисциплина'], axis=1)
    teachers_params['Учебные программы'] = teachers_params['Учебные программы'].astype(str).apply(lambda x: x.split(';'))
    teachers_params['Приоритет при распределении'] = teachers_params['Приоритет при распределении'].astype(str)
    teachers_params['Приоритет при распределении'] = teachers_params[['Учебные программы', 'Приоритет при распределении']].apply(lambda x: ihate_terms(x), axis=1)
    teachers_params.columns = ['id', 'name', 'programs_id', 'priority', 'schedule', 'changes_schedule']

    return programs_params, rooms_params, teachers_params

def four(filename):
    rb = xlrd.open_workbook(filename)
    sheet = rb.sheet_by_index(0)
    vals = [sheet.row_values(rownum) for rownum in range(sheet.nrows)]
    start = 3
    smena = {"смена №1": {}, "смена №2": {}, "смена №3": {}, "смена №4": {}}
    for month in range(12):
        days = 0
        while days < 31 and vals[month * 7 + start][days + 1] != "":
            days += 1
        for day in range(1, days + 1):
            dF, mF = str(day), str(month + 1)
            if day < 10:
                dF = f"0{day}"
            if month < 10:
                mF = f"0{month + 1}"
            smena[vals[month * 7 + start + 1][0]][f"{dF}.{mF}"] = vals[month * 7 + start + 1][day]
            smena[vals[month * 7 + start + 2][0]][f"{dF}.{mF}"] = vals[month * 7 + start + 2][day]
            smena[vals[month * 7 + start + 3][0]][f"{dF}.{mF}"] = vals[month * 7 + start + 3][day]
            smena[vals[month * 7 + start + 4][0]][f"{dF}.{mF}"] = vals[month * 7 + start + 4][day]
    return pd.DataFrame(smena)

def five(filename):
    rb = xlrd.open_workbook(filename)
    sheet = rb.sheet_by_index(0)
    vals = [sheet.row_values(rownum) for rownum in range(sheet.nrows)]
    start = 0
    numbers = {}
    teacher = {}
    # type,
    while vals[start][0] == "":
        start += 1
    for i in range(start + 1, len(vals)):
        if vals[i][0] == "Итого кол-во дней:":
            break
        teacher[vals[i][1]] = {"01": [], "02": [], "03": [], "04": [], "05": [],
                               "06": [], "07": [], "08": [], "09": [], "10": [],
                               "11": [], "12": []}
        numbers[int(vals[i][0])] = vals[i][1]
        teacher[vals[i][1]]["type"] = int(vals[i][2])
        for j in range(1, 13):
            m = str(j)
            if j < 10:
                m = "0" + str(j)
            if vals[i][1 + j * 2] == "":
                vals[i][1 + j * 2] = 0
            if vals[i][1 + j * 2 + 1] == "":
                vals[i][1 + j * 2 + 1] = 0
            teacher[vals[i][1]][m] = [int(vals[i][1 + j * 2]), int(vals[i][1 + 2 * j + 1])]
        teacher[vals[i][1]]["all"] = int(vals[i][-1])
    return pd.DataFrame(teacher) #, numbers



if __name__ == '__main__':
    term, path = input().split()
    if term == '1':
        print(one(path))
    elif term == '2':
        print(two(path))
    elif term == '4':
        print(four(path))
    elif term == '5':
        print(five(path)[1])
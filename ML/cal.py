import calendar


def get_calendar(year):
    cal = {key:[] for key in range(1, 13)}
    for month in range(1, 13):
        flag = False
        prev = 0
        for el in calendar.Calendar().itermonthdates(year, month):
            if el.day == 1 and not flag:
                flag = True
                cal[month].append(el.day)
                prev = el.day
                continue

            if flag and el.day < prev:
                break
            else:
                cal[month].append(el.day)
            prev = el.day
    
    for key in cal.keys():
        cal[key] = [i for i in range(1, cal[key][-1]+1)]
    return cal

def get_weeks(year):
    cal = get_calendar(year)
    weeks = {}
    tmp = []
    for key in cal.keys():
        for d in cal[key]:
            tmp.append(f'{d:02d}.{key:02d}')
    
    c = 1
    for i in range(0, len(tmp), 7):
        if i+6 < len(tmp):
            weeks[f'W{c}'] = [tmp[i], tmp[i+6]]
        else:
            days2go = max(cal[12])-int(tmp[i].split('.')[0])
            weeks[f'W{c}'] = [tmp[i], f'{days2go:02d}.01']
        
        c += 1
    
    return weeks


if __name__ == '__main__':
    get_weeks(2020)
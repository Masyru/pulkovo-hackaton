import calendar
import re
import pandas as pd
import numpy as np
import json

class LackOfTheYearException(Exception):
    pass


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
            days2go = 6-(max(cal[12])-int(tmp[i].split('.')[0]))
            weeks[f'W{c}'] = [tmp[i], f'{days2go:02d}.01']


        c += 1

    return weeks

def get_vacations(year):
    prod_cal = pd.read_csv('ML/data/production_calendar.csv', header=1, names=['year', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],

                            usecols=[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
    if year > int(prod_cal['year'].astype(int).max()):
        raise LackOfTheYearException('Keep your production calendar up-to-date!')

    cal = {}
    prod_cal[prod_cal['year'] == year].iloc[0, 1:].values
    for i, el in enumerate(prod_cal[prod_cal['year'] == year].iloc[0, 1:].values):
        cal[i+1] = list(map(lambda x: int(x), re.findall(r'\d+', el)))
    return cal

if __name__ == '__main__':
    print(get_vacations(2025))
    print('--------')
    print(get_weeks(2022))
    print('--------')
    print(get_calendar(2025))

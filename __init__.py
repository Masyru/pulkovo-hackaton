from flask import Flask, request, render_template, redirect, abort, url_for
from flask import jsonify
import xlwt, xlrd
import sqlite3
from json import dumps, load, dump
import ML.cal as cal
import datetime
from werkzeug.utils import secure_filename
import os

app = Flask(__name__, static_folder="./frontend", template_folder="./frontend")

app.config['SECRET_KEY'] = "Osbs9CKi3U0sIESM"
app.config['UPLOAD_FOLDER'] = "ML/"

vacations = calendar = weeks = None
admin_login = "admin"
admin_password = "admin"

@app.route(f"/{admin_password}/to_excel")
def to_excel():
    year_now = datetime.datetime.now().year
    month_now = datetime.datetime.now().month
    day_now = datetime.datetime.now().day

    with open("ML/shedule.json", "r") as read_file:
        data = load(read_file)

    with open("ML/teachers.json", "r") as read_file:
        teachers = load(read_file)

    with open("ML/programs.json", "r") as read_file:
        profiles = load(read_file)

    finished = {"weeks": []}
    vacations = cal.get_vacations(year_now)
    weeks = cal.get_weeks(year_now)

    calendar = cal.get_calendar(year_now)

    err_date = datetime.date(year_now, 1, 1).weekday()
    buf = ""
    for week, days in weeks.items():
        start = list(map(int, days[0].split(".")))
        end = list(map(int, days[1].split(".")))
        start[0] -= err_date
        end[0] -= err_date
        if start[0] <= 0:
            start[1] -= 1
            if start[1] <= 0:
                start[0] += 31
                start[1] += 12
            else:
                start[0] += calendar[start[1]][-1]

        if end[0] <= 0:
            end[1] -= 1
            if end[1] <= 0:
                end[0] += 31
                end[1] += 12
            else:
                end[0] += calendar[start[1]][-1]
        date_start = ""
        if start[0] < 10:
            date_start = "0" + str(start[0])
        else:
            date_start = str(start[0])
        if start[1] < 10:
            date_start += ".0" + str(start[1])
        else:
            date_start += "." + str(start[1])

        date_end = ""
        if end[0] < 10:
            date_end = "0" + str(end[0])
        else:
            date_end = str(end[0])
        if end[1] < 10:
            date_end += ".0" + str(end[1])
        else:
            date_end += "." + str(end[1])
        weeks[week] = [date_start, date_end]
        buf = week
    test = list(map(int, weeks[buf][1].split(".")))
    if test[1] == 12 and test[0] < 31:
        date_start = str(test[0] + 1) + ".12"
        date_end = "0" + str(test[0] + 7 - 31) + ".01"
        weeks["W" + str(int(buf[1:]) + 1)] = [date_start, date_end]

    week_days = [[]]
    numweek = "W1"
    for month in calendar:
        for day in calendar[month]:
            date = ""
            if day < 10:
                date = "0" + str(day)
            else:
                date = str(day)
            if month < 10:
                date += ".0" + str(month)
            else:
                date += "." + str(month)
            week_days[-1].append(date)
            if weeks[numweek][1] == date and date != "31.12":
                week_days.append([])
                numweek = "W" + str(int(numweek[1:]) + 1)

    wb = xlwt.Workbook()
    for j in range(len(week_days)):
        ws = wb.add_sheet(f"{j + 1} неделя")
        ws.write(0, 0, 'Аудитории')
        f = 2
        for i in teachers["01.04"]:
            ws.write(f, 0, i)
            f += 1
        for i in range(len(week_days[j])):
            ws.write_merge(0, 0, 1 + 4 * i, 4 + 4 * i, week_days[j][i])
            ws.write(1, 1 + 4 * i, '1 пара')
            ws.write(1, 2 + 4 * i, '2 пара')
            ws.write(1, 3 + 4 * i, '3 пара')
            ws.write(1, 4 + 4 * i, '4 пара')
            f = 2
            for audit in teachers["01.04"]:
                for pair in range(4):
                    a = "Отсутствует"
                    b = "Отсутствует"
                    c = "Отсутствует"
                    if week_days[j][i] in data:
                        if data[week_days[j][i]][audit][pair] != 0:
                            a = data[week_days[j][i]][audit][pair]
                            if teachers[week_days[j][i]][audit][pair] != "":
                                b = teachers[week_days[j][i]][audit][pair]
                            if profiles[week_days[j][i]][audit][pair] != "":
                                c = profiles[week_days[j][i]][audit][pair]
                    text = f"ID группы: {a}\nПреподователь: {b}\nПрофиль: {c}\n"
                    ws.write(f, pair + 1 + 4 * i, text)
                f += 1

    wb.save('schedule_excel.xls')
    return "OK"

@app.route(f"/{admin_password}/upload_file", methods=["GET", "POST"])
def upload_file():
    if request.method == "GET":
        return render_template("Source/upload.html")
    else:
        file = request.files['file']
        filename = secure_filename(file.filename)
        file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        return "File successfully uploaded"

@app.route(f"/{admin_password}/make_json_file")
def make_json_file():
    year_now = datetime.datetime.now().year
    month_now = datetime.datetime.now().month
    day_now = datetime.datetime.now().day
    with open("ML/shedule.json", "r") as read_file:
        data = load(read_file)

    with open("ML/teachers.json", "r") as read_file:
        teachers = load(read_file)

    with open("ML/programs.json", "r") as read_file:
        profiles = load(read_file)


    finished = {"weeks": []}
    vacations = cal.get_vacations(year_now)
    weeks = cal.get_weeks(year_now)
    calendar = cal.get_calendar(year_now)
    err_date = datetime.date(year_now, 1, 1).weekday()
    buf = ""
    for week, days in weeks.items():
        start = list(map(int, days[0].split(".")))
        end = list(map(int, days[1].split(".")))
        start[0] -= err_date
        end[0] -= err_date
        if start[0] <= 0:
            start[1] -= 1
            if start[1] <= 0:
                start[0] += 31
                start[1] += 12
            else:
                start[0] += calendar[start[1]][-1]

        if end[0] <= 0:
            end[1] -= 1
            if end[1] <= 0:
                end[0] += 31
                end[1] += 12
            else:
                end[0] += calendar[start[1]][-1]
        date_start = ""
        if start[0] < 10:
            date_start = "0" + str(start[0])
        else:
            date_start = str(start[0])
        if start[1] < 10:
            date_start += ".0" + str(start[1])
        else:
            date_start += "." + str(start[1])

        date_end = ""
        if end[0] < 10:
            date_end = "0" + str(end[0])
        else:
            date_end = str(end[0])
        if end[1] < 10:
            date_end += ".0" + str(end[1])
        else:
            date_end += "." + str(end[1])
        weeks[week] = [date_start, date_end]
        buf = week
    test = list(map(int, weeks[buf][1].split(".")))
    if test[1] == 12 and test[0] < 31:
        date_start = str(test[0] + 1) + ".12"
        date_end = "0" + str(test[0] + 7 - 31) + ".01"
        weeks["W" + str(int(buf[1:]) + 1)] = [date_start, date_end]
    numweek = "W1"
    finished["weeks"].append({})
    finished["weeks"][-1]["date"] = weeks[numweek]
    finished["weeks"][-1]["days"] = []
    today_week = ""
    date = weeks[numweek][0]
    while date != "32.12":
        finished["weeks"][-1]["days"].append({})
        finished["weeks"][-1]["days"][-1]["date"] = date
        finished["weeks"][-1]["days"][-1]["free"] = True
        date = str(int(date.split(".")[0]) + 1) + ".12"
    for month in calendar:
        for day in calendar[month]:
            finished["weeks"][-1]["days"].append({})
            date = ""
            if day < 10:
                date = "0" + str(day)
            else:
                date = str(day)
            if month < 10:
                date += ".0" + str(month)
            else:
                date += "." + str(month)
            if month_now == month and day_now == day:
                today_week = numweek
            finished["weeks"][-1]["days"][-1]["date"] = date
            if day in vacations[month]:
                finished["weeks"][-1]["days"][-1]["free"] = True
            else:
                finished["weeks"][-1]["days"][-1]["free"] = False
                finished["weeks"][-1]["days"][-1]["subjects"] = [[], [], [], []]
                nothing = "Не указано"
                for audit, pairs in data[date].items():
                    for i in range(4):
                        if pairs[i] != 0:
                            finished["weeks"][-1]["days"][-1]["subjects"][i].append({})
                            finished["weeks"][-1]["days"][-1]["subjects"][i][-1]['teacher'] = nothing
                            if teachers[date][audit][i] != "":
                                finished["weeks"][-1]["days"][-1]["subjects"][i][-1]['teacher'] = teachers[date][audit][i]
                            finished["weeks"][-1]["days"][-1]["subjects"][i][-1]['theme'] = nothing
                            finished["weeks"][-1]["days"][-1]["subjects"][i][-1]['group'] = nothing
                            if profiles[date][audit][i] != "":
                                finished["weeks"][-1]["days"][-1]["subjects"][i][-1]['group'] = profiles[date][audit][i]
                            finished["weeks"][-1]["days"][-1]["subjects"][i][-1]['aud'] = audit
                            finished["weeks"][-1]["days"][-1]["subjects"][i][-1]['id'] = pairs[i]
            if weeks[numweek][1] == date and date != "31.12":
                numweek = "W" + str(int(numweek[1:]) + 1)
                finished["weeks"].append({})
                finished["weeks"][-1]["date"] = weeks[numweek]
                finished["weeks"][-1]["days"] = []
    i = 1
    date = str(i) + ".01"
    while date != weeks[numweek][1]:
        finished["weeks"][-1]["days"].append({})
        finished["weeks"][-1]["days"][-1]["date"] = date
        finished["weeks"][-1]["days"][-1]["free"] = True
        i += 1
        date = "0" + str(i) + ".01"
    finished["weeks"][-1]["days"].append({})
    finished["weeks"][-1]["days"][-1]["date"] = date
    finished["weeks"][-1]["days"][-1]["free"] = True

    finished["current_date"] = weeks[today_week]

    dump(finished, open("frontend/Etc/data.json", "w"))
    return "OK"


@app.route("/schedule", methods=["POST", "GET"])
def schedule():
    return jsonify(load(open("frontend/Etc/data.json", "r")))

@app.route("/calendar/get_weeks?year=<year>", methods=["POST", "GET"])
def get_weeks(year):
    global weeks
    weeks = dumps(cal.get_weeks(year))

@app.route("/calendar/get_calendar?year=<year>", methods=["POST", "GET"])
def get_calendar(year):
    global calendar
    calendar = dumps(cal.get_calendar(year))

@app.route("/calendar/get_vacations?year=<year>", methods=["POST", "GET"])
def get_vacations(year):
    global vacations
    vacations = dumps(cal.get_vacations(year))

@app.route("/calendar/get_all?year=<year>", methods=["POST", "GET"])
def get_all(year):
    global calendar, vacations, weeks
    vacations = dumps(cal.get_vacations(year))
    calendar = dumps(cal.get_calendar(year))
    weeks = dumps(cal.get_weeks(year))

@app.route("/", methods=["POST", "GET"])
@app.route("/index", methods=["POST", "GET"])
def index():
    return render_template("Source/index.html")

@app.route("/admin", methods=["POST", "GET"])
def admin():
    print(request.form)
    print(dumps(request.get_json()))
    if request.method == "POST":
        if "login" in request.form:
            login = request.form["login"]
            password = request.form["password"]
            if login == admin_login and password == admin_password:
                pass
            else:
                return render_template("Source/login_test.html")

        return render_template("Source/admin_test.html")


    return render_template("Source/admin.html")


if __name__ == '__main__':
    app.run(host="127.0.0.1", port=8080, debug=True)

from flask import Flask, request, render_template, redirect, abort, url_for
from flask import jsonify
import sqlite3
import os
from json import dumps
from ML import cal

app = Flask(__name__, static_folder="./frontend", template_folder="./frontend")

app.config['SECRET_KEY'] = "Osbs9CKi3U0sIESM"
app.config['UPLOAD_FOLDER'] = "ML/"

vacations = calendar = weeks = None
admin_login = "admin"
admin_password = "admin"

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


    return render_template("Source/login_test.html")

if __name__ == '__main__':
    app.run(host="127.0.0.1", port=8000, debug=True)

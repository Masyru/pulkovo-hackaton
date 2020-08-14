from flask import Flask, request, render_template, redirect, abort, url_for
import os

app = Flask(__name__, static_folder="./frontend", template_folder="./frontend")

admin_login = "admin"
admin_password = "gPZENmQb6v2vlLY1"

@app.route("/", methods=["POST", "GET"])
@app.route("/index", methods=["POST", "GET"])
def index():
    return render_template("Source/index.html")

@app.route("/admin", methods=["POST", "GET"])
def admin():
    if request.method == "POST":
        pass
    return render_template("Source/admin.html")

if __name__ == '__main__':
    app.run(host="127.0.0.1", port=8000, debug=True)

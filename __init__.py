from flask import Flask, request, render_template, redirect, abort, url_for

app = Flask(__name__, static_folder="./frontend", template_folder="./frontend")

@app.route("/", methods=["POST", "GET"])
@app.route("/index", methods=["POST", "GET"])
def index():
    return render_template("/Source/index.html")

@app.route("/admin", methods=["POST", "GET"])
def admin():
    return render_template("/Source/admin.html")

if __name__ == '__main__':
    app.run(host="127.0.0.1", port=8080, debug=True)

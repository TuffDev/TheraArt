from flask import Flask, send_from_directory
from controllers import *
import os

app = Flask(__name__, static_folder='static/build')
app.register_blueprint(controllers)

if __name__ == '__main__':
    app.run()

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def index(path):
    if path != "" and os.path.exists(app.static_folder + '/' + path):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

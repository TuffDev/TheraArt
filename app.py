from flask import Flask
from controllers import *

app = Flask(__name__, static_folder='static/build', static_url_path='/static')
app.register_blueprint(controllers)

if __name__ == '__main__':
    app.run()

@app.route('/')
def index():
    return app.send_static_file('index.html')

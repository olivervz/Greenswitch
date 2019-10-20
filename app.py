from flask import Flask, send_from_directory, render_template, request
from getData import *
app = Flask(__name__, static_url_path='')

@app.route('/')
def my_form():
    return render_template('home.html')

@app.route('/', methods=['POST'])
def parse_data():
    if request.method == "POST":
    	x = request.form['textbox']
    	print(x)
    	if x != "":
    		return render_template('home.html', location=x)

@app.route('/test')
def runExternalScript():
	x = getData('windDirectionDatabase')

if __name__ == '__main__':
    app.run()
from flask import Flask, send_from_directory, render_template, request
import getData
import GetCoord


app = Flask(__name__, static_url_path='')
a = '/'
windSpeed = getData.readJsonDump('windSpeedDatabase')
windDirection = getData.readJsonDump('windDirectionDatabase')
solarIrradiance = getData.readJsonDump('solarIrradianceDatabase')

@app.route('/')
def my_form():
    return render_template('home.html')

@app.route('/', methods=['POST'])
def parse_data():
    if request.method == "POST":
    	x = request.form['textbox']
    	print(x)
        coords = GetCoord.locate(x)
    	la = coords.split(':')[0]
    	lo = coords.split(':')[1]
        coords = lo + ":" + la
        try:
    	   key = getData.convertToValidKey(float(la), float(lo))
    	   windSpeedAverage = getData.getTotalAverage(windSpeed, key)
    	   windDirectionAverage = getData.getTotalAverage(windDirection, key)
    	   solarIrradianceAverage = getData.getTotalAverage(solarIrradiance, key)
    	
           januaryWindSpeed = getData.getMonthlyAverage(windSpeed, key, "1")
    	   return render_template('home.html', location=coords, 
    		  speed=windSpeedAverage, direction=windDirectionAverage, irradiance=solarIrradianceAverage, january=januaryWindSpeed)
        except:
            return render_template('home.html', location=coords, 
              speed="", direction="", irradiance="", january="")
@app.route('/test')
def runExternalScript():
	x = getData('windDirectionDatabase')

if __name__ == '__main__':
    app.run()
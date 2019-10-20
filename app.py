from flask import Flask, Markup, send_from_directory, render_template, request, redirect, url_for
import getData
import getCoord
import predict
import time
from bs4 import BeautifulSoup
import mimetypes

mimetypes.add_type('image/svg+xml', '.svg')

#logosoup = open("/Users/jakechoward/Desktop/GreenSwitch/Nasa-Hackathon-2019-master/logo.jpeg").read()
#logo = Image.open(logosoup)
# Initialize app
app = Flask(__name__, static_url_path='')
windSpeed = getData.readJsonDump('windSpeedDatabase')
windDirection = getData.readJsonDump('windDirectionDatabase')
solarIrradiance = getData.readJsonDump('solarIrradianceDatabase')

# Starting page, should only be a switch that the user controls
@app.route('/')
def RenderSwitch():
	return render_template('start.html')

@app.route('/', methods=['POST'])
def WatchSwitch():
	if request.method == "POST":
		if request.form.get('d_enabled') != 'on':
			return render_template('start.html')
	return redirect('/choose-location')

# After the switch is flipped, go to a page with a text box that the user
# can enter a location into
@app.route('/choose-location')
def my_form():
	return render_template('choose-location.html')

@app.route('/choose-location', methods=['POST'])
def parse_data():
	coords = ""
	windSpeedAverage = ""
	windDirectionAverage = ""
	solarIrradianceAverage = ""
	januaryWindSpeed = ""
	if request.method == "POST":
		try:
			x = request.form['textbox']
			coords = getCoord.locate(x)
			la = coords.split(':')[0]
			lo = coords.split(':')[1]
			address = coords.split(':')[2]
			coords = lo + ":" + la
			key = getData.convertToValidKey(float(la), float(lo))
			windSpeedAverage = getData.getTotalAverage(windSpeed, key)
			windDirectionAverage = getData.getTotalAverage(windDirection, key)
			solarIrradianceAverage = getData.getTotalAverage(solarIrradiance, key)
			januaryWindSpeed = getData.getMonthlyAverage(windSpeed, key, "1")
			costComparison = predict.costComparison(solarIrradianceAverage, windSpeedAverage)
			validityComparison = predict.validityComparison(solarIrradianceAverage, windSpeedAverage,  getData.calculateWorldWideAverage(solarIrradiance))
			
			windSpeedWR = round(getData.getWorldRanking(windSpeed, windSpeedAverage), 2)
			solarIrradianceWR = round(getData.getWorldRanking(solarIrradiance, solarIrradianceAverage), 2)			

			#print (costComparison)
			svg = open('/Users/jakechoward/Desktop/GreenSwitch/Nasa-Hackathon-2019-master/validSetup2.svg').read()
			svg2 = open('/Users/jakechoward/Desktop/GreenSwitch/Nasa-Hackathon-2019-master/costSetup.svg').read()
			soup = BeautifulSoup(Markup(svg))
			soup2 = BeautifulSoup(Markup(svg2))
			
			#print (str(costComparison) + ":" + str(validityComparison))
			#print(str(svg) + '\n\n' + str(svg2))
			return render_template('output.html', location=coords, error='',
				speed=windSpeedAverage, direction=windDirectionAverage, 
				irradiance=solarIrradianceAverage, january=januaryWindSpeed, 
				graph1=Markup(soup), graph2=Markup(soup2), address=address, min_speed=windSpeed["minimum"]["value"], max_speed=windSpeed["maximum"]["value"], 
				min_solar=solarIrradiance["minimum"]["value"], max_solar=solarIrradiance["maximum"]["value"],
				speed_ranking=windSpeedWR, solar_ranking=solarIrradianceWR)
		except:
			coords = "Invalid Location"
			return render_template('choose-location.html', address='', location='', error='Must Enter an Address',
				speed='', direction='', irradiance='', january='', graph1='', graph2='', min_speed='', max_speed='', 
				min_solar='', max_solar='',
				speed_ranking='', solar_ranking='')

if __name__ == '__main__':
	app.run(debug=True)




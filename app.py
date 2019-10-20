from flask import Flask, send_from_directory, render_template, request, redirect, url_for
import getData
import getCoord
import predict

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
	# Initially declare all values as null
	coords = ""
	windSpeedAverage = ""
	windDirectionAverage = ""
	solarIrradianceAverage = ""
	januaryWindSpeed = ""
	windSpeedWR = ""
	solarIrradianceWR = ""
	if request.method == "POST":
		x = request.form['textbox']
		coords = getCoord.locate(x)
		if coords:
			la = coords.split(':')[0]
			lo = coords.split(':')[1]
			coords = lo + ":" + la
			key = getData.convertToValidKey(float(la), float(lo))
			windSpeedAverage = getData.getTotalAverage(windSpeed, key)
			windDirectionAverage = getData.getTotalAverage(windDirection, key)
			solarIrradianceAverage = getData.getTotalAverage(solarIrradiance, key)
			januaryWindSpeed = getData.getMonthlyAverage(windSpeed, key, "1")

			windSpeedWR = round(getData.getWorldRanking(windSpeed, windSpeedAverage), 2)
			solarIrradianceWR = round(getData.getWorldRanking(solarIrradiance, solarIrradianceAverage), 2)
			costComparison = predict.costComparison(solarIrradianceAverage, windSpeedAverage)
			validityComparison = predict.validityComparison(solarIrradianceAverage, windSpeedAverage,  round(getData.calculateWorldWideAverage(solarIrradiance), 2))
		else:
			coords = "Invalid Location"
	return render_template('choose-location.html', location=coords, 
				speed=windSpeedAverage, direction=windDirectionAverage, irradiance=solarIrradianceAverage, january=januaryWindSpeed, 
				min_speed=windSpeed["minimum"]["value"], max_speed=windSpeed["maximum"]["value"], 
				min_solar=solarIrradiance["minimum"]["value"], max_solar=solarIrradiance["maximum"]["value"],
				speed_ranking=windSpeedWR, solar_ranking=solarIrradianceWR)

if __name__ == '__main__':
	app.run(debug=True)




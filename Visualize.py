import leather
import os

def costChart(a, b):

	data = [
    ('Wind', float(a)),
    ('Solar', float(b))
]
	
	os.remove("/Users/jakechoward/Desktop/GreenSwitch/Nasa-Hackathon-2019-master/costSetup.svg")
	chart = leather.Chart('Cost to implement 50% daily generation in your area')
	chart.add_columns(data, fill_color='#8CC63F')
	chart.to_svg('costSetup.svg')

	return chart

def validityChart(a, b):
	data = [
	('Wind', float(a)),
	('Solar', float(b))
]

	os.remove("/Users/jakechoward/Desktop/GreenSwitch/Nasa-Hackathon-2019-master/validSetup2.svg")
	chart = leather.Chart('Validity Ranking')
	chart.add_columns(data, fill_color='#8CD63F')
	chart.to_svg('validSetup2.svg')

	return chart


#def createChart()
#data = [
 #   ('Hello', 3),
 #   ('How', 5),
#    ('Are', 9),
#   ('You', 4)
#]

#chart = leather.Chart('Columns')
#chart.add_columns(data)
#chart.to_svg('examples/charts/columns.svg')
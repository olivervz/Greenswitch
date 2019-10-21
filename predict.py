import Visualize
import predict
## SOLAR AVERAGES ##
SolarUnits = "kW-hr/m^2/day"
AverageResidentialWattCost = 2.99

# ALL IN KILOWATT HOURS
AverageResidentialKiloWattCost = 2990
AverageDailyHouseholdProduction = 5
AverageMonthlyHouseholdProduction = 909
AverageYearlyHouseholdProduction = 10909
AverageDailyHouseholdConsumption = 30.3
AveragePanelDailyWattageProduction = 320
AveragePanelPrice = 960.00
AveragePanelCount = 15.63
AverageTotalCost = 14400.00
AveragePanelSize = 17.55


## WIND AVERAGES ##
WindUnits = "kW-hr/m^2/day"
WindSpeedUnits = "m/s"
AverageCommercialWindWattPrice = 1700000
AverageCommercialTurbinePrice = 3500000
AverageResidentialMaximumOutput = 36
AverageResidentialMinimumPrice = 20000
AverageResidentialMaximumPrice = 100000

#m/s
AverageResidentialEconomicSpeed = 7
AverageResidentialStartupSpeed = 2
AverageResidentialGenerationSpeed = 3.5
AverageResidentialOptimalSpeed = 15
AverageResidentialBreakingSpeed = 25
AverageResidentialMinimumOutput = 2

def validityComparison(a, b, c):
	WindRating = 1
	SolarRating = 1

	if(a > c):
		SolarRating = a-.5
	else:
		if (a > c/2):
			SolarRating = SolarRating - .8
		else:
			SolarRating = SolarRating - .4


	if(b < 23):
		if(b >= 10 and b <= 20):
			if(b >= 10 and b <14):
				WindRating = WindRating-.25
			if(b >=14 and b <= 16):
				WindRating = 1
			if(b > 16 and b < 20):
				WindRating = WindRating-.25
		else:
			if(b > 5 and b <10):
				WindRating = WindRating-.6
			else:
				WindRating = WindRating-.8
	else:
		WindRating = 0

	SolarRating = SolarRating/10

	#print ("a:" + str(a) + "\nWindRating" + str(WindRating) +  "\nb:" + str(b) + "\nSolarRating" + str(SolarRating))
	return Visualize.validityChart(WindRating, SolarRating)

#def weatherComparison(a, b, c):
def costComparison(a, b):
	PanelArea = 15000/((.75)*(a*365)*(.15))
	CostPerSquareFoot = AveragePanelPrice*AveragePanelSize
	SolarCost = PanelArea * CostPerSquareFoot
	WindCost = 0
	if (b < 23):
		if(b >= 10 and b <= 17):
			MaxWindPrice = AverageResidentialMaximumPrice/AverageResidentialMinimumOutput
			WindCost = (MaxWindPrice)*10
		else:
			MaxWindPrice = AverageResidentialMaximumPrice/AverageResidentialMinimumOutput
			WindCost = (MaxWindPrice)*15
	else:
		WindCost = 0

	SolarCost = '{number:.{digits}f}'.format(number=SolarCost, digits=2)
	WindCost = 	'{number:.{digits}f}'.format(number=WindCost, digits=2)
	print("max wind cost" + str(MaxWindPrice) + "\n max solar cost:" + str(CostPerSquareFoot))
	return Visualize.costChart(SolarCost, WindCost)
import json

def readJsonDump(fileName):
  with open(fileName + '.json') as json_file:
    return json.load(json_file)



def convertToValidKey(lon, lat):

  roundedLon = round(lon)
  roundedLat = round(lat)

  if roundedLon <= lon:
    roundedLon += 0.25
  else:
    roundedLon -= 0.25

  if roundedLat < lat:
    roundedLat += 0.25
  else:
    roundedLat -= 0.25


  return str(roundedLon) + "," + str(roundedLat)

def getMonthlyAverage(database, key, month):
  return database[key]['months'][month]

def getTotalAverage(database, key):
  return database[key]['completeAverage']

def round(num):
  if num > 0.0:
    num += 0.5
  else:
    num -= 0.5
  return float(int(num))

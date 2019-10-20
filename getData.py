import json

def readJsonDump(fileName):
  newfileName = 'data/'+fileName+'.json'
  with open(newfileName) as json_file:
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

  print(str(roundedLon) + "," + str(roundedLat))
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

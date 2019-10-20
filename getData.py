import json
import time

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
def calculateWorldWideAverage(database):

  numOfElements = 0
  combinedAverages = 0.0
  for entry in database.values():
    try:
      combinedAverages += entry['completeAverage']
      numOfElements += 1
    except KeyError:
      continue
  return combinedAverages/numOfElements


def getWorldRanking(database, value):

  size = 0
  x = 0
  for entry in database.values():
    try:
      if entry['completeAverage'] <= value:
        x += 1
      size += 1
    except KeyError:
      continue
  y = (x/size) * 100
  return y

'''

x = 80.00
y = 89.25

key = convertToValidKey(x, y)

print ("Loading database...")
windSpeedDatabase = readJsonDump("windSpeedDatabase")
print ("Loading done...")

print ("Calculating global average...")
globalAverage = calculateWorldWideAverage(windSpeedDatabase)
print ("Done calculating global average...")
print (globalAverage)
print (windSpeedDatabase['minimum']['value'])
print (windSpeedDatabase['maximum']['value'])


start = time.time()
print (getWorldRanking(windSpeedDatabase, 6.0))
end = time.time()
print (end - start)

'''
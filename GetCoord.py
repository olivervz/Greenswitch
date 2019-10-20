from geopy.geocoders import Nominatim

def main(x):
    geolocator = Nominatim(user_agent="TheGreenSwitch")

    location = geolocator.geocode(x)

#print(location.address)
    return str(location.latitude) + ":" + str(location.longitude)
#print(location.raw)
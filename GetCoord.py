from geopy.geocoders import Nominatim

def locate(x):
    geolocator = Nominatim(user_agent="TheGreenSwitch")

    location = geolocator.geocode(x)

    latitude = location.latitude
    longitude = location.longitude
    la = '{number:.{digits}f}'.format(number=latitude, digits=2)
    lo = '{number:.{digits}f}'.format(number=longitude, digits=2)
    a = lo
    b = la
    c = location.address
    if ((str(lo)).find('.') == 3):
    	a=(str(lo))[0:6]
    if ((str(la)).find('.') == 3):
    	b=(str(la))[0:6]
#print(location.address)
    return a + ":" + b + ":" + c
#print(location.raw)
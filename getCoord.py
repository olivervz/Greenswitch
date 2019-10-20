from geopy.geocoders import Nominatim

def locate(x):
    geolocator = Nominatim(user_agent="TheGreenSwitch")

    location = geolocator.geocode(x)
    if location == None:
        return None
    latitude = location.latitude
    longitude = location.longitude
    la = '{number:.{digits}f}'.format(number=latitude, digits=2)
    lo = '{number:.{digits}f}'.format(number=longitude, digits=2)
    a = lo
    b = la
    
    if ((str(lo)).find('.') == 3):
    	a=(str(lo))[0:6]
    if ((str(la)).find('.') == 3):
    	b=(str(la))[0:6]
    #print(location.address)
    return a + ":" + b
    #print(location.raw)
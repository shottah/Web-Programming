import json

# Create Class Definition
class StVincentCurrencyAndForecast:
    # Main Constructor
    def __init__ (self,temperature,rainfall,tides,timerange,humidity,date,pressure,synopsis,warning,sunset,sea_conditions,winds_desc,forecast,general_conditions,sunrise):
        self.temperature = temperature
        self.rainfall = rainfall
        self.tides = tides
        self.timerange = timerange
        self.humidity = humidity
        self.date = date
        self.pressure = pressure
        self.synopsis = synopsis
        self.warning = warning
        self.sunset = sunset
        self.sea_conditions = sea_conditions
        self.winds_desc = winds_desc
        self.forecast = forecast
        self.general_conditions = general_conditions
        self.sunrise = sunrise

    def toHTML (self):
        args = vars(self)
        # Table Headings
        str = "<table><thead><tr>"
        for item in args:
           str += "<th>"+ item +"</th>"
        str += "</tr></thead>"

        # Table Body
        str += "<tbody>"
        for item in args:
            str += "<tr><td>" + self.args + "</tr><td>"
        str += "</tbody></table>"
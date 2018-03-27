class StVincentCurrentAndForecast {
    constructor (temperature,rainfall,tides,timerange,humidity,date,pressure,synopsis,warning,sunset,sea_conditions,winds_desc,forecast,general_conditions,sunrise) {
        this.temperature = temperature
        this.rainfall = rainfall
        this.tides = tides
        this.timerange = timerange
        this.humidity = humidity
        this.date = date
        this.pressure = pressure
        this.synopsis = synopsis
        this.warning = warning
        this.sunset = sunset
        this.sea_conditions = sea_conditions
        this.winds_desc = winds_desc
        this.forecast = forecast
        this.general_conditions = general_conditions
        this.sunrise = sunrise
    }

    toDesc () {
        str += ""
        for (var p in self) {
            if (self.hasOwnProperty(p)) {
                str += p +" is " + self.p
            }
        }
    }
}
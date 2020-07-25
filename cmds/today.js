
const getRawWeather = require("../utilities/getRawWeather")
const getLocation = require("../utilities/getLocation")

module.exports = async function(location){
   if(location === undefined){
       location = await getLocation()
       
   }

   let rawData = await getRawWeather(location)
   rawData = rawData[0]
   console.log(rawData[ "applicable_date"]+" - Low: "+Math.trunc(rawData["min_temp"])+" | High:"+Math.trunc(rawData["max_temp"])+" | "+rawData["weather_state_name"])


}



const getRawWeather = require("../utilities/getRawWeather")
const getLocation = require("../utilities/getLocation")

module.exports = async function(location){
   if(location === undefined){
       location = await getLocation()
       
   }

   let rawData = await getRawWeather(location)
   for(x in rawData){
    console.log(rawData[x][ "applicable_date"]+" - Low: "+Math.trunc(rawData[x]["min_temp"])+" | High:"+Math.trunc(rawData[x]["max_temp"])+" | "+rawData[x]["weather_state_name"])
}


}




const axios = require("axios")

module.exports = async function (city){
    try{
        const data = await axios.get("https://www.metaweather.com/api/location/search/?query="+city)

        const id = data["data"][0]["woeid"]
        // console.log(id)
        let forecast = await axios.get("https://www.metaweather.com/api/location/"+id+"/")
        
    
        let wdata =  forecast.data["consolidated_weather"]
        // console.log(wdata)
        return wdata
        
    }catch(err){
        console.log(err)
    }

   


}


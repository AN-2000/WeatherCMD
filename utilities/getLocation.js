const axios = require("axios")

module.exports = async function (){
let Local = await axios.get("http://ip-api.com/json/")
Local = Local.data.city
// console.log(Local)
return Local
}




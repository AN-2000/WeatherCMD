#!/usr/bin/env node


const forecast = require("./cmds/forecast") 
const help = require("./cmds/help") 
const version = require("./cmds/version") 
const today = require("./cmds/today") 

// console.log(process.argv)

let cmd = process.argv[2]
let options = process.argv[3]
let location = process.argv[4]


if(cmd === "today"){
    if((options === "-l" || options === "--location")){
        today(location)
    }else{
        today()
    }

}else if(cmd === "forecast"){
    if((options === "-l" || options === "--location")){
        forecast(location)
    }else{
        forecast()
    }

}else if(cmd === "-v" || cmd === "--version"){
    version()
}else if(cmd === "help"){
    help()
}else{
    console.log("invalid command")
}


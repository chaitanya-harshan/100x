const fs = require("fs");
const path = require("path");


fs.readdir('../week-2/02-nodejs/files', (err,files)=>{
    if(err){
        console.log("error reading dir");
        throw err;
    }
    console.log(files);
})
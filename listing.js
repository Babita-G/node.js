const fs = require('fs');
const path = require('path');
const dirpath =path.join(__dirname,'files');
fs.readdir(dirpath,(err,files)=>{
    console.warn(files)
})
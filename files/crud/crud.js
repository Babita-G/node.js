const fs = require('fs');
const path = require('C:\Desktop\Nodejs\files\crud');
const dirpath = path.join(__dirname,'crud');
const filepath = `${dirpath}/guava.txt`;

fs.writeFileSync(filepath,'this is a simple text file');
fs.readFile(filepath,'utf8',(err,item)=>{
    console.log(item)
})

fs.appendFile(filepath,`and file name is guava.txt`,(err)=>{
    if(!err)console.log("file is updated")
})

fs.rename(filepath,`${dirpath}/fruit.txt`,(err)=>{
    if(!err)console.log("renamed")
})

fs.unlinkSync(`${dirpath}/fruit.txt`)
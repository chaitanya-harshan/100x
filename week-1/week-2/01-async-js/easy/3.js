const fs = require("fs");

const filePath = './file.txt';
fs.readFile(filePath, 'utf8', (err,data)=>{
    if(err){
        console.log("Error readind file.", err);
        return;
    }
    console.log(data);
})

let a = 0;
for (let i = 0; i < 1000000000; i++) {
    a += i;
}
console.log(a);
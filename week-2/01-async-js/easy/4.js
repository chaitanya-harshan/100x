const fs = require("fs");

data = '\nnew data to be written to the file\n';
// fs.writeFile    - writes to the end of the file
// fs. appendFile  - overwrites the content of the file
fs.appendFile('file.txt', data, (err)=>{
    if(err){
        console.log("error writing to the file", err);
        return;
    }
    console.log("Data is written successfully.");
})

let a = 0;
for (let i = 0; i < 100000000; i++) {
    a += i;
}
console.log(a);
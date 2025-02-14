const fs = require('fs');

// USING ARR.FILTER()
// IT'S QUITE BIG


// fs.readFile("./file.txt", 'utf8', (err,data)=>{
//     if(err){
//         console.log("error reading --",err);
//         return;
//     }
//     let string = data.split('');
//     let newdata = string.filter( (item, index)=>{
//         if (item === ' ' && string[index-1] === ' ') {
//             return false;
//         }
//         else return true;
//     });
//     let newString = newdata.join(''); 
//     fs.writeFile('./file-wr.txt', newString, (err)=>{
//         if (err) {
//             console.log("error writing.", err);
//             return;
//         }
//     })
// })

fs.readFile('file.txt', 'utf8', (err,data)=>{
    if(err){
        console.log("error reading", err);
        return;
    }
    fs.writeFile('file-wr.txt', data.replace(/\s\s+/g, ' '), (err)=>{
        if(err){
            console.log("error writing", err);
            return;
        }
        
    } )
})
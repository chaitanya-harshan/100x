/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise(function(resolve){
        setTimeout(resolve,n*1000);
    });
}

let start = Date.now();
let bro = wait(1);
// console.log(bro);    // <pending>

bro.then(function(){
    console.log(Date.now()-start);
    // console.log(bro);  // <undefined>
})

start = Date.now();
wait(3).then(function(){
    console.log(Date.now()-start);
})


module.exports = wait;

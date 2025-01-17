/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    return new Promise((resolve)=>{
        const start = Date.now();
        while( Date.now()-start < milliseconds ){
            // do nothing
        }
        resolve();   // * When resolve is called independently, it needs to be XXX(); *
    });
}


sleep(1000).then(function(){
    console.log("after 1 sec");
})

module.exports = sleep;
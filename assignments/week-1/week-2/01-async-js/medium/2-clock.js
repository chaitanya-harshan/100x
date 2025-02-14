let ampm = 'AM';

setInterval(function(){
    const currentDate = new Date();
    let hours = currentDate.getHours();
    console.log(hours+":"+currentDate.getMinutes()+":"+currentDate.getSeconds());

    if(hours > 12){
        hours -= 12;
        ampm = 'PM';
    }
    if(hours < 10 && hours != 0){
        hours = '0'+hours;
    }
    console.log(hours+":"+currentDate.getMinutes()+":"+currentDate.getSeconds()+" "+ampm);
    console.log("\n");

},1000);
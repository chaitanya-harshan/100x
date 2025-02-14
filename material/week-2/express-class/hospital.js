const express = require('express')
const app =  express();

const users = [{
    name: "john",
    kidneys: [{ healthy: false },{ healthy: true }]
}];

app.get('/', function(req, res){
    const johnKidneys = users[0].kidneys;
    const noOfKidneys= johnKidneys.length;
    let healthyKidneys = 0;
    for (let i = 0; i < johnKidneys.length; i++) {
        if (johnKidneys[i].healthy) {
            healthyKidneys++;
        }        
    }
    res.json({
        noOfKidneys,
        healthyKidneys
    })
})

app.use(express.json());

app.post('/', function(req,res){
    const johnKidneys = users[0].kidneys;

    const userChoice = req.body.ishealthy;
    johnKidneys.push({healthy: userChoice});
    res.json({
        message: "done!"
    })
})

app.put('/', function(req,res){
    for (let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy =  true;        
    }
    res.json({})
})

//app.delete('/', function.....)

app.listen(3000, ()=>{
    console.log("Server running on port 3000.");
});
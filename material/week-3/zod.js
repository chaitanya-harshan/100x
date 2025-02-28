const express = require("express");
const zod =  require("zod");
const app = express();

const schema = zod.array(zod.number())

// const schema = zod.object({
//     email: zod.string(),
//     password: zod.string(),
//     country: zod.literal("IN").or(zod.literal("US")),
//     kidneys: zod.array(zod.number())
// })

app.use(express.json());
app.post('/health-checkup', (req,res)=>{
    // kidneys = [1,2]
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    if (!response.success) {
        res.status(404).send("Wrong inputs " +response);
        console.log(response);
    }
    else res.send(response)
})

app.listen(3000);
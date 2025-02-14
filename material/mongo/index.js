const mongoose = require('mongoose');
const User = require('./user');

mongoose.connect("mongodb+srv://lemon:chaispaceX1415@cluster0.3w06p3p.mongodb.net/testdb");

const user = new User({
    name: "Chaitanya",
    age: 22,
    email: "chaitaNyareigns98@gmail.com",
    hobbies: ["watching YT", "Thinking/Dreaming"],
});

run();
// const user = mongoose.create(...........)
// creates & saves it automatially

async function run() {
    try{
        //----------------------------------------------------------SAVE ing User----------------------
        // await user.save();
        // console.log(user);
        // --------------------------------------------------------FINDING BY ID-----------------------
        // const someDude = await User.findById("663c6bf68d757797f1f5e17a");
        // console.log(someDude);
        //----------------------------------------------------------FIND---------------------------------
        // const bro = await User.find( {name: "Likhit"} )
        // console.log(bro);
        //----------------------------------------------------------FIND ONE------------------------------
        const bro = await User.findOne( {name: "Chaitanya"} )
        console.log(bro);
        //     
        //User.exists()   o/p: t/f-----------------------------------EXISTS------------------------------

        //----------------------------------------------------------QUERY---------------------------------
        // bro = await User.where("name").equals("Isaac")
        // .where("age")
        // .gt(20)
        // .lt(37);
        // console.log(bro);

        User.updateOne({id: "asdf"},
            {$push: {purchasesCourses: courseID}}
        )

        bro.sayHi();

    } catch(err){
        console.log(err.message);
    }
}


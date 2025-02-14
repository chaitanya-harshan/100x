const mongoose = require('mongoose');


const qualificationsSchema = new mongoose.Schema({
    HighestQualification: String,
    workExperience: Number,
    expectedPay: Number
})

const userSchema = new mongoose.Schema({
    name: String,
    //age: Number,
    age: {
        type: Number,
        min: 10,
        max: 30,
        validate: {
            validator: (v)=> v % 2 === 0,
            message: (v)=> `${v.value} is not even.`
        }
    },
    //createdAt: Date,
    createdAt: {
        type: Date,
        default: new Date()
    },

    bestFriend: mongoose.SchemaTypes.ObjectId,
    hobbies: [String],
    qualifications: qualificationsSchema,

    email: {
        type: String,
        required: true,
        lowercase: true,
        minLength: 11
    },
    
    address: {
        city: String,
        pincode: Number
    }    
});

userSchema.methods.sayHi = function(){
    console.log(`Hi! My name is ${this.name}.`);
}
module.exports = mongoose.model("User", userSchema); // creates the 'Users' collection/table
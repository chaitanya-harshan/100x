const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require("../config");

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const words = token.split(" ");
    const jwtToken = words[1];
    // console.log("===="+token+"\n\n|\n|\n"+words+"\n|\n|\n"+jwtToken);//========

    // jwt.verify gives the decoded paylaod as output if it's valid
    // else it will thow an error 
    try {
        const decode = jwt.verify(jwtToken, JWT_SECRET);
        req.username = decode.username;
        next();
    } catch (error) {
        res.json({
            message: "User not Authorized"
        })
    }
}

module.exports = userMiddleware;
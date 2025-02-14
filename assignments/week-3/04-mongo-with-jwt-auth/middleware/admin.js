const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require("../config");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization;
    const words = token.split(" ");
    const jwtToken = words[1];

    // jwt.verify gives the decoded paylaod as output if it's valid
    // else it will thow an error 
    try {
        const decode = jwt.verify(jwtToken, JWT_SECRET);
        next();
    } catch (error) {
        res.json({
            message: "User not Authorized"
        })
    }
}

module.exports = adminMiddleware;
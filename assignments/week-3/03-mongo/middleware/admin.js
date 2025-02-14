const { Admin } = require("../db");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;

    /* ----------------ADD "ASYNC" BEFORE 'function' TO USE THIS---------------------------- */
    // const check = await Admin.findOne({
    //     username: username,
    //     password: password
    // });
    // if (check) {
    //     next();
    // }
    // else{
    //     res.status(403).json({
    //         msg: "Admin doesn't exist"
    //     })
    // }

    Admin.findOne({
        username: username,
        password: password
    })
    .then( exists => { 
        if (exists) {
            next();
        }
        else{
            res.status(403).json({
                msg: "Admin doesn't exist"
            })
        }
    })
    .catch( err=>{
        console.log(err.message);
    })
}

module.exports = adminMiddleware;
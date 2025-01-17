const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User, Course} = require("../db");
const {JWT_SECRET} = require("../config")
const jwt = require("jsonwebtoken");

// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    const username = req.headers.username;
    const password =  req.headers.password;
    await User.create({
        username,
        password
    });
    res.json({
        msg: "User created successfully"
    });
});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const exists = await User.findOne({
        username,
        password
    });
    if (exists) {
        const token = jwt.sign({username: username}, JWT_SECRET);
        res.json({
            token: token
        })
    }
    else{
        res.status(403).json({
            message: "Incorrect username or password"
        })
    }
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    Course.find({}).then(courses => res.json({courses}) );
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const username = req.username;
    const courseId = req.params.courseId;

    User.updateOne({username}, {
        "$push": {purchasedCourses: courseId}
    })
    .then(()=>{
        res.json({
            message: "Course successfully purchased"
        })
    })
    .catch(err => console.log(err.message));
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const username = req.username;

    const user = await User.findOne({username})
    const courses =  await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    })
    res.json({courses})
});

module.exports = router
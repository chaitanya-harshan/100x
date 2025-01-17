const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course} = require("../db");
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");

// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    // There is no user input validation here
    await Admin.create({
        username,
        password
    });
    res.json({
        msg: "Admin created successfully."
    })
});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const exists = await Admin.findOne({
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

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;
    // do zod for i/p validation in real case scenario

    try {
        const newCourse = await Course.create({
            title,
            description,
            price,
            imageLink
        });
        res.json({
            msg: "Course published succefully",
            Courseid: newCourse._id
        })
    } catch (error) {
        console.log(error.message);
    }
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const courses = await Course.find({});
    res.json({courses});
});

module.exports = router;
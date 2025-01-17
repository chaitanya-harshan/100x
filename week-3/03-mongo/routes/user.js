const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
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

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    Course.find({}).then(courses => res.json({courses}) );
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const username = req.headers.username;
    const password =  req.headers.password;
    const courseId = req.params.courseId;
    User.updateOne({
        username,
        password
    }, {
        "$push": {purchasedCourses: courseId}
    })
    .then(function(response){
        res.json({msg: "Course purchased successfully"});
    })
    .catch( err => console.log(err.message))
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username;
    const password =  req.headers.password;
    const user = await User.findOne({username,password});

    // var course, courseId, courses_array = [];
    // for (let i = 0; i < user.purchasedCourses.length; i++) {
    //     courseId = user.purchasedCourses[i];
    //     course = await Course.findById(courseId);
    //     courses_array.push(course);
    // }
    // res.json(courses_array);

    const courses =  await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    });
    res.json( courses);
});

module.exports = router
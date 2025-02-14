const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://lemon:chaispaceX1415@cluster0.3w06p3p.mongodb.net/userappnew"
);

const User = mongoose.model("Users", {
  name: String,
  email: String,
  password: String,
});

const user = new User({
  name: "Chaitanya Harshan",
  email: "chaitanyareigns98@gmail.com",
  password: "starman",
});

user.save();
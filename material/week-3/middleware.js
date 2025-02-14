//app.js

const app = express();

//middleware 1
function userMiddleware(req, res, next) {
  if(username != 'john' || password != 'pass') {
    res.status(400).json({ msg: 'Incorrect inputs!' });
  }else{
    next();
  }
}

//middleware 2
function kidneyMiddleware(req, res, next) {
  if(kidneyId != 1 && kidneyId != 2) {
    res.json({ msg: 'Incorrect inputs' });
  }else{
    next();
  }
}

//using multiple middlewares
app.get('/heart-checkup', userMiddleware, kidneyMiddleware, function (req, res) {
  res.send('Your heart is healthy!');
});

app.get('/kidney-check', userMiddleware, kidneyMiddleware, function (req, res) {
  res.send('Your kidney is healthy!');
});

//using only one middleware
app.get('/health-checkup', userMiddleware, function (req, res) {
  res.send('Your health is fine!');
});
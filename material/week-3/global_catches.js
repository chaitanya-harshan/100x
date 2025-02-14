//..
//at the end of code
//..
app.use(function (err, req, res, next) {
    res.json({
      msg: 'Sorry, something is up with our server',
    });
  });

// Express recognizes it as an Error handling
// middleware becasue of these 4 arguments.
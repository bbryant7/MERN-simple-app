'use strict'
let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let commentSchema = require('./model/commentSchema')
let app = express();


mongoose.connect('mongodb://localhost:27017/kittenforumdb', {useMongoClient: true})

let router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ROUTES

router.get('/', function(req, res) {
  res.json({ message: 'API Initialized!'});
});


// Render saved comments
router.route('/comments')
  .get(function(req, res) {
    commentSchema.find(function(err, comments) {
      if (err)
        res.send(err);
      res.json(comments)
      console.log("comments ->", comments)
    });

  })

// New comment
.post(function(req, res) {
  let newComment = new commentSchema({
  author: req.body.author,
  text: req.body.text
  });

  newComment.save();
})




//Use our router configuration when we call /api
app.use('/api', router);



//starts the server and listens for requests
app.listen(3001, function() {
 console.log(`api running on port 3001`);
});


process.on('SIGINT', function() {
  console.log("\nshutting down");
  mongoose.connection.close(function() {
    console.log('Mongoose default connection disconnected on app termination');
    process.exit(0);
  });
});

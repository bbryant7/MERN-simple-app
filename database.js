"use strict";
let express = require("express");
let mongoose = require("mongoose");
let bodyParser = require("body-parser");
let expressValidator = require("express-validator");
let commentSchema = require("./model/commentSchema");
let app = express();
let router = express.Router();

mongoose.connect("mongodb://localhost:27017/kittenforumdb", {
  useMongoClient: true
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(expressValidator());

// CORS
app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
  );

  res.setHeader("Cache-Control", "no-cache");
  next();
});

// ROUTES

router.get("/", function(req, res) {
  res.json({ message: "API Initialized!" });
});

// Render saved comments
router.route("/comments")
  .get(function(req, res) {
    commentSchema.find(function(err, comments) {
      if (err) res.send(err);
      res.json(comments);
    });
  })

  // New comment
  .post(function(req, res) {
    req
      .checkBody("text", "please enter 5 or more characters")
      .isLength({ min: 5 });
    let err = req.validationErrors();
    if (err) {
      res.json(err);
      return;
    } else {
      let newComment = new commentSchema({
        author: req.body.author,
        text: req.body.text
      });

      newComment.save();
    }
  });

// delete comment
// router.route('/comments/:comment_id')
//   .delete(function(req, res) {
//   commentSchema.remove({ _id: req.params.comment_id }, function(err, comment) {
//     if (err)
//       res.send(err);
//     res.json({ message: 'Comment has been deleted' })
//   })
// });

app.use("/api", router);

app.listen(3001, function() {
  console.log(`api running on port 3001`);
});

process.on("SIGINT", function() {
  console.log("\nshutting down");
  mongoose.connection.close(function() {
    console.log("Mongoose default connection disconnected on app termination");
    process.exit(0);
  });
});

'use strict'
let express = require('express');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let app = express();
let router = express.Router();

mongoose.connect('mongodb://localhost:27017/kittenforumdb', {useMongoClient: true})

// body parser boiler plate
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// ROUTES








app.listen(3001, function() {
  console.log("Fire on all servers");
});


process.on('SIGINT', function() {
  console.log("\nshutting down");
  mongoose.connection.close(function() {
    console.log('Mongoose default connection disconnected on app termination');
    process.exit(0);
  });
});

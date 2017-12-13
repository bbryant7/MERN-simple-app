'use strict';

const mongoose = require('mongoose');

const commentsSchema = new mongoose.Schema({
  author: {type: String, required: true},
  text: {type: String, required:true }
})

module.exports = mongoose.model('Comment', commentsSchema)

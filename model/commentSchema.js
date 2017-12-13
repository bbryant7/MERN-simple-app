'use strict';

const mongoose = require('mongoose');

const CommentsSchema = new mongoose.Schema({
  author: {type: String, required: true},
  text: {type: String, required:true }
})

module.exports = mongoose.model('Comment', CommentsSchema)

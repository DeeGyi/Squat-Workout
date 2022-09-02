const mongoose = require('mongoose')

const Schema = mongoose.Schema

var squatSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatar: String, 
    weight: Number,
    googleId: String
  }, {
    timestamps: true
  });
  

module.exports = mongoose.model('Squat', squatSchema)
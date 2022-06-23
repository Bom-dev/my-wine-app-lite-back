const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Wine = new Schema({
  fullName: String,
  grapeType: String,
  region: String,
  label: String,
  maker: String
})

module.exports = mongoose.model('Wine', Wine)

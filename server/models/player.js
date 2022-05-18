const mongoose = require('mongoose')
const { Schema } = mongoose

const playerSchema = new Schema({
  username: String,
  password: String
})

module.exports = mongoose.model("Player", playerSchema)
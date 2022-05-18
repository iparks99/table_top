const mongoose = require('mongoose')
const { Schema } = mongoose

const playerSchema = new Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true }
}, { versionKey: false })

module.exports = mongoose.model("Player", playerSchema)
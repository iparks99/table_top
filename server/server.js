const express = require('express')
const mongoose = require('mongoose')
const port = 3000
require('dotenv').config()

var app = express()

app.get('/', function (req, res) {
  res.send('Hello world')
})

var server = app.listen(port, async function (err) {
  var host = '127.0.0.1'

  const mongo_uri = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/`
  console.log(mongo_uri)
  await mongoose.connect(mongo_uri)

  if (err) {
    console.error('Something went wrong: ', error)
  } else {
    console.log('Server is listening at http://%s:%d', host, port)
  }
})
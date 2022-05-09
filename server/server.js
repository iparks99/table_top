var cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const host = process.env.API_HOST
const port = process.env.API_PORT

const router = require('./routes/index')

var app = express()
app.use(express.json())
app.use(cors({ origin: `http://${host}:${port}` }))

app.use('/register', router)

app.get('/', function (req, res) {
  res.send('Hello world')
})

var server = app.listen(port, async function (err) {
  const mongo_uri = `mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/`
  console.log(mongo_uri)
  await mongoose.connect(mongo_uri)

  if (err) {
    console.error('Something went wrong: ', error)
  } else {
    console.log(`Server is listening at http://${host}:${port}`)
  }
})
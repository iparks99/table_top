const express = require('express')
const port = 3000

var app = express()

app.get('/', function (req, res) {
  res.send('Hello world')
})

var server = app.listen(port, function (err) {
  var host = '127.0.0.1'

  if (err) {
    console.error('Something went wrong: ', error)
  } else {
    console.log('Server is listening at http://%s:%d', host, port)
  }
})
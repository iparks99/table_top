const http = require('http')
const port = 3000

const server = http.createServer(function (req, res) {
  res.write('Hello world')

  res.end()
})

server.listen(port, function (err) {
  if (err) {
    console.error('Something went wrong: ', error)
  } else {
    console.log('Server is listening on port ' + port)
  }
})
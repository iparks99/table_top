const express = require('express')
const router = express.Router()

router.post('/', function (req, res) {
  console.log(req)
  res.header("Access-Control-Allow-Origin", "http://localhost:3000")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.status(200).json({ 'success': true })
})

module.exports = router
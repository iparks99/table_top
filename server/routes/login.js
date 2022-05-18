const express = require('express')
const router = express.Router()
const Player = require('../models/player')

router.post('/', function (req, res) {
  if (req == null || req.body == null
    || req.body.username == null
    || !req.body.username
    || req.body.password == null
    || !req.body.password) {
      return res.status(400).json({ 'success': false, 'msg': 'invalid request' })
    }

  Player.findOne({ 'username': req.body.username }, function (err, existingPlayer) {
    if (err) {
      return res.status(500).json({ 'success': false, 'msg': 'server error' })
    }
    if (!existingPlayer) {
      return res.status(400).json({ 'success': false, 'msg': 'invalid username' })
    }

    if (req.body.password === existingPlayer.password) {
      return res.status(200).json({ 'success': true })
    } else {
      return res.status(400).json({ 'success': false, 'msg': 'invalid password' })
    }
  })
})

module.exports = router
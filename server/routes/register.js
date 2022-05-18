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

  Player.find({ 'username': req.body.username }, function (err, existingPlayer) {
    if (err) {
      return res.status(500).json({ 'success': false, 'msg': 'server error' })
    }
    if (existingPlayer && existingPlayer.username === req.body.username) {
      return res.status(400).json({ 'success': false, 'msg': 'username taken' })
    }

    const player = new Player({
      username: req.body.username,
      password: req.body.password
    })
  
    player.save(err => {
      if (err) {
        console.error(err)
        return res.status(500).json({ 'success': false, 'msg': 'failed to create user' })
      } else {
        return res.status(200).json({ 'success': true })
      }
    })
  })
})

module.exports = router
const express = require('express')
const {
  randomPhoto
  // specificPhoto
} = require('../../controllers/photos.controllers')
const router = express.Router()

router.get('/random', randomPhoto)
// router.get('/:id', specificPhoto)

module.exports = router

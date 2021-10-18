const axios = require('axios')
const { unsplash } = require('../config/axios')
const catchAsync = require('../utils/catchAsync')

// @route   GET api/photos/random
// @desc    Get a random photo from Unsplash
// @access  Private
module.exports.randomPhoto = catchAsync(async (req, res, next) => {
  const { data } = await unsplash.get('/photos/random')
  res.json(data)
})

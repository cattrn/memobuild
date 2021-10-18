const axios = require('axios')
const { UNSPLASH_ACCESS_KEY } = process.env

const unsplash = axios.create({
  baseURL: 'https://api.unsplash.com/',
  headers: { Authorization: 'Client-ID ' + UNSPLASH_ACCESS_KEY }
})

module.exports = { unsplash }

const express = require('express');
const { default: Axios } = require('axios');
const router = express.Router();
const axios = require('axios')
require('dotenv').config();
//BASE WEATHER API
//http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=
 //q= is start of the query
/**
 * GET route template
 */
router.get('/', (req, res) => {
   axios.get(`http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=London`)
   .then(response=> {
    console.log(response.data)   
    res.send(response.data)
   })
   .catch(err=> console.log('error inside of /api/weather GET',err))
});


module.exports = router;
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
   axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY}&q=London&days=4`)
   .then(response=> {
    console.log(response.data.forecast)   
    res.send(response.data)
   })
   .catch(err=> {console.log('error inside of /api/weather GET',err) 
   res.sendStatus(404)
   })
});
router.get('/current/:id', (req, res) => {
   axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY}&q=${req.params.id}&days=4`)
   .then(response=> {
    console.log(response.data.forecast)   
    res.send(response.data)
   })
   .catch(err=> {console.log('error inside of /api/weather/current GET',err) 
   res.sendStatus(404)
   })
});
router.get('/forecast/:id', (req, res) => {
   axios.get(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY}&q=${req.params.id}&days=4`)
   .then(response=> {
    console.log(response.data.forecast)   
    res.send(response.data)
   })
   .catch(err=>{ console.log('error inside of /api/weather/forecast GET',err) 
   res.sendStatus(404)
   })
});


module.exports = router;
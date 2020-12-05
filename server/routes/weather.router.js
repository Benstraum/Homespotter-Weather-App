const express = require('express');
const router = express.Router();

//BASE WEATHER API
//http://api.weatherapi.com/v1
 
/**
 * GET route template
 */
router.get('/', (req, res) => {
    console.log('in weather router')
    let data = "we are good!"
    res.send(data)
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

});

module.exports = router;
var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/search/:phone', async(req, res) => {
    const number = req.params.phone;
  request({
    url: 'https://api.apilayer.com/number_verification/validate?',
    qs: {
      apikey: 'ZK8g3lOXwWZeZfqTdBMIguQ2CrIbZeeI',
      number: number
    }
  }).pipe(res);
});

module.exports = router;
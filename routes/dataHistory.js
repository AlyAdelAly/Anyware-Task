var express = require('express');
var router = express.Router();
const { Result } = require("../models/verifiedResult");


router.get('/historyData', async(req, res) => {
   
   Result.find().then((val,err) => {
     try {
        res.json(val);
    } catch(error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
   })
});

module.exports = router;
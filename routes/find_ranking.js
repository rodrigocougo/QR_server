var express = require('express');
var router = express.Router();

const mongoose = require("mongoose");
require("../db/schemas");
const newRanking = mongoose.model("ranking");

/* GET home page. */
router.get('/', function(req, res, next) {
    newRanking.find()
    .exec()
    .then(doc => {
      res.status(200).json(doc);
    })
    .catch(err => {
      res.status(500).json({error: err});
    });
});

module.exports = router;
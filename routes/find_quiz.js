var express = require('express');
var router = express.Router();

const mongoose = require("mongoose");
require("../db/schemas");
const quiz = mongoose.model("QuanticQuiz");

/* GET home page. */
router.get('/', function(req, res, next) {
  quiz.find()
    .exec()
    .then(doc => {
      res.status(200).json(doc);
    })
    .catch(err => {
      res.status(500).json({error: err});
    });
  //res.render('index', { title: 'Express' });
});

module.exports = router;
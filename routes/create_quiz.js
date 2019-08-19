var express = require('express');
var router = express.Router();

const mongoose = require("mongoose");
require("../db/schemas");
const quiz = mongoose.model("QuanticQuiz");

/* GET home page. */
router.post('/', function(req, res, next) {
    console.log(req.body);
    console.log(req.body.quizSessoesSchema.descricao);


    
  res.render('index', { title: 'Express' });
});

module.exports = router;
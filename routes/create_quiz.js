var express = require('express');
var router = express.Router();

const mongoose = require("mongoose");
require("../db/schemas");
const quiz = mongoose.model("QuanticQuiz");

/* GET home page. */
router.post('/', function(req, res, next) {
    console.log(req.body);
    console.log(req.body.quizSessoesSchema.descricao);
    
    const newQuiz = new quiz({
        quizSessoesSchema: req.body.quizSessoesSchema, 
        quizQuestoesSchema: req.body.quizQuestoesSchema,
        quizRespostasSchema: req.body.quizRespostasSchema
      });
      
      newQuiz.save().then(() => {
          console.log("Cadastro sucesso!");
      }).catch((err) => {
          console.log("erro: " + err)
          res.status(201).json({
            message: "Falha no insert: erro: " + err
    
        });
      });

    
  //res.render('index', { title: 'Express' });
});

module.exports = router;
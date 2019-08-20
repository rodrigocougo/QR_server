var express = require('express');
var router = express.Router();

const mongoose = require("mongoose");
require("../db/schemas");
const ranking = mongoose.model("ranking");

/* GET home page. */
router.post('/', function(req, res, next) {

    const insertRanking = new ranking({
        ranking: req.body.ranking, 
        resultados: req.body.resultados
      });
      
      insertRanking.save().then(() => {
          console.log("Ranking cadastrado com sucesso!");
      }).catch((err) => {
          console.log("erro: " + err)
          res.status(201).json({
            message: "Falha no insert: erro: " + err
    
        });
      });

});

module.exports = router;
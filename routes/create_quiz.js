var express = require('express');
var router = express.Router();

const mongoose = require("mongoose");
require("../db/schemas");
const quiz = mongoose.model("QuanticQuiz");

/* GET home page. */
router.post('/', function(req, res, next) {
//    console.log(newQuiz.quizQuestoesSchema.id);
    //console.log(req.body.quizSessoesSchema.descricao);

    /* const filter = { 
      _id : '5d5712579609a0346c4b1cc0', 
      quizSessoesSchema : [
        {
            total_questoes : 0, 
            _id : '5d5712579609a0346c4b1cc1' 
        }
      ]
    };
    const update = req .body.quizSessoesSchema;*/

    // `doc` is the document _after_ `update` was applied because of
    // `new: true`

    /* let query = {
      _id: '5d5b3c9ffd6d24306cadfc4b',
      data: [{name: 'subobjectName'}] // Need this for an exact match
    }    
    //let update = {$push: {'data.$[el].maxT': testMaxT}}    
    let update = {$push: {'quizSessoesSchema': req.body.quizSessoesSchema}}    
    //let options = {upsert: true, arrayFilters: [{'el.name': 'subobjectName'}]}  
    let options = {upsert: false} 
    quiz.findOneAndUpdate(query, update, options, function(err, numberAffected, rawResponse) {
      console.log("resposta: " + rawResponse);
      console.log("afetados: " + numberAffected);
      console.log("erro: " + err);
      res.status(201).json({
        message: "Falha no insert: erro: " + err});
    }); */



    /* quiz.updateOne(
      { _id: '5d5b3c9ffd6d24306cadfc43'},
      { $set: { "quizSessoesSchema" : req.body.quizSessoesSchema } }
   ) */





    const id = "5d5b3c9ffd6d24306cadfc43";
    if(mongoose.Types.ObjectId.isValid(id)) {
      quiz.findByIdAndUpdate({_id: id},{$set:{quizSessoesSchema: req.body.quizSessoesSchema}},{new:true}, function(err, numberAffected, rawResponse) {
        console.log("resposta: " + rawResponse);
        console.log("afetados: " + numberAffected);
        console.log("erro: " + err);
        res.status(201).json({
          message: "Falha no insert: erro: " + err});
      });      
      /* .then((docs)=>{
         if(docs) {
          console.log("sucesso: " + err);
         } else {
          console.log("falha: " + err);
         }
      }).catch((err)=>{
        console.log("erro: " + err);
      }) */
    } else {
      console.log("objeto invalido");
    }

    //console.log(doc);

    /* const newQuiz = new quiz({
      quizSessoesSchema: req.body.quizSessoesSchema, 
      quizQuestoesSchema: req.body.quizQuestoesSchema,
      quizRespostasSchema: req.body.quizRespostasSchema
    });

    var newQuizData = newQuiz.toObject();


    quiz.findOneAndUpdate({
      quizSessoesSchema [{id : "5d5712579609a0346c4b1cc1"}]
      }, newQuizData, {new: true, useFindAndModify: false}, function(err, numberAffected, rawResponse) {
        
          console.log("erro: " + err);
          res.status(201).json({
            message: "Falha no insert: erro: " + err});
     }); 
        
     console.log(req.body); */
    
    /* const newQuiz = new quiz({
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
      });*/

    
  //res.render('index', { title: 'Express' });
});

module.exports = router;
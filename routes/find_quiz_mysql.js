var express = require('express');
var router = express.Router();
const knex = require('../db/db_connect_mysql');

router.get('/', function (req, res, next) {
  //res.send(req.params);
  knex.select().from('tbQuizSessoes').join('tbQuestoes', 'tbQuestoes.id_sessao', 'tbQuizSessoes.id_sessao').join('tbRespostas', 'tbRespostas.id_questao', 'tbQuestoes.id_questoes').then((dados) => {
      res.send(dados);
  }, next)
  //return next();
});

/* router.listen(3306, function () {
  console.log('%s listening at %s', server.name, server.url);
}); */

/* GET home page. */
/* router.get('/', function(req, res, next) {
  quiz.find()
    .exec()
    .then(doc => {
      res.status(200).json(doc);
    })
    .catch(err => {
      res.status(500).json({error: err});
    });
  //res.render('index', { title: 'Express' });
}); */

module.exports = router;
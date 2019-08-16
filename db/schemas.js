
//const db = require("./db_connect");   Coloquei direto no App.js
var mongoose = require('mongoose');

//Schemas do QUANTIC QUIZ;
const QuizSchema = mongoose.Schema({
    quizSessoesSchema: [{
        descricao: {type: String, require: true}, 
        total_questoes: {type: Number, default: 0}, 
        tipo: {type: String}, 
        ult_atualizacao: {type: Date, default: Date.now}
    }], 
    quizQuestoesSchema: [{
        categoria: {type: String, require: true}, 
        grupo: {type: String, require: true}, 
        descricao: {type: String, require: true}, 
        quant_respostas: {type: Number, default: 0}, 
        respostas_aleatorias: {type: Boolean, default: false}        
    }], 
    quizRespostasSchema: [{
        descricao: {type: String, require: true}, 
        ordem: {type: Number, require: 0}, 
        pontos: {type: Number, default: 0}, 
        status: {type: Number, default: 1}, 
        resposta: {type: Boolean, default: false}
    }]
});
//*************************** */

var BriefingSchema = mongoose.Schema({
    dados_empresa: {
        breve_descricao: String, 
        nome_empresa: String, 
        contato: String, 
        email: String, 
        telefone: String, 
        end_empresa: String,
        data_criacao: {type: Date, default: Date.now}
    }, 
    cons_tecnologias: {
        breve_descricao: String, 
        resumo_problema: String
    },
    cons_processos: {
        breve_descricao: String, 
        resumo_problema: String
    },
    cons_metodologias: {
        breve_descricao: String, 
        resumo_problema: String
    },
    cons_cultura: {
        breve_descricao: String, 
        resumo_problema: String
    },
    cons_projetos: {
        breve_descricao: String, 
        resumo_problema: String
    }

});

mongoose.model("ModelBriefing", BriefingSchema);
mongoose.model("QuanticQuiz", QuizSchema);


/* new ModelBriefing({
    dados_empresa: {
        breve_descricao: "teste"
    }
  }).save().then(() => {
      console.log("Cadastro sucesso!")
  }).catch((err) => {
      console.log("erro: " + err)
  });  */

//module.exports = { ModelBriefing }
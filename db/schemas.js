
//const db = require("./db_connect");   Coloquei direto no App.js
var mongoose = require('mongoose');

//Schemas do QUANTIC QUIZ;
const QuizSchema = mongoose.Schema({
    quizSessoesSchema: [{
        descricao: {type: String, require: true}, 
        total_questoes: {type: Number, default: 0}, 
        tipo: {type: String}, 
        ult_atualizacao: {type: Date, default: Date.now}, 
        quizQuestoesSchema: [{
            categoria: {type: String, require: true}, 
            grupo: {type: String, require: true}, 
            descricao: {type: String, require: true}, 
            quant_respostas: {type: Number, default: 0}, 
            respostas_aleatorias: {type: Boolean, default: false},        
            quizRespostasSchema: [{
                descricao: {type: String, require: true}, 
                ordem: {type: Number, require: 0}, 
                pontos: {type: Number, default: 0}, 
                status: {type: Number, default: 1}, 
                resposta: {type: Boolean, default: false}
            }]
        }],
    }], 
});

//*************************** */
//Schema do QUANTIC QUIZ / RANKING
const ranking = mongoose.Schema({
    ranking: {
        empresa: {type: String, require: true}, 
        ranking: {type: Number, require: true, default: 0}, 
        resultado: {type: String, require: true}, 
        data_criacao: {type: Date, default: Date.now}, 
        resultados: [{
            sessao_tipo: {type: String, require: true}, 
            questao_grupo: {type: String, require: true}, 
            questao_categoria: {type: String, require: true}, 
            resposta: {type: Number, require: true},             
            resposta_pontuacao: {type: Number, require: true, default: 0}
        }]
    }
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
mongoose.model("ranking", ranking);


/* new ModelBriefing({
    dados_empresa: {ranking
        breve_descricao: "teste"
    }
  }).save().then(() => {
      console.log("Cadastro sucesso!")
  }).catch((err) => {
      console.log("erro: " + err)
  });  */

//module.exports = { ModelBriefing }
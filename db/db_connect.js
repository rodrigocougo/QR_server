/*//if(!global.database){

    var mongoClient = require("mongodb").MongoClient;
    mongoClient.connect("mongodb://localhost:27017/teste", { useNewUrlParser: true })
        .then(conn => connection = conn.db("teste"))
        .catch(err => console.log(err));

        //}

function findClientes(callback){
    global.connection.collection("teste").find({}).toArray(callback);
}

module.exports = { findClientes }*/



const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/quantic_recruitment", {
    useNewUrlParser: true
    }).then(() => {
        console.log("MongoDB Conectado...")
    }).catch((err) => {
        console.log("Houve um erro ao se conectar ao mongoDB: " + err)
    })

    /* function CriaDB_briefing(){
        const BriefingSchema = mongoose.Schema({
            dados_empresa: {
                breve_descricao: String, 
                nome_empresa: String, 
                contato: String, 
                email: String, 
                telefone: String, 
                end_empresa: String
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
        const briefing = mongoose.model("briefing", BriefingSchema);

        new briefing({
            dados_empresa: {
                breve_descricao: "teste"
            }
        }).save().then(() => {
            console.log("Cadastro sucesso!")
        }).catch((err) => {
            console.log("erro: " + err)
        }) 
    }*/

//module.exports = {}



/*var Mongoose = require('Mongoose');

var db = Mongoose.connection;

db.on('error', console.error);
db.once('open', function() {
  console.log('Conectado ao MongoDB ok.')
  // Vamos adicionar nossos Esquemas, Modelos e consultas aqui
});

Mongoose.connect('mongodb://localhost/quantic_recruitment', { useNewUrlParser: true });

function findClientes(){
    global.database.collection("teste").find().toArray((docs) => {
        return docs;
    });
}

module.exports = { findClientes }*/






/*const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'quantic_recruitment';

// Create a new MongoClient
const client = new MongoClient(url);

const db = "";

// Use connect method to connect to the Server
client.connect(function(err, client) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  const db = client.db(dbName);
    
});

function findClientes(){

    // Insert a single document
    db.collection('inserts2').insertOne({a:1}, function(err, r) {
        assert.equal(null, err);
        assert.equal(1, r.insertedCount);

        // Insert multiple documents
        db.collection('inserts').insertMany([{a:2}, {a:3}], function(err, r) {
        assert.equal(null, err);
        assert.equal(2, r.insertedCount);

        client.close();
        });
    });
}

module.exports = { findClientes }*/
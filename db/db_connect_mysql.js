const knex = require('knex')({
    client: 'mysql',
    version: '5.1', 
    connection: {
      host : '162.241.203.232',
      user : 'ccdigi42_user',
      password : 'cougo3100',
      database : 'ccdigi42_dbQuiz'
    }
  });

  module.exports = knex;
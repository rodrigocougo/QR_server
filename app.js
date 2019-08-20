var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

/* Conexão Mongo com Mongoose */
const mongoose = require("mongoose");
mongoose.useNewUrlParser = true;
mongoose.useCreateIndex = true;
mongoose.Promise = global.Promise;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var create_quizRouter = require('./routes/create_quiz');
var create_rankingRouter = require('./routes/create_ranking');
var find_quizRouter = require('./routes/find_quiz');
var find_quizRouter_mysql = require('./routes/find_quiz_mysql');
var find_rankingRouter = require('./routes/find_ranking');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/create_quiz', create_quizRouter);
app.use('/create_ranking', create_rankingRouter);
app.use('/find_quiz', find_quizRouter);
app.use('/mysql/find_quiz', find_quizRouter_mysql);
app.use('/find_ranking', find_rankingRouter);

//conexão com mongo
//mongoose.connect("mongodb://localhost:27017/quantic_recruitment", {
mongoose.connect("mongodb+srv://quantic:102030@quantic-db-dlvxc.mongodb.net/test?retryWrites=true&w=majority&readPreference=secondary&replicaSet=your_replSet_name&ssl=true", {
    useNewUrlParser: true, useCreateIndex: true 
    }).then(() => {
        console.log("MongoDB Conectado...")
    }).catch((err) => {
        console.log("Houve um erro ao se conectar ao mongoDB: " + err)
    })

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

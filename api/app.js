var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var violasRouter = require('./routes/violas');
// const { default: mongoose } = require('mongoose');

const mongoose = require("mongoose")

var app = express();
app.use((req,res,next)=>{
  res.setHeader("Access-Control-Allow-Origin","*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, x-Requested-With,Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Methods","GET, POST, PATCH, DELETE, OPTIONS");
    next();

  
});

mongoose.connect(
  "mongodb://localhost:27017/dbviola"
).then(()=>{
  console.log("connect to Database");
}).catch((err)=>{
  console.log("connection Failed");
});

// const createPariswisata = (req, res) => {
//     const pari = new Buku({
//         judul : req.body.judul,
//         penulis : req.body.penulis,
//         genre : req.body.genre
//     });

//     console.log(buku);
//     buku.save()
//     .then((createdBuku)=>{
//         res.status(201).json({
//             message : "Data berhasil disimpan",
//             bookId : createdBuku._id
//         });
//     })
//     .catch((err)=>{
//         console.log(err);
//         res.status(500).json({
//             message : "internal server error",
//            // error : err
//         });

//     });
    
// };

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
app.use('/viola', violasRouter);

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

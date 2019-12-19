require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');

const session    = require("express-session");
const MongoStore = require("connect-mongo")(session);
const passport = require('passport')
//const passportGuides = require('passport')
const cors = require('cors');

// const whitelist = ['http://localhost:3000']
// const corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   },
//   credentials: true
// }


require('./configs/db.config');
//require('./configs/passport.config');
require('./configs/passportGuide.config');


const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

app.use(cors({
  credentials: true,
  origin: ['https://dingooo.herokuapp.com','http://localhost:3000']
}));

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


// Enable authentication using session + passport
app.use(session({
  secret: 'Todo-app',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 1000
  },
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: 24 * 60 * 60
  })
}))
app.use(passport.initialize())
app.use(passport.session())


// app.use(session({
//   secret: 'Todo-app',
//   resave: false,
//   saveUninitialized: true,
//   cookie: {
//     secure: false,
//     httpOnly: true,
//     maxAge: 60 * 60 * 24 * 1000
//   },
//   store: new MongoStore({
//     mongooseConnection: mongoose.connection,
//     ttl: 24 * 60 * 60
//   })
// }))
// app.use(passportGuides.initialize())
// app.use(passportGuides.session())

    

const index = require('./routes');
app.use('/', index);

app.use((req, res) => {
  res.sendFile(__dirname + "/public/index.html");
  });

  
module.exports = app;

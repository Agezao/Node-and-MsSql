const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const routes = require('./routes');
const config = require('../config');

//

const app = express();

// Main Setup
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(cors());
//

// mount all routes on / path
app.use('/', routes);

// catch 404
app.use((req, res, next) => {
  return res.status(404).json({
    success: false,
    code: -1,
    message: "Not found"
  });
});


app.use((err, req, res, next) => {
  if(err.message !== 'validation error' || err.status !== 400)
    return next(err);

  return res.status(400).json({
      success: false,
      code: -1,
      message: "Missing required field " + err.errors[0].field,
      data: config.env === 'development' ? err.stack : {}
    });
});

// error handler, send stacktrace only during development
app.use((err, req, res, next) => {
  return res.status(500).json({
    success: false,
    code: -1,
    message: "Unexpected error happened. Please report to dev team!",
    data: config.env === 'development' ? err.stack : {}
  });
});

module.exports = app;
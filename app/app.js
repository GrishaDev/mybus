const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('dotenv').config()

const { handleError } = require('./helpers/utils/error');
const indexRouter = require('./routes/index');

// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

app.use((err,req,res,next)=> {
    handleError(err ,res);
});

module.exports = app;

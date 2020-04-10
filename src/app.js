const express = require('express');
const morgan = require('morgan');

const app = express();

//  Middlewares
app.use(morgan('dev'));
app.use(express.json());

//  Routes
app.use(require('./routes/task.routes'));
app.use(require('./routes/user.routes'));

module.exports = app;
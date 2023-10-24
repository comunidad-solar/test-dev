'use strict';

require('dotenv').config();
const express = require("express");
const app = express();
app.use(express.json());


app.use('/prueba', require('./routes/prueba'));

app.listen(4000);


module.exports = app;


const express = require ('express');
const mysql = require ('mysql');
const db = require('../database/database.js');
const router = require('./routes.js');


const app = express();

app.use(express.static('../client/dist'));
app.use(router); //to set up router;

app.listen(3004, () => console.log('Server listening on port 3004!'));

module.exports.app = app;

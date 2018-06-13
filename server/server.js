const express = require ('express');
const mysql = require ('mysql');
const db = require('../database/database.js');
const router = require('./routes.js');
const path = require('path')

const app = express();

app.use(express.static('../client/dist'));
app.use(router); //to set up router;
router.get('/:id', (req, res) => {
  res.sendFile(path.join(__dirname + '/../client/dist/index.html'))
})

app.listen(3004, () => console.log('Server listening on port 3004!'));

module.exports.app = app;

const express = require ('express');
const mysql = require ('mysql');
const db = require('../database/database.js');
const router = require('./routes.js');
const path = require('path')

const app = express();

const options = {
  setHeaders: (res) => {
    res.set({ 'Access-Control-Allow-Origin': 'http://localhost:3000' });
  },
};

app.use('/:id', express.static(path.join(__dirname, '/../client/dist'), options));
app.use(router); //to set up router;
// router.get('/:id', (req, res) => {
//   res.sendFile(path.join(__dirname + '/../client/dist/index.html'))
// })

app.listen(3004, () => console.log('Server listening on port 3004!'));

module.exports.app = app;

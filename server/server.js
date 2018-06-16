const express = require ('express');
const mysql = require ('mysql');
const db = require('../database/database.js');
const router = require('./routes.js');
const path = require('path');
const morgan = require('morgan');
const port = process.env.Port || 3004

const app = express();

const options = {
  setHeaders: (res) => {
    res.set({ 'Access-Control-Allow-Origin': 'http://localhost:3000' });
  },
};

app.use(morgan('dev'));
app.use('/:id', express.static(path.join(__dirname, '/../client/dist'), options));
app.use(router); //to set up router;
// router.get('/:id', (req, res) => {
//   res.sendFile(path.join(__dirname + '/../client/dist/index.html'))
// })

app.listen(8081, () => console.log('Server listening on port 8081!'));

module.exports.app = app;

const express = require ('express');
const mysql = require ('mysql');
const db = require('../database/database.js');
const router = require('./routes.js');
const path = require('path');
const morgan = require('morgan');
const port = process.env.PORT || 3004

const app = express();

const options = {
  setHeaders: (res) => {
    res.set({ 'Access-Control-Allow-Origin': '*' });
  },
};

app.use(morgan('dev'));
app.use('/:id', express.static(path.join(__dirname, '/../client/dist'), options));
app.use(router); //to set up router;
// router.get('/:id', (req, res) => {
//   res.sendFile(path.join(__dirname + '/../client/dist/index.html'))
// })

app.listen(port, () => console.log(`Server listening on port ${port}!`));

module.exports.app = app;

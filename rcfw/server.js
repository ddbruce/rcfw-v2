const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();
const conf = require('./config')

var mysql      = require('mysql');

var connection = mysql.createConnection({
  host     : conf.host,
  user     : conf.user,
  password : conf.password,
  database : conf.database
});

// API file for interacting with MongoDB
const api = require('./api/api');

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/api/getDepartments', function (req, res) {

  connection.connect();

  connection.query('SELECT name FROM departments', function (error, results, fields) {
  if (error) throw error;
    console.log('The solution is: ', results[0]);
  });
  // res.send(books);
});

// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));

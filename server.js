var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res, next) {
   res.sendFile(__dirname + '/index.html');
});

app.listen(process.env.PORT || 3000);
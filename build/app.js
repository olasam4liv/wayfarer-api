'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.json());

app.get('/', function (req, res) {
  res.status(200).send({ 'message': 'Welcome to WayFarer App' });
});

app.get('/wayfarer/v1/user', function (req, res) {

  res.send("Welcome here");
});

var server = process.env.PORT || 3000;
app.listen(server, function () {
  return console.log('My app is listening to port  ' + server);
});

module.exports = server;
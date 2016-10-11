var express = require('express');
var path = require('path')
var app = express();

app.use(express.static(path.join(__dirname, '/public')));

app.listen(process.env.PORT || 3002, function () {
  console.log('Example app listening on port 3002!');
});
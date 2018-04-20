var express = require('express');
var soap = require('soap');
// var ntlm = require('express-ntlm')
var fs = require('fs');
var app = express();

app.get('/dog', function(req, res){
  console.log('Connected with dog');  
  res.send({ express: 'Dogger' });
});

app.listen(5000);
console.log("Express server listening on port 5000");
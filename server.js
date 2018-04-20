var express = require('express');
var soap = require('soap');
var fs = require('fs');
var app = express();

app.get('/dog', function(req, res){
  console.log('Connected with dog');  
  res.send({ express: 'Dogger' });
});

// //if needing NTLM authentication, save the wsdl file to local and use this
// app.get('/api/soap', function(req, res, next) {
//   console.log('Connected with /api/soap')
//   var url = 'local wsdl copy';
//   var auth = "Basic " + new Buffer("domainname\\\\tid" + ":" + "password").toString("base64");
//   let request = require('request');
//   let request_with_defaults = request.defaults({
//     strictSSL: false
//   });
//   let soap_client_options = {
//     'request': request_with_defaults,
//     'wsdl_headers': {
//       Authorization: auth
//     }
//   };
//   soap.createClient(url, soap_client_options, function(err, client) {
//     if (err){
//       console.log("====CREATE CLIENT FAILED====");
//       console.log(err);
//     }
//     client.setSecurity(new soap.BasicAuthSecurity("tid", "password"));
//     client.whateverOperation(null, function(err, result, rawResponse, soapHeader, rawRequest) {
//       if (err){
//         console.log("====INSIDE FUNCTION FAILED====");
//         console.logg(err);
//       }
//       console.log("RESULT", result);
//       console.log("RAW REQUEST", rawRequest);
//       console.log("Raw Response", rawResponse);
//       console.log("Soap Header", soapHeader);
//       res.send({ express: rawResponse });
//     });
//   });
// });

// // If using a regular old connection
// app.get('/api/soap', function(req, res, next) {
//   var url = '';
//   var args = {
//     attributes: {}
//   };
//   let request = require('request');
//   let request_with_defaults = request.defaults({
//     strictSSL: false
//   });
//   let soap_client_options = {'request': request_with_defaults};
//   soap.createClient(url, soap_client_options, function(err, client) {
//     if (err){
//       console.log("====CREATE CLIENT FAILED====");
//       console.log(err);
//     }
//     client.setSecurity(new soap.BasicAuthSecurity("tid", "password"));
//     client.whateverMethod(args, function(err, result, rawResponse, soapHeader, rawRequest) {
//       if (err){
//         console.log("====INSIDE FUNCTION FAILED====");
//         console.logg(err);
//       }      
//       console.log(rawResponse);
//       res.send({express: rawResponse});
//     });
//   });
// });

app.listen(5000);
console.log("Express server listening on port 5000");
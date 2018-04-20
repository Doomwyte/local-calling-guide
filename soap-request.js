var express = require('express');
var soap = require('soap');
var router = express.Router();

/* GET home page. */
router.get('/soap-request', function(req, res, next) {
  var url = 'http://www.webservicex.net/length.asmx?WSDL';
  var args = {
    LengthValue: "20",
    fromLengthUnit: "Centimeters",
    toLengthUnit: "Millimeters"
  };
  soap.createClient(url, function(err, client) {
    client.ChangeLengthUnit(args, function(err, result) {
      console.log(result);
    });
    res.render('index', { title: "Express" });
  });
});

module.exports = router;
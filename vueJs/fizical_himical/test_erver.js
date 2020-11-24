const express = require("express"),
      bodyParser = require("body-parser"),
      fs = require('fs'),
      app = express(),
      calc = require('./calc/index'),
      dH = calc.dH(),
      dS = calc.dS(),
      cPa = calc.cP().$oneResultdA,
      cPb = calc.cP().$oneResultdB,
      cPc = calc.cP().$oneResultdC,
      dHt = calc.dHt(0, calc.dH(), calc.cP().$oneResultdA, calc.cP().$oneResultdB, calc.cP().$oneResultdC),
      dSt = calc.dSt(0, calc.dS(), calc.cP().$oneResultdA, calc.cP().$oneResultdB, calc.cP().$oneResultdC),
      dGt = calc.dGt(0, dHt, dSt),
      resultsData = {
        dH: dH,
        dS: dS,
        cPa: cPa,
        cPb: cPb,
        cPc: cPc,
        dHt: dHt,
        dSt: dSt,
        dGt: dGt
      };


app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post('/demo', function (req, res) {
  // console.log(req.body); 


  // write data(client input) for calculate
  let requestClient = JSON.stringify(req.body, '', 4); 
  fs.writeFileSync('./calc/data_full.json', requestClient); 
  // console.log(requestClient);
  
  
  // write data (results calculate ) for pug template inside
  let resultsDataJson = JSON.stringify(resultsData, '', 4);
  fs.writeFileSync('./views/data_results.json', resultsDataJson);
  // console.log(resultsDataJson);
});


app.listen(8081);


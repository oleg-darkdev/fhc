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

app.use(express.static(__dirname + "/public"));
 




/* 
        ROUTING FOR DEMO VERSION
*/
app.get("/public/results/demo/pdf",function (req, res) {
	console.log('demo  pdf');
});

app.get("/public/results/demo/html", function (req, res) {
  console.log('demo html ');
});
/* 
        ROUTING FOR FULL VERSION
*/
app.get("/public/results/full/pdf",function (req, res) {
	console.log('full');
});

app.get("/public/results/full/html", function (req, res) {
  console.log('full');
});
/* 
        ROUTING FOR CALCULATION
*/

// Правильно обработать ошибку!!!!!!!!
app.post("/demo", function (req, res) {
  if (!req.body) return res.sendStatus(400);

  // write data(client input) for calculate
  let requestClient = JSON.stringify(req.body, '', 4);
  fs.writeFileSync('./calc/dataClient.json', requestClient);
  // // console.log(requestClient);


  // write data (results calculate ) for pug template inside
  let resultsDataJson = JSON.stringify(resultsData, '', 4);
  fs.writeFileSync('./views/dataResults.json', resultsDataJson);
  // console.log(resultsDataJson);

  //  отправляем ответ
  // res.send(`${str}`);
});

app.post("/full", function (req, res) {
    if(!req.body) return res.sendStatus(400);
    console.log(req.body);

    // преобразуем данные в json
    // тут добавляются всякие /

  var str = JSON.stringify(req.body );
    console.log(str);

    // записываем данные в json
  fs.writeFileSync('./calc/dataClient.json', str); 


//  отправляем ответ
  // res.send(`${str}`);
});
 



app.listen(8081);
 console.log ('http://localhost:8081' )
var express = require('express');
var router = express.Router();

/* GET demo version. */
router.get('/demo', function(req, res, next) {
    res.render('demo', { title: 'DEMO VERSION' });

    if (!req.body) return res.sendStatus(400);


  });
  
// // Правильно обработать ошибку!!!!!!!!
// app.post("/demo", function (req, res) {
//   if (!req.body) return res.sendStatus(400);

//   // write data(client input) for calculate
//   let requestClient = JSON.stringify(req.body, '', 4);
//   fs.writeFileSync('./calc/dataClient.json', requestClient);
//   // // console.log(requestClient);


//   // write data (results calculate ) for pug template inside
//   let resultsDataJson = JSON.stringify(resultsData, '', 4);
//   fs.writeFileSync('./views/dataResults.json', resultsDataJson);
//   // console.log(resultsDataJson);

//   //  отправляем ответ
//   // res.send(`${str}`);
// });
module.exports = router;

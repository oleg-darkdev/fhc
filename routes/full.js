var express = require('express');
var router = express.Router();

/* GET full version. */
router.get('/full', function(req, res, next) {
  res.render('full', { title: 'FULL VERSION' });

});


// app.post("/full", function (req, res) {
//   if(!req.body) return res.sendStatus(400);
//   console.log(req.body);

//   // преобразуем данные в json
//   // тут добавляются всякие /

// var str = JSON.stringify(req.body );
//   console.log(str);

//   // записываем данные в json
// fs.writeFileSync('./calc/dataClient.json', str); 


// //  отправляем ответ
// // res.send(`${str}`);
// });




module.exports = router;

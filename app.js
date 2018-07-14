const express = require('express'),
      app = express(),
      fs = require('fs'),
      path = require('path'),
      favicon = require('serve-favicon'),
      logger = require('morgan'),
      cookieParser = require('cookie-parser'),
      bodyParser = require('body-parser'),
      // sassMiddleware = require('node-sass-middleware'),
/* 
*               ROUTERS
*/
      index = require('./routes/index'),
      users = require('./routes/users'),
      full = require('./routes/full'),
      demo = require('./routes/demo'),
//      for generation files - routers
      fullPdf = require('./routes/full-pdf'),
      fullHtml = require('./routes/full-html'),
      demoPdf = require('./routes/demo-pdf'),
      demoHtml = require('./routes/demo-html'),
/* 
*               CALCULATION
*/
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





//                              PUG
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
//                              SASS
// app.use(sassMiddleware({
//   src: path.join(__dirname, 'public'),
//   dest: path.join(__dirname, 'public'),
//   indentedSyntax: true, // true = .sass and false = .scss
//   sourceMap: true
// }));
//                              PUBLIC
app.use(express.static(path.join(__dirname, 'public')));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));

//                              JSON
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(bodyParser.urlencoded({ extended: false }));
//                              COOKIE
app.use(cookieParser());



//===========================================
//                           ROUTERS
app.use('/', index);
app.use('/users', users);
app.use('/full', full);
app.use('/demo', demo);
//      for generation files - routers
app.use('/full/pdf', fullPdf);
app.use('/full/html', fullHtml);
app.use('/demo/pdf', demoPdf);
app.use('/demo/html', demoHtml);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});
//===========================================



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;


app.listen(8081);
console.log ('http://localhost:8081' )
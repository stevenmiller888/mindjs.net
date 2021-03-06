
/**
 * Dependencies.
 */

var express = require('express');
var hbs = require('hbs');
var port = process.env.PORT || 7777;

/**
 * App.
 */

module.exports = express()
  .engine('html', hbs.__express)
  .set('views', __dirname)
  .use('/build', express.static(__dirname + '/build'))
  .use('/images', express.static('images'))
  .get('*', function (req, res, next) {
    res.render('index.html');
  })
  .listen(port, function () {
    console.log('Listening on port ' + port + '...');
  });

var express = require('express');
var exphbs = require('express-handlebars');
var routes = require('./routes');

var app = express();
var port = process.env.PORT || 8080;

// Use handlebars as templating engine
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use('/', express.static(__dirname + "/public/"));

app.use('/js/bundle.js', function(req, res) {
  res.setHeader('content-type', 'application/javascript');
  browserify('./app.js', {
    debug: true
  })
  .transform('reactify')
  .bundle()
  .pipe(res);
});

app.get('/', routes.index);

var server = app.listen(port, function() {
  console.log('Express server listening on port ' + port);
});

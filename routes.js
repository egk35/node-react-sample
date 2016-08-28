var jsx = require('node-jsx').install();
var React = require('react');
var Test = React.createFactory(require('./components/Test.react'));

module.exports = {

  index: function(request, response) {
    response.render('home');
  }

}

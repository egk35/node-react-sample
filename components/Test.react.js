/** @jsx React.DOM */

var React = require('react');

var Test = React.createClass({
  render: function() {
    return (
      <span className="testClass">Hello World!</span>
    );
  }
});

module.exports = Test;

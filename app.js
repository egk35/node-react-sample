/** @jsx React.DOM */

var React = require('react');
var TestComponent = require('./components/Test.react');

React.render(
  <TestComponent/>,
  document.getElementById('react-mount-point')
);

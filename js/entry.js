require('../scss/main.scss');

const React = require('react');
const ReactDom = require('react-dom');

const App = require('./components/App');

ReactDom.render(<App/>, document.getElementById('react-root'));
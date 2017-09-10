import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import './css/index.css';
// import 'bootstrap/dist/css/bootstrap.css';
import App from './App/App';
import Home from './components/Home/Home';
import ProductMain from './components/Product/ProductMain';
import StudentMain from './components/Student/StudentMain';
import ChartManin from './components/Charts/ChartMain';

import registerServiceWorker from './registerServiceWorker';

// require('../node_modules/font-awesome/css/font-awesome.css');
// require('../node_modules/bootstrap/dist/css/bootstrap.css');

// require('jquery');
// require('bootstrap');

// ReactDOM.render(<App />, document.getElementById('root'));


ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="/product" component={ProductMain} />
      <Route path="/student" component={StudentMain} />
      <Route path="/charts" component={ChartManin} />
    </Route>
  </Router>,
  document.getElementById('root'));

registerServiceWorker();

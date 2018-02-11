import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route, Switch} from 'react-router-dom';
import App from './components/app.js';

// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware } from 'redux';

// import App from './components/app';
// import reducers from './reducers';


ReactDOM.render(
  <HashRouter>
      <Switch>
        <Route path="/" name="Dashboard" component={App}/>
      </Switch>
  </HashRouter>
  , document.querySelector('.container-fluid'));

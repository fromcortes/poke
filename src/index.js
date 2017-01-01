import React from 'react';
import { IndexRoute, Router, Route, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';

import './index.css';

import App from './App';
import Teams from './components/Teams';
import Pokedex from './components/Pokedex';

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Teams} />
      <Route path="pokedex" component={Pokedex} />
    </Route>
  </Router>,
  document.getElementById('root')
);

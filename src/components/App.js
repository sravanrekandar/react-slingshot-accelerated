/* eslint-disable import/no-named-as-default */
import { NavLink, Route, Switch } from 'react-router-dom';

import React from 'react';
import { hot } from 'react-hot-loader';
import AboutPage from './AboutPage';
import FuelSavingsPage from './containers/FuelSavingsPage';
import HomePage from './HomePage';
import NotFoundPage from './NotFoundPage';
import Header from './Header';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.

class App extends React.PureComponent {
  render() {
    const activeStyle = { color: 'blue' };
    return (
      <div>
        <Header />
        <div>
          <NavLink exact to="/" activeStyle={activeStyle}>Home</NavLink>
          {' | '}
          <NavLink to="/fuel-savings" activeStyle={activeStyle}>Demo App</NavLink>
          {' | '}
          <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
        </div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/fuel-savings" component={FuelSavingsPage} />
          <Route path="/about" component={AboutPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default hot(module)(App);

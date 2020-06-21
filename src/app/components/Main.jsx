// 06/20/2020 02:12 pm - SSN - [20200620-0557] - [004] - M04 - Implementing React components and Redux state

import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';

import { ConnectedDashboard } from './Dashboard';

// 06/20/2020 08:32 pm - SSN - [20200620-2016] - [001] - M04 - Implementing React components and Redux state - Routing and navigation

import { Router, Route } from 'react-router-dom';
import { history } from '../store/history';

import { ConnectedNavigation } from './Navigation';

export const Main = () => (
  <Router history={history}>
    <Provider store={store}>
      <div>
        <h4>(main.jsx - 131) </h4>

        <ConnectedNavigation />

        {/* <ConnectedDashboard /> */}
        <Route exact path="/dashboard" render={() => <ConnectedDashboard />} />
      </div>
    </Provider>
  </Router>
);

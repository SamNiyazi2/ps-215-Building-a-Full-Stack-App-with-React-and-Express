// 06/20/2020 02:12 pm - SSN - [20200620-0557] - [004] - M04 - Implementing React components and Redux state

import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';

import { ConnectedDashboard } from './Dashboard';

// 06/20/2020 08:32 pm - SSN - [20200620-2016] - [001] - M04 - Implementing React components and Redux state - Routing and navigation

import { Router, Route } from 'react-router-dom';
import { history } from '../store/history';

import { ConnectedNavigation } from './Navigation';

// 06/22/2020 07:50 am - SSN - [20200622-0744] - [002] - M04 - Implementing React components and Redux state - Implementing task details
import { ConnectedTaskDetail } from './TaskDetails';

export const Main = () => (
  <Router history={history}>
    <Provider store={store}>
      <div>
        <h4>(main.jsx - 131) </h4>

        <ConnectedNavigation />

        {/* <ConnectedDashboard /> */}

        <Route exact path="/dashboard" render={() => <ConnectedDashboard />} />

        <Route
          exact
          path="/task/:id"
          render={({ match }) => <ConnectedTaskDetail match={match} />}
        />
      </div>
    </Provider>
  </Router>
);

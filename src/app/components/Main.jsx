// 06/20/2020 02:12 pm - SSN - [20200620-0557] - [004] - M04 - Implementing React components and Redux state

import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';

import { ConnectedDashboard } from './Dashboard';

export const Main = () => (
  <Provider store={store}>
    <div>
      <h1>(main.jsx - 129) </h1>

      <ConnectedDashboard />
    </div>
  </Provider>
);

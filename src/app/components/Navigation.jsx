// 06/20/2020 08:45 pm - SSN - [20200620-2016] - [003] - M04 - Implementing React components and Redux state - Routing and navigation

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import React from 'react';

const Navigation = () => (
  <div>
    <Link to="/dashboard" >
      <h3>PS-215-React/Express Application</h3>
    </Link>
  </div>
);


export const ConnectedNavigation = connect( state => state )( Navigation );

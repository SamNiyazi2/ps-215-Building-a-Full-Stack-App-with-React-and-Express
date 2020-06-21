// 06/20/2020 01:52 pm - SSN - [20200620-0557] - [003] - M04 - Implementing React components and Redux state

import React from 'react';
import { connect } from 'react-redux';
import { connectedTaskList, ConnectedTaskList } from './TaskList';

export const Dashboard = ({ groups }) => {
  let keyId = 0;

  let divs = groups.map((group) => {
    keyId = keyId + 1;

    // return <div key={keyId}>{group.name}</div>;
    return <ConnectedTaskList key={group.id} id={group.id} name={group.name} />;
  });

  return (
    <div>
      <h2>Dashboard (Dashboard.jsx - 104)</h2>

      {divs}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    groups: state.groups,
  };
}

export const ConnectedDashboard = connect(mapStateToProps)(Dashboard);

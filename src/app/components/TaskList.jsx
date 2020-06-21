// 06/20/2020 06:32 pm - SSN - [20200620-0557] - [005] - M04 - Implementing React components and Redux state

import React from 'react';
import { connect } from 'react-redux';

export const TaskList = ({ tasks , name }) => (


<div >
<h3> {name}</h3>
<div > 
    {tasks.map((task) => (
      <div key={task.id} > {task.name}</div>
    ))}
  </div>
  </div>



);

const mapStateToProps = (state, ownProps) => {
  let groupID = ownProps.id;

  return {
    name: ownProps.name,
    id: groupID,
    tasks: state.tasks.filter((task) => task.group === groupID),
  };
};

export const ConnectedTaskList = connect(mapStateToProps)(TaskList);

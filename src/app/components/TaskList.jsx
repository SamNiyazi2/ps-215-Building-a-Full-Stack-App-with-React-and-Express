// 06/20/2020 06:32 pm - SSN - [20200620-0557] - [005] - M04 - Implementing React components and Redux state

import React from 'react';
import { connect } from 'react-redux';

import { requestTaskCreation, requestForSomeOtherFunction } from '../store/mutations';

export const TaskList = ({ tasks, name, id, createNewTask , someOtherFunction}) => (
  <div>
    <h3>{name}</h3>
    <div>
      {tasks.map((task) => (
        <div key={task.id}> {task.name}</div>
      ))}
    </div>

    <button onClick={() => createNewTask(id)}>Add New Task</button>
    <button onClick={() => someOtherFunction(id, 500002)}>Some other function</button>
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

const mapDispatchToProps  = (dispatch, ownProps) => {
  return {
    createNewTask(id) {
      console.log('Creating new task...', id);

      // 06/20/2020 10:24 pm - SSN - [20200620-2216] - [002] - M04 - Implementing React components and Redux state - Adding new task

      dispatch(requestTaskCreation(id));
    },

    someOtherFunction(id , someOtherVar) {
      console.log('someOtherFunction with group id/someOtherVar...', id, someOtherVar);
      dispatch (requestForSomeOtherFunction(id,someOtherVar));
      
    },

  };
};

export const ConnectedTaskList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskList);
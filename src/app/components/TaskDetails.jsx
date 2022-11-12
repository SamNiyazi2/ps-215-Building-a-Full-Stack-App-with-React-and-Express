// 06/22/2020 07:44 am - SSN - [20200622-0744] - [001] - M04 - Implementing React components and Redux state - Implementing task details

import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// 06/22/2020 08:22 am - SSN - [20200622-0744] - [005] - M04 - Implementing React components and Redux state - Implementing task details
import * as mutations from '../store/mutations';

const TaskDetail = ( {
  id,
  comments,
  task,
  isComplete,
  groups,
  setTaskCompletion,
  setTaskName,
  setTaskGroup,
} ) => (
  <div className="card p-3 col-6">
    <div>
      <input onChange={setTaskName} value={task.name} className="form-control form-control-lg" />
    </div>

    <div>
      <button className="btn btn-primary mt-2" onClick={() => setTaskCompletion( id, !isComplete )}>
        {isComplete ? 'Reopen' : 'Complete'}{' '}
      </button>
    </div>

    <div className="mt-3">
      <select className="form-control" onChange={setTaskGroup} value={task.group} >
        {groups.map( ( group ) => (
          <option key={group.id} value={group.id}>
            {group.name}
          </option>
        ) )}
      </select>
    </div>

    <div>
      <Link to="/dashboard">
        <button className="btn btn-primary mt-2" >Close</button>
      </Link>
    </div>
  </div>
);

const mapStateToProps = ( state, ownProps ) => {
  let id = ownProps.match.params.id;
  let task = state.tasks.find( ( task ) => task.id === id );
  let groups = state.groups;

  return {
    id,
    task,
    groups,
    isComplete: task.isComplete,
  };
};

const mapDispathToProps = ( dispatch, ownProps ) => {
  const id = ownProps.match.params.id;

  return {
    setTaskCompletion( id, isComplete ) {
      dispatch( mutations.setTaskCompletion( id, isComplete ) );
    },
    setTaskGroup( e ) {
      dispatch( mutations.setTaskGroup( id, e.target.value ) );
    },
    setTaskName( e ) {
      dispatch( mutations.setTaskName( id, e.target.value ) );
    },
  };
};

export const ConnectedTaskDetail = connect(
  mapStateToProps,
  mapDispathToProps
)( TaskDetail );

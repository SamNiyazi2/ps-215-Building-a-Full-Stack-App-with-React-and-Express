
// 06/20/2020 10:16 pm - SSN - [20200620-2216] - [001] - M04 - Implementing React components and Redux state - Adding new task

export const REQUEST_TASK_CREATION = 'REQUEST_TASK_CREATION';
export const CREATE_TASK = 'CREATE_TASK';

export const REQUEST_FOR_SOME_OTHER_FUNCTION = 'REQUEST_FOR_SOME_OTHER_FUNCTION';
export const DO_THE_OTHER_FUNCTION = 'DO_THE_OTHER_FUNCTION';

// 06/22/2020 08:18 am - SSN - [20200622-0744] - [004] - M04 - Implementing React components and Redux state - Implementing task details

export const SET_TASK_COMPLETE = 'SET_TASK_COMPLETE';
export const SET_TASK_GROUP = 'SET_TASK_GROUP';
export const SET_TASK_NAME = 'SET_TASK_NAME';


export const requestTaskCreation = (groupID) => ({
    type: REQUEST_TASK_CREATION,
    groupID
});


export const requestForSomeOtherFunction = (groupID, someOtherVar) => ({
    type: REQUEST_FOR_SOME_OTHER_FUNCTION,
    groupID,
    someOtherVar
});


export const createTask = (taskID, groupID, ownerID) => ({

    type: CREATE_TASK,
    taskID,
    groupID,
    ownerID

});


export const setTaskCompletion = (id, isComplete) => ({
    type: SET_TASK_COMPLETE,
    taskID: id,
    isComplete
});

export const setTaskName = (id, name) => ({
    type: SET_TASK_NAME,
    taskID: id,
    name
});

export const setTaskGroup = (id, groupID) => ({
    type: SET_TASK_GROUP,
    taskID: id,
    groupID
});





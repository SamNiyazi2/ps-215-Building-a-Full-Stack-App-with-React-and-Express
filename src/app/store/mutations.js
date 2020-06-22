
// 06/20/2020 10:16 pm - SSN - [20200620-2216] - [001] - M04 - Implementing React components and Redux state - Adding new task

export const REQUEST_TASK_CREATION = 'REQUEST_TASK_CREATION';
export const CREATE_TASK = 'CREATE_TASK';

export const REQUEST_FOR_SOME_OTHER_FUNCTION = 'REQUEST_FOR_SOME_OTHER_FUNCTION';
export const DO_THE_OTHER_FUNCTION = 'DO_THE_OTHER_FUNCTION';

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

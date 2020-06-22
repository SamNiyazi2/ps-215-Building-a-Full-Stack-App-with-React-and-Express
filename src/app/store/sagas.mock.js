
// 06/20/2020 10:46 pm - SSN - [20200620-2216] - [003] - M04 - Implementing React components and Redux state - Adding new task

import { take, put, select } from 'redux-saga/effects';

import * as mutations from './mutations';

import { v4 as uuidv4 } from 'uuid';
import * as uuid from 'uuid';


export function* taskCreationSaga() {

    while (true) {


        const { groupID } = yield take(mutations.REQUEST_TASK_CREATION);

        const ownerID = 'U1';

        const taskID = uuidv4();

        const taskID1 = uuid.v1();
        // const taskID3 = uuid.v3();
        const taskID4 = uuid.v4();
        // const taskID5 = uuid.v5();

        console.log('Test v1 ', taskID1);
        console.log('Test v4 ', taskID4);

        yield put(mutations.createTask(taskID, groupID, ownerID));


        console.log("Got group ID", groupID);

    }

}
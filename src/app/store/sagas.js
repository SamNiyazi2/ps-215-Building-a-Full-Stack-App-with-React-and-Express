
// 06/22/2020 02:49 pm - SSN - [20200622-1425] - [001] - M06 - Integrating React view layers with persistent data

import { take, put, select } from 'redux-saga/effects';
import * as uuid from 'uuid';
import axios from 'axios';

import * as mutations from './mutations';

const url = 'http://localhost:3091';


export function* taskCreationSaga() {


    while (true) {

        const { groupID } = yield take(mutations.REQUEST_TASK_CREATION);

        const ownerID = 'U1';
        const taskID = uuid.v4();

        yield put(mutations.createTask(taskID, groupID, ownerID));


        let d = new Date();

        const { res } = yield axios.post(url + '/task/new', {

            task: {
                id: taskID,
                group: groupID,
                owner: ownerID,
                isComplete: false,
                name: "New Task " + d
            }
        });

        console.log("taskCreationSaga - resp", res);

    }
}

export function* taskModificationSaga() {

    while (true) {

        const task = yield take([
            mutations.SET_TASK_GROUP,
            mutations.SET_TASK_NAME,
            mutations.SET_TASK_COMPLETE

        ]);

        axios.post(url + '/task/update' , { 
            task: {
                id:task.taskID,
                group:task.groupID,
                owner:task.ownerID,
                isComplete:task.isComplete,
                name:task.name
            }
        })
    }
}
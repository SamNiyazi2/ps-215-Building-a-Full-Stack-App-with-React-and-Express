
// 06/22/2020 02:49 pm - SSN - [20200622-1425] - [001] - M06 - Integrating React view layers with persistent data

import { take, put, select } from 'redux-saga/effects';
import * as uuid from 'uuid';
import axios from 'axios';

import * as mutations from './mutations';

import { history } from './history';

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

        axios.post(url + '/task/update', {
            task: {
                id: task.taskID,
                group: task.groupID,
                owner: task.ownerID,
                isComplete: task.isComplete,
                name: task.name
            }
        })
    }
}


// 06/24/2020 10:25 am - SSN - [20200624-0921] - [003] - M07 - Authentication concepts - Creating a login page

export function* userAuthenticationSaga() {

    console.log("userAuthenticationSaga-1001");

    while (true) {

        const { username, password } = yield take(mutations.REQUEST_AUTHENTICATE_USER);

        try {
            const { data } = yield axios.post(url + '/authenticate', { username, password });
            if (!data) {
                throw new Error();

            }

            console.log("Authenticated. 20200624-1126", data);

            yield put(mutations.setState(data.state));
            yield put(mutations.processAuthenticateUser(mutations.AUTHENTICATED));
            console.log("Authenticated. 20200624-1126 - state set and authenticated");

            history.push('/dashboard');

            console.log("Authenticated. 20200624-1126 - history/push('/dashboard')");


        } catch (e) {
            console.log("Can't authenticate");
            yield put(mutations.processAuthenticateUser(mutations.NOT_AUTHENTICATED));

        }
    }


}
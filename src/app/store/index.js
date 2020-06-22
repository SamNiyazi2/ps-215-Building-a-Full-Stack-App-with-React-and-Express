
// 06/20/2020 06:19 am - SSN - [20200620-0557] - [002] - M04 - Implementing React components and Redux state

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { defaultState } from '../../server/defaultState'

// 06/20/2020 10:24 pm - SSN - [20200620-2216] - [002] - M04 - Implementing React components and Redux state - Adding new task

import { createLogger } from 'redux-logger';

import createSagaMiddleware from 'redux-saga';


const sagaMiddleware = createSagaMiddleware();


import * as sagas from './sagas.mock';


import * as mutations from './mutations';


export const store = createStore(

    // function reducer(state = defaultState, action) {

    //     return state;

    // },

    combineReducers({

        tasks(tasks = defaultState.tasks, action) {

            switch (action.type) {

                case mutations.CREATE_TASK:
                    console.log(action);

                    return [...tasks, {
                        id: action.taskID,
                        name: "New Tasl",
                        group: action.groupID,
                        owner: action.ownerID,
                        isComplete: false
                    }];


            }
            return tasks;

        },

        comments(comments = defaultState.comments) {
            return comments;
        },

        groups(groups = defaultState.groups) {
            return groups;
        },

        users(users = defaultState.users) {
            return users;
        }

    }),


    applyMiddleware(createLogger(), sagaMiddleware)
)

for (let saga in sagas) {
    sagaMiddleware.run(sagas[saga]);
}
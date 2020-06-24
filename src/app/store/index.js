
// 06/20/2020 06:19 am - SSN - [20200620-0557] - [002] - M04 - Implementing React components and Redux state

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { defaultState } from '../../server/defaultState'

// 06/20/2020 10:24 pm - SSN - [20200620-2216] - [002] - M04 - Implementing React components and Redux state - Adding new task

import { createLogger } from 'redux-logger';

import createSagaMiddleware from 'redux-saga';


const sagaMiddleware = createSagaMiddleware();



// 06/22/2020 02:58 pm - SSN - [20200622-1425] - [002] - M06 - Integrating React view layers with persistent data

// import * as sagas from './sagas.mock';
import * as sagas from './sagas';


import * as mutations from './mutations';


export const store = createStore(

    // function reducer(state = defaultState, action) {

    //     return state;

    // },

    combineReducers({

        session(session = defaultState.session) {
            return session;
        },

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



                // 06/22/2020 08:36 am - SSN - [20200622-0744] - [006] - M04 - Implementing React components and Redux state - Implementing task details


                case mutations.SET_TASK_COMPLETE:


                    console.log('store/index combineReducer action - ', action.type);
                    console.log(action);

                    return tasks.map(task => {

                        return (task.id === action.taskID ? { ...task, isComplete: action.isComplete } : task);

                    });



                case mutations.SET_TASK_NAME:

                    console.log('store/index combineReducer action - ', action.type);
                    console.log(action);

                    return tasks.map(task => {

                        return (task.id === action.taskID ? { ...task, name: action.name } : task);

                    });


                case mutations.SET_TASK_GROUP:

                    console.log('store/index combineReducer action - ', action.type);
                    console.log(action);

                    return tasks.map(task => {

                        return (task.id == action.taskID ? { ...task, group: action.groupID } : task);
                    });

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
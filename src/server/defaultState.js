
// 06/20/2020 06:05 am - SSN - [20200620-0557] - [001] - M04 - Implementing React components and Redux state
// https://github.com/danielstern/express-react-fullstack/blob/master/src/server/defaultState.js

//import md5 from 'md5';
export const defaultState = {

    session: {
        authenticated: false
    },

    users: [{
        id: "U1",
        name: "Dev",
        //      passwordHash:md5("TUPLES"),
        friends: [`U2`]
    }, {
        id: "U2",
        name: "C. Eeyo",
        // passwordHash:md5("PROFITING"),
        friends: []
    }],
    groups: [{
        name: "To Do",
        id: "G1",
        owner: "U1"
    }, {
        name: "Doing",
        id: "G2",
        owner: "U1"
    }, {
        name: "Done",
        id: "G3",
        owner: "U1"
    }
    ],
    tasks: [{
        name: "Refactor tests",
        id: "T1",
        group: "G1",
        owner: "U1",
        isComplete: false,
    }, {
        name: "Meet with CTO",
        id: "T2",
        group: "G1",
        owner: "U1",
        isComplete: true,
    }, {
        name: "Compile ES6",
        id: "T3",
        group: "G2",
        owner: "U2",
        isComplete: false,
    }, {
        name: "Update component snapshots",
        id: "T4",
        group: "G2",
        owner: "U1",
        isComplete: true,
    }, {
        name: "Production optimizations",
        id: "T5",
        group: "G3",
        owner: "U1",
        isComplete: false,
    }],
    comments: [{
        owner: "U1",
        id: "C1",
        task: "T1",
        content: "Great work!"
    }]
};
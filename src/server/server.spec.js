
// 06/22/2020 01:53 pm - SSN - [20200622-1306] - [002] - M05 - Creating presistent data storage - Express server and saving tasks

// npm run server-test

import * as uuid from 'uuid';

const { addNewTask } = require('./server');

// import   { addNewTask } from  './server';

let d = new Date();

addNewTask({
    name: "My Test task-" + d.toLocaleString(),
    id: uuid.v4()
});




// 06/22/2020 02:07 pm - SSN - [20200622-1306] - [003] - M05 - Creating presistent data storage - Express server and saving tasks

// npm run server-test-update

import { addNewTask, updateTask } from './server';
import * as uuid from 'uuid';

(async function myFunc() {

    let taskID = uuid.v4();
    let d = new Date();
    let taskName = "Test task " + d;
    let newTaskName = taskName + " (Modified)";

    await addNewTask({

        name: taskName,
        id: taskID
    });

    await updateTask({

        id: taskID,
        name: newTaskName

    });


})();





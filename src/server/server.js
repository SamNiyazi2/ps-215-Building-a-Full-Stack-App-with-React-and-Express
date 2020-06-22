
// 06/22/2020 01:06 pm - SSN - [20200622-1306] - [001] - M05 - Creating presistent data storage - Express server and saving tasks

import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { connectDB } from './connect-db';

let port = 3091;
let app = express();

app.listen(port, () => {

    console.log('Server listening on port ', port);

});


app.get('/', (req, res) => {

    console.log("Sending response...");
    res.send('Hello World!!!');

});


app.use(

    cors(),
    bodyParser.urlencoded({ extended: true }),
    bodyParser.json()

);


export const addNewTask = async task => {

    let db = await connectDB();
    let collection = db.collection('tasks');
    await collection.insertOne(task);
};


export const updateTask = async task => {

    let { id, group, isComplete, name } = task;
    let db = await connectDB();
    let collection = db.collection('tasks');

    if (group) {
        await collection.updateOne({ id }, { $set: { group } });
    }

    if (name) {
        await collection.updateOne({ id }, { $set: { name } });
    }

    if (isComplete !== undefined) {
        await collection.updateOne({ id }, { $set: { isComplete } });
    }
};



app.post('/task/new', async (req, res) => {

    let task = req.body.task;
    await addNewTask(task);
    res.status(200).send();

});


app.post ( '/task/update', async ( req,res) => {

    let task = req.body.task;
    await updateTask(task);
    res.status(200).send();

});


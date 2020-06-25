
// 06/24/2020 11:07 am - SSN - [20200624-0921] - [004] - M07 - Authentication concepts - Creating a login page

import * as uuid from 'uuid';
import md5 from 'md5';

import { connectDB } from './connect-db';

import * as mutations from '../app/store/mutations';


console.log("authenticate.js - Begin file ");

const authenticationTokens = [];


async function assembleUserState(user) {

    console.log("assembleUserState-001");

    let db = await connectDB();

    let tasks = await db.collection('tasks').find({ owner: user.id }).toArray();
    let groups = await db.collection('groups').find({ owner: user.id }).toArray();

    return {
        tasks,
        groups,
        session: { authenticated: mutations.AUTHENTICATED, id: user.id }
    };

}


export const authenticationRoute = app => {


    console.log('authenticationRoute-001');


    app.post('/authenticate', async (req, res) => {

        console.log('authenticate-1001');

        let { username, password } = req.body;
        let db = await connectDB();
        let collection = db.collection('users');

        let user = await collection.findOne({ name: username });

        console.log('authenticate-1002-v4 [', username, ']');


        if (!user) {
            return res.status(500).send("User not found");
        }

        console.log('authenticate-1003');

        let hash = md5(password);
        let passwordCorrect = hash === user.passwordHash;

        console.log('authenticate-1004');

        if (!passwordCorrect) {
            return res.status(500).send("Password incorrect");
        }

        let token = uuid.v4();

        authenticationTokens.push({
            token,
            userID: user.id
        });

        let state = await assembleUserState(user);

        console.log(state);

        res.send({ token, state });

        console.log('authenticate-9999-v2');


    });

}


console.log("authenticate.js - End file ");

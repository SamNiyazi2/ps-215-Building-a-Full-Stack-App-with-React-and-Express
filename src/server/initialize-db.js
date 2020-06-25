
// 06/22/2020 12:18 pm - SSN - [20200622-1154] - [002] - M05 - Creating presistent data storage

import { defaultState } from './defaultState';
import { connectDB } from './connect-db';

async function initializeDB(forceReload) {

    console.log("");
    console.log("Staring initializeDB....");
    console.log("");


    let db = await connectDB();

    // let users = await db.collection('users').findOne({id:'U1'});
    let users = await db.collection('users');

    if (users && !forceReload) {

        console.log("");
        console.log("Database already contains users collection.  Terminating initialization process.");
        console.log("");

        return;
    }

    for (let collectionName in defaultState) {

        if (collectionName === "session") {

            console.log("Skipping session collection");
            continue;
        }

        console.log("Loading ", collectionName, "...");

        let collection = db.collection(collectionName);

        if (collection && !forceReload) {

            console.log("");
            console.log("Collection exists");
            console.log("");
            continue;
        }

        if (collection) {
            console.log("\nDrop collection...")
            collection.drop();
            console.log("");
        }

        await collection.insertMany(defaultState[collectionName]);

    }

    console.log("Completed database initialization.")

}


// package.json 

// scripts: "initialize-MongoDB": "babel-node src/server/initialize-db load-data"
// npm run initialize-MongoDB load-data

let forceReload = false;
let loadDataAuthenticated = false;

process.argv.forEach(function (val, index, array) {


    if (index === 2 && val.toUpperCase() === "LOAD-DATA") {
        loadDataAuthenticated = true;
    }


    if (index === 3 && val.toUpperCase() === "FORCE") {
        forceReload = true;
    }


});


if (loadDataAuthenticated) {
    initializeDB(forceReload);
}   


// 06/22/2020 12:18 pm - SSN - [20200622-1154] - [002] - M05 - Creating presistent data storage

import { defaultState } from './defaultState';
import { connectDB } from './connect-db';

async function initializeDB() {

    let db = await connectDB();

    for (let collectionName in defaultState) {

        let collection = db.collection(collectionName);
        await collection.insertMany(defaultState[collectionName]);

    }


}


// package.json 

// scripts: "initialize-MongoDB": "babel-node src/server/initialize-db load-data"
// npm run initialize-MongoDB load-data

process.argv.forEach(function (val, index, array) {

    if (index === 2 && val.toUpperCase() === "LOAD-DATA") {
        initializeDB();
    }

});

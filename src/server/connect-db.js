
// 06/22/2020 11:54 am - SSN - [20200622-1154] - [001] - M05 - Creating presistent data storage


import { MongoClient } from 'mongodb';

const url = 'mongodb+srv://User101:riG18mTFsa4S302c@clusterssn101-q8y6c.azure.mongodb.net/PSReactRedux20200622'

let db = null;

export async function connectDB() {

    if (db) return db;

    let client = await MongoClient.connect(url, { useNewUrlParser: true });

    db = client.db();

    // console.info("Got DB, ", db);

    return db;

}


// package.json 

// scripts: "test-connect-MongoDB": "babel-node src/server/connect-db run-test"
// npm run test-connect-MongoDB

let authenticated = process.argv[2];

// process.argv.forEach(function (val, index, array) {

//     if (index === 2 && val.toUpperCase() === "RUN-TEST") {
//         authenticated = true;
//     }

// });

// For testing from the command prompt.

if (authenticated) {
    connectDB();
}





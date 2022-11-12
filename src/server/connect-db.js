
// 06/22/2020 11:54 am - SSN - [20200622-1154] - [001] - M05 - Creating presistent data storage



// 03/25/2022 03:14 pm - SSN - [20220325-1514] - [001] - Adding Azure Vault


const { DefaultAzureCredential } = require( "@azure/identity" );
const { SecretClient } = require( "@azure/keyvault-secrets" );

// DefaultAzureCredential expects the following three environment variables:
// * AZURE_TENANT_ID: The tenant ID in Azure Active Directory
// * AZURE_CLIENT_ID: The application (client) ID registered in the AAD tenant
// * AZURE_CLIENT_SECRET: The client secret for the registered application
const credential = new DefaultAzureCredential();



// Build the URL to reach your key vault
const vaultName = "ssn-key-vaults-20210224";
const url_av = `https://${vaultName}.vault.azure.net`; // or `https://${vaultName}.managedhsm.azure.net` for managed HSM.

// Lastly, create our keys client and connect to the service
const client = new SecretClient( url_av, credential );

const secretName = "ssn-secret-test-pc-20210224";

async function testSecret() {

    const latestSecret = await client.getSecret( secretName );
    // Last time tested, it Worked. 11/11/2022 05:41 pm.
    // console.log( `Latest version of the secret ${secretName}: `, latestSecret );

    // const specificSecret = await client.getSecret( secretName, { version: latestSecret.properties.version! } );
    // console.log( `The secret ${secretName} at the version ${latestSecret.properties.version!}: `, specificSecret );
}

testSecret();






import { MongoClient } from 'mongodb';

const url = 'mongodb+srv://User101:9j-n5vF7Z4YDyF3@clusterssn101.q8y6c.azure.mongodb.net/PSReactRedux20200622'

let db = null;

export async function connectDB() {

    if ( db ) return db;

    // 03/25/2022 01:40 pm - SSN - Added useUnifiedTopology: true  from error messages in server console.

    let client = await MongoClient.connect( url, { useNewUrlParser: true, useUnifiedTopology: true } );

    db = client.db();

    // console.info("Got DB, ", db);

    return db;

}


// package.json 

// scripts: "test-connect-MongoDB": "babel-node src/server/connect-db run-test"
// npm run test-connect-MongoDB

let authenticated = process.argv[ 2 ];

// process.argv.forEach(function (val, index, array) {

//     if (index === 2 && val.toUpperCase() === "RUN-TEST") {
//         authenticated = true;
//     }

// });

// For testing from the command prompt.

if ( authenticated ) {
    connectDB();
}





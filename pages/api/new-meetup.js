// NextJS Api Route
// url ... api/new-meetup
//... contains an exported function with server-side code
//... by convention named "handler",
//       the name is mandatory, it could have a name of your choice

import { MongoClient } from 'mongodb'

// MongoDB UID:dbUser PWD:pr!BRItOXechl2Esp$St
// MongoDb Connection String Example
// const uidDb = 'dbUser'
// const pwdDb = 'pr!BRItOXechl2Esp$St'
// const nameDb = 'meetups'
// const { MongoClient } = require('mongodb');
// const uriMongoDb = "mongodb+srv://dbUser:<password>@cluster0.d4upq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
// const uriMongoDb = `mongodb+srv://${uidDb}:${pwdDb}@cluster0.d4upq.mongodb.net/${nameDb}?retryWrites=true&w=majority`
// console.log(uriMongoDb)
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });

const uidDb = 'dbUser'
const pwdDb = 'pr!BRItOXechl2Esp$St'
const nameDb = 'meetups'
const uriMongoDb = `mongodb+srv://${uidDb}:${pwdDb}@cluster0.d4upq.mongodb.net/${nameDb}?retryWrites=true&w=majority`
console.log(uriMongoDb)

//req ... request object
//res ... response object
const handler = async (req, res) => {
  //
  console.log('Inside API handler()')
  if (req.method === 'POST') {

    const requestData = req.body

    // object destructuring
    //const { title, iamge, address, description } = requestData

    // connect() returns a promise
    const mdbClient = await MongoClient.connect(uriMongoDb)
    const meetupsDb = mdbClient.db()

    //MongoDb === NO SQL DB
    //  Collections === Tables
    //    Documents === Records
    //      Document === JS Object ... {}
    const meetupsCollection = meetupsDb.collection('meetups')

    const result = await meetupsCollection.insertOne(requestData)
    console.log(result)
    mdbClient.close()

    res.status(201).json({message: 'Meetup inserted!'})
  }
}

export default handler

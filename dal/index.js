// const { MongoClient } = require('mongodb');

// const client = new MongoClient(
//   'mongodb+srv://ns_user:01845551440@crud.fihai.mongodb.net/koacrud',
//   {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }
// );

// client.connect((err) => {
//   if (err) {
//     console.error(err);
//     process.exit(-1);
//   }
//   console.log('Mongodb connection successful');
// });

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri =
  'mongodb+srv://ns_user:<password>@reactjs20.yonzf.mongodb.net/koacrud?retryWrites=true&w=majority';
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});
client.connect((err) => {
  const collection = client.db('test').collection('devices');
  // perform actions on the collection object
  client.close();
});

module.exports = client;

module.exports = {
    url : "mongodb+srv://adminUserDB:OU2B1ziVR43qOjGb@cluster0-wz4dw.mongodb.net/userdb?retryWrites=true&w=majority"
}; 

// (node:21676) DeprecationWarning: current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version. To use the new Server Discover and Monitoring engine, pass option { useUnifiedTopology: true } to the MongoClient constructor.

/*

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://noteUser:<password>@cluster0-wz4dw.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
 
 
*/

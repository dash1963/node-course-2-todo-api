
// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectId} = require("mongodb");



MongoClient.connect("mongodb://localhost:27017/TodoApp", (error, db) => {
  if (error)
  { return console.log("Unable to connect to mongodb server");}
  console.log("Connected to mongodb server");


// Update completed to "false"
db.collection("Todos").findOneAndUpdate({
  _id: new ObjectId("589e246bf3a630643a59cde7")
},
{ $set: {completed: true}
},
{returnOriginal: false}).then( (result) => {
  console.log(result);
});

// Increment age of juan Ramos whose user id is: 589e24bff3a630643a59ce0c by 1
db.collection("Users").findOneAndUpdate({ _id: new ObjectId("589e24bff3a630643a59ce0c")},
  { $inc: {age: 1}},
  {returnOriginal: false}).then( (result) => {
   console.log(result);
});



//  db.close();
});

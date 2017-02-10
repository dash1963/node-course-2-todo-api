
// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectId} = require("mongodb");



MongoClient.connect("mongodb://localhost:27017/TodoApp", (error, db) => {
  if (error)
  { return console.log("Unable to connect to mongodb server");}
  console.log("Connected to mongodb server");

  // db.collection("Todos").insertOne({
  //   text: "something to do",
  //   completed: false}, (error, result) => {
  //     if (error)
  //     {return console.log("Unable to insert Todo", error); }
  //     console.log(JSON.stringify(result.ops, undefined, 2));
  //   });
  //
// db.collection("Users").insertOne({
//    name: "Sergio Rueda",
//    age:  "54",
//    location: "Chicago" }, (error, result) => {
//      if (error)
//         {return console.log("Unable to insert new User", error); }
//     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
//   });

  db.close();
});

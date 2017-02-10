
// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");



MongoClient.connect("mongodb://localhost:27017/TodoApp", (error, db) => {
  if (error)
  { return console.log("Unable to connect to mongodb server");}
  console.log("Connected to mongodb server");

//delete many
    // db.collection("Todos").deleteMany({text: "study Node"}).then((result) => {
    //   console.log(result);
    // });


//delete one
    // db.collection("Todos").deleteOne({text:"Eat lunch"}).then((result) => {
    //   console.log(result);
    // });



// findOneAndDelete
    // db.collection("Todos").findOneAndDelete({completed: false}).then( (result) => {
    //   console.log(result);
    // });



//delete many
    // db.collection("Users").deleteMany({name: "Sergio Rueda"}).then((result) => {
    //     console.log(result);
    //   });

//delete one
    // db.collection("Users").deleteOne({name: "Pato Dolnalds"}).then((result) => {
    // console.log(result);
    // });

// findOneAndDelete
        db.collection("Users").findOneAndDelete({_id: new ObjectID("589e248bf3a630643a59cdf8")}).then( (result) => {
          console.log(result);
        });





  db.close();
});



///    ObjectId("589e248bf3a630643a59cdf8")
// {
//     "_id" : ObjectId("589e2016f3a630643a59cccf"),
//     "text" : "study Node",
//     "completed" : false
// }

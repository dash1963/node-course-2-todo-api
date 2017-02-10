
// const MongoClient = require("mongodb").MongoClient;
const {MongoClient, ObjectID} = require("mongodb");

var obj = new ObjectID();
console.log( obj )

MongoClient.connect("mongodb://localhost:27017/TodoApp", (error, db) => {
  if (error)
  { return console.log("Unable to connect to mongodb server");}
  console.log("Connected to mongodb server");
//Find all
db.collection("Todos").find().toArray().then( (docs) => {
  console.log("Todos")
  console.log(JSON.stringify(docs, undefined, 2));
}, (error) => {
  console.log("Unable to fetch Todos", error);
});

// Find not completed
db.collection("Todos").find({completed: false}).toArray().then( (docs) => {
  console.log("Todos")
  console.log(JSON.stringify(docs, undefined, 2));
}, (error) => {
  console.log("Unable to fetch Todos", error);
});


//Find bi ID  {_id: new ObjectID("589dc55a5bddb44bd4f7406c")}
db.collection("Todos").find({_id: new ObjectID("589dcf1ef3a630643a59c29a")}).toArray().then( (docs) => {
  console.log("Todos")
  console.log(JSON.stringify(docs, undefined, 2));
}, (error) => {
  console.log("Unable to fetch Todos", error);
});


// Display total number of records/documents
db.collection("Todos").find().count().then( (count) => {
  console.log(`"Todos count: ${count} ` );
}, (error) => {
  console.log("Unable to fetch Todos", error);
});



// Find all records with Ana Topete in the name
db.collection("Users").find({"name" : "Ana Topete"}).toArray().then( (docs) => {
  console.log("Users ")
  console.log(JSON.stringify(docs, undefined, 2));
}, (error) => {
  console.log("Unable to fetch Users", error);
});


//db.close();
});

var express = require("express");
var bodyParser = require("body-parser");

var {mongoose} = require("./db/mongoose");
var {Todo} = require("./models/todo");
var {User} = require("./models/user");

var app = express();
app.use(bodyParser.json());

app.post("/todos", (req, res) => {
 var todo = new Todo({
   text: req.body.text
 });

 todo.save().then( (doc) => {
    res.send(doc);
 }, (e) => {
    res.status(400).send(e)
 });
});


app.get("/todos", (req, res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});





app.listen(3000, () => {
  console.log("Started on port 3000")
})


module.exports = { app }







































// Exmpample 1:  SAVE  newTdo
    // var newTodo = new Todo({
    //   text: "Cook dinner"
    // });
    //
    // newTodo.save().then( (doc) => {
    //   console.log("Saved Todo: " , doc);
    // }, (e) => {
    //   console.log("Unable to save newTodo")
    // });

// Example 2: SAVE newTodo
      // var newTodo = new Todo({
      //       text: "Take pants to taylor",
      //       completed: false,
      //       completedAt: 0
      //     });
      //
      // newTodo.save().then( (doc) => {
      //   console.log(JSON.stringify(doc, undefined,2));
      // }, (e) => {
      //   console.log("Unable to save newTodo", e)
      // });




// var newUser = new User({
//     email: "Sergio Rueda"
// });
//
// newUser.save().then( (doc) => {
//         console.log(JSON.stringify(doc, undefined, 2));
//       }, (e) => {
//                   console.log("Unable to save new User ", e);
// });
//
//
//








      ///

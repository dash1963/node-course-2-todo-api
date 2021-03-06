var express    = require("express");
var bodyParser = require("body-parser");
var {ObjectID} = require("mongodb");

var {mongoose} = require("./db/mongoose");
var {Todo} = require("./models/todo");
var {User} = require("./models/user");

var   app  = express();
const port = process.env.PORT || 3000;


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

app.get("/todos/:id", (req, res) => {
  var todoId = req.params.id;

  if (!ObjectID.isValid(todoId))
  { return res.status(404).send();}

  Todo.findById(todoId).then((todo) => {
    if (!todo)
      { res.status(404).send();}
        res.send({todo});
  }).catch((e) => {
      res.status(404).send();
  }
  );





})



app.listen(port, () => {
  console.log(`Started on port: ${port}`)
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

const {ObjectID} = require("mongodb");
const {mongoose} = require("./../server/db/mongoose");
const {Todo}     = require("./../server/models/todo");
const {User}     = require("./../server/models/user");


var userId = '589f602f23c7a26c0d743819';
var id = '58a0f873327c568a3a14df0f';

if (!ObjectID.isValid(id))
{ console.log("ID not valid");}

Todo.find({
  _id: id
}).then((todos) => {
  console.log("todos ", todos);
});

Todo.findOne({
  _id: id
}).then((todo) => {
  console.log("todo ", todo);
});


Todo.findById(id).then((todo) => {
  if (!todo)
  {return console.log("Id: %s not found! ", id); }
  console.log("todo By Id ", todo);
}).catch((e) =>
console.log("Message: %s  \nName: %s  \ntringValue: %s  \nKind: %s   \nValue: %s   \nPath: %s",
  e.message,
  e.name ,
  e.stringValue ,
  e.kind ,
  e.value ,
  e.path
));



User.findById(userId).then((user) => {
  if (!user)
    { return console.log("User with Id: %s  not found!", userId);}
    console.log("User by Id ", user);
}).catch((e) =>
console.log("Message: %s  \nName: %s  \ntringValue: %s  \nKind: %s   \nValue: %s   \nPath: %s",
  e.message,
  e.name ,
  e.stringValue ,
  e.kind ,
  e.value ,
  e.path
));

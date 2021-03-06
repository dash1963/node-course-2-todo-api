const expect     = require("expect");
const request    = require("supertest");
const {ObjectID} = require("mongodb");


const {app} = require("./../server");
const{Todo} = require("./../models/todo");


const todos = [
  {_id: new ObjectID,  text: "first test todo"},
  {_id: new ObjectID,  text: "second test todo"},
  {_id: new ObjectID,  text: "third test todo"}
];


beforeEach((done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
});

describe("POST /todos", () => {
  it("should create a new todo", (done) => {
     var text = "Test todo text";

     request(app)
       .post("/todos")
       .send({text})
       .expect(200)
       .expect((res) => {
          expect(res.body.text).toBe(text);
       })
       .end((error, res) => {
       if (error)
          { return done(error); }
       Todo.find({text}).then((todos) => {
           expect(todos.length).toBe(1);
           expect(todos[0].text).toBe(text);
           done();
      }).catch((e) => done(e));
    });
  });

  it("Should not create todo ith invalid data", (done) => {
    request(app)
      .post("/todos")
      .send({})
      .expect(400)
      .end((error, res) => {
      if (error)
         { return done(error); }
      Todo.find().then((todos) => {
          expect(todos.length).toBe(3);
          done();
     }).catch((e) => done(e));
   });
 });
 });

 describe ("GET /todos", () => {
   it ("shuld get all todos", (done) => {
     request (app)
       .get("/todos")
       .expect(200)
       .expect((res) => {
           expect(res.body.todos.length).toBe(3);
       }). end (done);
   });
 });


 describe ("GET /todos/:id", () => {
   it("should return todo doc", (done) => {
     request(app).get(`/todos/${todos[0]._id.toHexString()}`)
       .expect(200)
       .expect((res) => {
         expect(res.body.todo.text).toBe(todos[0].text);
       })
       .end(done);
   });



   it("should return a 404 if todo not found!", (done) => {
      var tempid = new ObjectID().toHexString();
      request(app)
        .get(`/todos/${tempid}`)
        .expect(404)
        .end(done);
   });

   it("should return a 404 for non-object ids!", (done) => {
      request(app)
        .get(`/todos/123abc`)
        .expect(404)
        .end(done);
   });



 });

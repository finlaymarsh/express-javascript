const bodyParser = require("body-parser");
const express = require("express");

const {
  returnTodos,
  returnTodoById,
  createNewTodo,
  editTodo,
  deleteTodo,
} = require("./todoService.js");

const app = express();
const port = 3000;

app.get("/", returnTodos);
app.get("/todos", returnTodos);
app.get("/todos/:id", returnTodoById);
app.post("/todos", bodyParser.json(), createNewTodo);
app.put("/todos/:id", bodyParser.json(), editTodo);
app.delete("/todos/:id", deleteTodo);

app.use(express.json());

const server = app.listen(port, () => {
  const address = server.address().address;
  console.log(`Listening at http://${address}:${port}`);
});

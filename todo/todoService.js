let { TODOS } = require("./todos.js");

const returnTodos = (request, response) => {
  response.status(200).json(TODOS);
};

const returnTodoById = (request, response) => {
  response.status(200).json({
    data: findTodoById(parseInt(request.params.id)),
  });
};

const createNewTodo = (request, response) => {
  TODOS.push(request.body);
  response.status(201).json({ msg: "Todo created successfully" });
};

const editTodo = (request, response) => {
  const todo = findTodoById(parseInt(request.params.id));
  if (todo) {
    todo.title = request.body.title;
    todo.desc = request.body.desc;
    todo.completed = request.body.completed;
    response.status(200).json({ msg: "Todo updated successfully" });
    return;
  }
  response.status(404).json({ msg: "Todo not found" });
};

const deleteTodo = (request, response) => {
  const todoToDelete = findTodoById(parseInt(request.params.id));
  if (todoToDelete) {
    TODOS = TODOS.filter((todo) => todo.id !== todoToDelete.id);
    response.status(200).json({ msg: "Todo deleted successfully" });
    return;
  }
  response.status(404).json({ msg: "Todo not found" });
};

const findTodoById = (id) => {
  return TODOS.find((todo) => todo.id === id);
};

exports.returnTodos = returnTodos;
exports.returnTodoById = returnTodoById;
exports.createNewTodo = createNewTodo;
exports.editTodo = editTodo;
exports.deleteTodo = deleteTodo;

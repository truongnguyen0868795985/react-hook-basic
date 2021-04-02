import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "I love easy front end" },
    { id: 2, title: "I love easy front end 2" },
    { id: 3, title: "I love easy front end 3" },
  ]);

  function handleTodoClick(todo) {
    console.log(todo);

    const index = todoList.findIndex((x) => x.id === todo.id);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  return (
    <div className="app">
      <h1>React hook - todo list</h1>

      <TodoList todos={todoList} onTodoClick={handleTodoClick} />
    </div>
  );
}

export default App;

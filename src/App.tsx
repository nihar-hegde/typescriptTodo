import { useState } from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: "hello 1", description: "aaa" },
    { id: 2, title: "hello 2", description: "aaa" },
    { id: 3, title: "hello 3", description: "aaa" },
    { id: 4, title: "hello 4", description: "aaa" },
  ]);

  return (
    <>
      <div className="mb-5">
        <TodoForm
          onSubmit={(todo) =>
            setTodos([...todos, { ...todo, id: todos.length + 1 }])
          }
        ></TodoForm>
      </div>
      <TodoList
        todos={todos}
        onDelete={(id) => setTodos(todos.filter((e) => e.id !== id))}
      ></TodoList>
    </>
  );
}

export default App;

import { useState } from "react";
import Form from "./Form";
import Footer from "./Footer";
import TodoJobs from "./TodoJobs";
export default function Todo() {
  const [todolist, setTodolist] = useState([]);

  return (
    <div>
      <Form todolist={todolist} setTodolist={setTodolist} />
      <TodoJobs todolist={todolist} setTodolist={setTodolist} />
      <Footer todolist={todolist} />
    </div>
  );
}

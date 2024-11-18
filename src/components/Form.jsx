import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todolist, setTodolist }) {
  const [seqno, setSeqno] = useState(1);
  const [todo, setTodo] = useState({
    subject: "",
    done: false,
    seqno: 0,
  });
  function processSubmit(event) {
    event.preventDefault();
    if (todo.subject.trim() === "") return;
    todo.seqno = seqno;
    setSeqno(seqno + 1);
    setTodolist([...todolist, todo]);
    console.log("seqno", todo.seqno);
    setTodo({ subject: "", done: false });
  }
  return (
    <form className={styles.form_group} onSubmit={processSubmit}>
      <div className={styles.container_input}>
        <input
          className={styles.input_modern}
          type="text"
          value={todo.subject}
          onChange={(e) => setTodo({ subject: e.target.value, done: false })}
          placeholder="(할일을 입력하세요.)"
        />
        <button className={styles.button_modern}>등록</button>
      </div>
    </form>
  );
}

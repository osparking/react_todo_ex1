import React from "react";
import styles from "./footer.module.css";

export default function Footer({ todolist }) {
  const doneCount = todolist.filter((todo) => todo.done).length;
  const openCount = todolist.length;
  return (
    <div className={styles.footer}>
      <span className={styles.item}>진행 건수: {doneCount }</span>
      <span className={styles.item}>전체 건수: {openCount}</span>
    </div>
  );
}

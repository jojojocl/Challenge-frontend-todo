import React from "react";
import "./styles.css";

const TodoListItem = ({ itemId, onCheck, checked, onDelete, label }) => (
  <div className="todo-list-item">
    <div
      tabIndex="0"
      role="checkbox"
      aria-checked
      className="todo-list-item-content"
    >
      <input
        tabIndex="-1"
        type="checkbox"
        checked={checked}
        onChange={(e) => onCheck(itemId, e.target.checked)}
      />
      <span className={checked ? "todo-list-item-checked" : ""}>{label}</span>
    </div>
    <button type="button" className="todo-list-item-delete" onClick={() => onDelete(itemId)}>
      x
    </button>
  </div>
);

export default TodoListItem;

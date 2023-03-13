import React from "react";
import "./styles.css";
import { withTodo, WithTodoPropsTypes} from "containers/TodoContainer";
import TodoListItem from "../TodoListItem"

const TodoList = ({
  todoList,
  loading,
  getTodoList,
  updateTodo,
  deleteTodo,
}: WithTodoPropsTypes ) => {
  const handleDelete = (todoId:number) => {
      console.log(todoId);
      deleteTodo({ id: todoId });
  };

  const toggleCheck = (todoId:number, isChecked: boolean) => {
    console.log(isChecked);
      updateTodo({
          id: todoId,
          data: {
              checked: isChecked,
          }
      });
  };

  React.useEffect(() => {
    getTodoList()
  }, [])

  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      <div className="todo-list-content">
        {todoList.length ? todoList?.map((todoItem:any) => (
          <TodoListItem
              itemId={todoItem.id}
              onCheck={toggleCheck}
              checked ={todoItem.checked}
              label={todoItem.label}
              onDelete={handleDelete}
          />
        )) : (
          <div className="no-todos">
            Looks like you&apos;re absolutely free today!
          </div>
        )}
      </div>
    </div>
  );
};

export default withTodo(TodoList);

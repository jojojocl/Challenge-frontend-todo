import React from "react";

import { withTodo, WithTodoPropsTypes } from '../../containers/TodoContainer';

import "./styles.css";

const TodoResults = ({
  todoList,
}: WithTodoPropsTypes) => {
  const [checkedTodo, setCheckedTodo] = React.useState<any>();

  React.useEffect(() => {
    console.log('Done');
    setCheckedTodo(todoList.filter((todo: any) => todo.checked === true).length);
  }, [todoList]);

  return <div className="todo-results">Done: {checkedTodo} </div>;
};

export default withTodo(TodoResults);

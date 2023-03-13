import React from "react";
import TodoList from "./components/TodoList";
import TodoResults from "./components/TodoResults";
import TodoForm from "components/TodoForm";
import "./App.css";
import { Provider } from "react-redux";
import store from './store'

const App = () => {
  return (
    <div className="root">
      <Provider store={store}>
        <TodoList />
        <TodoResults />
        <TodoForm />
      </Provider>
    </div>
  );
};

export default App;

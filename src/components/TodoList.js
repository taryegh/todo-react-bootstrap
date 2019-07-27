import React from "react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
  render() {
    return (
      <div>
        <h1> Hello from TodoList</h1>
        <TodoItem />
      </div>
    );
  }
}

export default TodoList;

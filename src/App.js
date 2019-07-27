import React from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

class App extends React.Component {
  render() {
    return (
      <div>
        hello from App component
        <TodoInput />
        <TodoList />
      </div>
    );
  }
}

export default App;

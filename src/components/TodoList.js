import React from "react";
import TodoItem from "./TodoItem";

class TodoList extends React.Component {
  render() {
    return (
      <ul className="list-group my-5">
        <h3 className="text-capitalize text-center">todo list</h3>

        {
          this.props.items.map(el => {
            return <TodoItem key={el.id} title={el.item}/>
          })
        }

        
        <button
          type="button"
          className="btn btn-block btn-danger text-capitalize mt-5"
        >
          clear list
        </button>
      </ul>
    );
  }
}

export default TodoList;

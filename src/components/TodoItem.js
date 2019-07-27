import React from "react";

class TodoItem extends React.Component {
  render() {
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6>{this.props.title}</h6>
        <div className="todo-icon">
          <button
            onClick={this.props.handleDelete}
            className="rounded-sm btn-danger mr-2"
          >
            X
          </button>
          <button className="rounded-sm btn-warning">--</button>
        </div>
      </li>
    );
  }
}

export default TodoItem;

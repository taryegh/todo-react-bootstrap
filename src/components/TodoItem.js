import React from 'react';

class TodoItem extends React.Component {
  render() {
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
        <h6>{this.props.title}</h6>
        <div className='todo-icon'>
          <span className="mx-2 text text-success">Edit</span>
          <span className="mx-2 text text-danger">Remove</span>
        </div>
      </li>
    )
  }
}

export default TodoItem;
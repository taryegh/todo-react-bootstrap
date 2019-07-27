import React from "react";

class TodoInput extends React.Component {
  render() {
    return (
      <div className="card card-body my-3">
        <form action="">
          <input
            type="text"
            className="form-control text-capitalize"
            placeholder="add a todo item"
            onChange={this.props.handleChange}
            value={this.props.item}
          />
          <button type='submit' className='btn btn-block btn-primary mt-3'>Add</button>
        </form>
      </div>
    );
  }
}

export default TodoInput;

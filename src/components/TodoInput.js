import React from "react";

class TodoInput extends React.Component {
  render() {
    return (
      <div className="card card-body my-3">
        <form onSubmit={this.props.handleSubmit} action="">
          <input
            type="text"
            className="form-control text-capitalize"
            placeholder="add a todo item"
            onChange={this.props.handleChange}
            value={this.props.item}
          />
          <button
            type="submit"
            className={
              this.props.editItem
                ? "btn btn-block btn-warning mt-3"
                : "btn btn-block btn-success mt-3"
            }
          >
            {this.props.editItem ? "Edit" : "Add"}
          </button>
        </form>
      </div>
    );
  }
}

export default TodoInput;

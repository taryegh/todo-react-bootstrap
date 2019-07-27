import React from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      id: 1 + Math.random(),
      item: "",
      editItem: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  handleChange(e) {
    this.setState({
      item: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.item) {
      const newItem = {
        id: this.state.id,
        item: this.state.item
      };

      const updatedItems = [...this.state.items, newItem];

      this.setState({
        items: updatedItems,
        item: "",
        id: 1 + Math.random(),
        editItem: false
      });
    }
  }

  handleClear() {
    this.setState({
      items: []
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">todo input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
            <TodoList items={this.state.items} handleClear={this.handleClear} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

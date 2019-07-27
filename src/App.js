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
    this.handleClearList = this.handleClearList.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
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

  handleClearList() {
    this.setState({
      items: []
    });
  }

  handleDelete(id) {
    const filteredItems = this.state.items.filter(el => el.id !== id);

    this.setState({
      items: filteredItems
    });
  }

  handleEdit(id) {
    const filteredItems = this.state.items.filter(el => el.id !== id);

    const selectedItem = this.state.items.find(el => el.id === id);

    console.log(selectedItem);

    this.setState({
      items: filteredItems,
      item: selectedItem.item,
      editItem: true,
      id: id
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h1 className="text-capitalize text-center font-weight-light">
              todo
            </h1>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              handleClearList={this.handleClearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

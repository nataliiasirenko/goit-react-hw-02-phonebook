import React, { Component } from 'react';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleNameChange = e => {
    console.log(e.currentTarget.value);

    this.setState({ name: e.currentTarget.value });
  };

  handleSubmit = () => {};

  render() {
    return (
      <>
        <form>
          <label>Name</label>
          <input
            onChange={this.handleInputChange}
            placeholder="Name"
            type="text"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          />
          <label>Number</label>
          <input
            onChange={this.handleInputChange}
            placeholder="Number"
            type="text"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          />
        </form>
        <button type="submit">Add contact </button>
      </>
    );
  }
}

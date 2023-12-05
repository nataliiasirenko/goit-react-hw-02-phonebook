import React, { Component } from 'react';

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  //   handleNameChange = e => {
  //     console.log(e.currentTarget.value);

  //     this.setState({ name: e.currentTarget.value });
  //   };

  //   handleNumberChange = e => {
  //     console.log(e.currentTarget.value);

  //     this.setState({ number: e.currentTarget.value });
  //   };

  handleChange = e => {
    console.log(e.currentTarget);
    console.log(e.currentTarget.name);
    console.log(e.currentTarget.value);
  };
  handleSubmit = () => {};

  render() {
    return (
      <>
        <form>
          <label>Name</label>
          <input
            name="name"
            onChange={this.handleChange}
            placeholder="Name"
            type="text"
            value={this.state.name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          />
          <label>Number</label>
          <input
            name="number"
            onChange={this.handleChange}
            placeholder="Number"
            type="number"
            value={this.state.number}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          />
        </form>
        <button type="submit">Add contact </button>
      </>
    );
  }
}

import React, { Component } from 'react';

import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  onHandleChange = e => {
    this.setState({ name: e.currentTarget.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    const name = this.state.name;
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Name</h1>
        <input
          type="text"
          name="name"
          required
          onChange={this.onHandleChange}
        />
        <button type="submit"> Add contact </button>
      </form>
    );
  }
}

// hw-02-phonebook
// Основний стейт повинен бути в Арр
//  state = {
//     contacts: [],
//     filter: "",
//   };
// Для перевірки існуючого контакту використовуйте патерн  Guard Clause (раннє повернення)
// if (isExist) {
//   alert(`${name} is already in contacts.`);
//   return
// }
// В компонент ContactsList передаємо два props: - список відфільтрованих контактів і посилання на функцію для видалення контакту (саму фільтрацію робимо в App, для цього можна створити окремий метод і викликати в render())
// Можете використати ці патерни, замість тих, що запропоновані в ТЗ до ДЗ щоб в консолі не було помилок
// pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
// pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"

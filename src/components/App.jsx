import React, { Component } from 'react';
import { Form } from './Form/Form';
import shortid from 'shortid';
// import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  addContact = name => {
    const newContact = {
      id: shortid.generate(),
      name,
    };
    this.setState(prevState => ({
      contacts: [newContact, prevState.contacts],
    }));
  };

  render() {
    const addContact = this.addContact();
    return (
      <>
        <h1>Phonebook</h1>
        <Form onSubmit={addContact} />
      </>
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

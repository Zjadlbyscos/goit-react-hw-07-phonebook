import { useSelector } from 'react-redux';

import Contacts from './Contacts/Contacts';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';

import style from './App.module.css';

const App = () => {
  const filtered = useSelector(state => state.filter);
  const contacts = useSelector(state => state.contacts.items);

  const filterContact = e => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filtered.toLowerCase())
    );
    return filteredContacts;
  };

  return (
    <div className={style.form}>
      <h1>Phonebook</h1>
      <ContactForm />

      <Filter></Filter>
      <Contacts listContact={filterContact()} />
    </div>
  );
};

export default App;

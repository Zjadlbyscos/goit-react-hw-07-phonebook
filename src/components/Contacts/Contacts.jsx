import { useDispatch } from 'react-redux';
import { delContactsThunk } from 'redux/constants';
import React from 'react';

import s from './Contacts.module.css';

const Contacts = ({ listContact }) => {
  const dispatch = useDispatch();
  return listContact.map(contact => {
    return (
      <ul className={s.list} key={contact.id}>
        <li className={s.contact} key={contact.id}>
          {contact.name} - {contact.number}
          <button
            className={s.btn}
            onClick={() => {
              dispatch(delContactsThunk(contact.id));
            }}
          >
            Delete
          </button>
        </li>
      </ul>
    );
  });
};

export default Contacts;

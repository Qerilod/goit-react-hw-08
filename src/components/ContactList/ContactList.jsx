import React from "react";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/slice";
import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={s.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default ContactList;

import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
import s from "./Contact.module.css";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <li className={s.contact}>
      <span className={s.text}>
        <span className={s.name}>{name}</span>
        <span className={s.number}>{number}</span>
      </span>
      <button className={s.button} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default Contact;

import { useState, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import style from "./ContactForm.module.css";
import { addContact } from "../../../redux/phonebook/phoneOperations";

function ContactForm( ) {
  const dispatch = useDispatch();
  const contactSelector = useSelector((state) => state.contacts.items)
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const onAddContact = (e) => {
    e.preventDefault();
    const contact = { name, phone };
    console.log(addContact(contact))
    console.log(contactSelector)
    const isNameContact = contactSelector.some( e => e.name.toLowerCase() === name.toLowerCase())
    if (isNameContact) {
      return alert(`${name} is already in contacts.`);
    }
    console.log('ok')
    dispatch(addContact(contact));
    setName('');
    setPhone('')
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
      switch (name) {
        case 'name':
          setName(value);
          return;
        case 'phone':
          setPhone(value);
          return;
        default:
          return;
      }
  };

  return (
    <form className={style.form} onSubmit={onAddContact}>
      <label className={style.label}>
        Name
        <input
          className={style.input}
          type="text"
          value={name}
          onChange={handleChange}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label className={style.label}>
        Number
        <input
          className={style.input}
          type="tel"
          value={phone}
          onChange={handleChange}
          name="phone"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button type="submit" className={style.btn}>
        Add Contact
      </button>
    </form>
  );
}

export default memo(ContactForm);
import ContactForm from "./ContactForm";
import Filter from "./Filter";
import ContactList from "./ContactList";
import { getContacts } from "../../redux/phonebook/phoneOperations";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
function Phonebook() {
  const dispatch = useDispatch();
  useEffect (() => {
    dispatch(getContacts())
  }, []);
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default Phonebook;

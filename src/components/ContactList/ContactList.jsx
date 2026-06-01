import Contact from '../Contact/Contact';
import style from './ContactList.module.css';

const ContactList = () => {
  return (
    <ul className={style.contactList}>
      <Contact />
    </ul>
  );
};

export default ContactList;

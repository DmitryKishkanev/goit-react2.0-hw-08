import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useGetState } from '@/redux/useGetState';
import { fetchContacts } from '@/redux/contactsOps';
import ContactList from '../ContactList';
import SearchBox from '../SearchBox';
import ContactForm from '../ContactForm';
import style from './Phonebook.module.css';

const Phonebook = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useGetState();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={style.phonebookContainer}>
      <h1 className={style.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList />
    </div>
  );
};

export default Phonebook;

import { BiSolidUser } from 'react-icons/bi';
import { BiSolidPhone } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { useGetState } from '@/redux/useGetState';
import { deleteContact } from '@/redux/contacts/operations';
import style from './Contact.module.css';

const Contact = () => {
  const { filteredContacts } = useGetState();
  const dispatch = useDispatch();

  return (
    <>
      {filteredContacts.map(({ id, name, number }) => (
        <li className={style.contactItem} key={id}>
          <div className={style.contactBox}>
            <p className={style.contactContent}>
              <BiSolidUser />
              {name}:
            </p>
            <p className={style.contactContent}>
              <BiSolidPhone />
              {number}
            </p>
          </div>

          <button type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </button>
        </li>
      ))}
    </>
  );
};

export default Contact;

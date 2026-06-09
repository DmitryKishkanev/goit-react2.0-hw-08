import { Box } from '@mui/material';
import Contact from '../Contact/Contact';
import style from './ContactList.module.css';

const ContactList = () => {
  return (
    <Box component="ul" className={style.contactList}>
      <Contact />
    </Box>
  );
};

export default ContactList;

import { BiSolidUser } from 'react-icons/bi';
import { BiSolidPhone } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { useGetState } from '@/redux/useGetState';
import { deleteContact } from '@/redux/contacts/operations';
import { Box, Button, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import style from './Contact.module.css';

const Contact = () => {
  const { filteredContacts } = useGetState();
  const dispatch = useDispatch();

  return (
    <>
      {filteredContacts.map(({ id, name, number }) => (
        <li className={style.contactItem} key={id}>
          <Box className={style.contactBox}>
            <Typography className={style.contactContent}>
              <BiSolidUser />
              {name}:
            </Typography>
            <Typography className={style.contactContent}>
              <BiSolidPhone />
              {number}
            </Typography>
          </Box>

          <Box className={style.contactButtonBox}>
            <Button
              className={style.contactBtn}
              type="button"
              variant="outlined"
              startIcon={<DeleteIcon />}
              onClick={() => dispatch(deleteContact(id))}
            >
              Delete
            </Button>

            <Button className={style.contactBtn} variant="outlined">
              Edit
            </Button>
          </Box>
        </li>
      ))}
    </>
  );
};

export default Contact;

import { useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import SearchBox from '@/components/SearchBox';
import ContactList from '@/components/ContactList';
import BackLink from '@/routes/Component/BackLink';
import { fetchContacts } from '@/redux/contacts/operations';
import { useDispatch } from 'react-redux';
import style from './FindContactPage.module.css';

const FindContactPage = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Сохраняем URL откуда мы пришли для возврата назад. Или вернуться на '/contacts'
  // const backLinkLokatonRef = location.state?.from ?? '/contacts';
  // сохраняем в useRef() на случай если появятся пути глубже
  const backLinkRef = useRef(location.state?.from ?? '/phonebook');

  const handeClose = () => {
    navigate('/phonebook');
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box className={style.findContactPageBackdrop}>
      <Box className={style.findContactPageWrapper}>
        {/* строчка для ESLint, что бы он не ругался на backLinkRef.current*/}
        {/* eslint-disable-next-line */}
        <BackLink to={backLinkRef.current}>Go back</BackLink>
        <Box className={style.findContactPageBox}>
          <Typography className={style.findContactPageTitle} variant="h5">
            Contacts
          </Typography>
          <SearchBox />
          <ContactList />
        </Box>

        <Button
          className={style.findContactPageBtn}
          type="button"
          onClick={handeClose}
          variant="outlined"
        >
          close
        </Button>
      </Box>
    </Box>
  );
};

export default FindContactPage;

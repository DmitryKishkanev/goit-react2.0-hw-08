import { useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import ContactForm from '@/components/ContactForm';
import BackLink from '@/routes/Component/BackLink';
import { Box, Button } from '@mui/material';
import style from './NewContactPage.module.css';

const NewContactPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // Сохраняем URL откуда мы пришли для возврата назад. Или вернуться на '/contacts'
  // const backLinkLokatonRef = location.state?.from ?? '/contacts';
  // сохраняем в useRef() на случай если появятся пути глубже
  const backLinkLokatonRef = useRef(location.state?.from ?? '/phonebook');

  const handeClose = () => {
    navigate('/phonebook');
  };

  return (
    <Box className={style.contactPageBackdrop}>
      <Box className={style.contactPageBox}>
        {/* строчка для ESLint, что бы он не ругался на backLinkRef.current*/}
        {/* eslint-disable-next-line */}
        <BackLink to={backLinkLokatonRef.current}>Go Back</BackLink>
        <ContactForm />

        <Button
          className={style.contactPageBtn}
          type="button"
          onClick={handeClose}
          variant="outlined"
          sx={{
            borderColor: 'rgb(161, 107, 63)',
            color: 'white',
            backgroundColor: 'rgba(161, 107, 63, 0.7)',
            '&:hover': {
              transform: 'scale(1.09)',
              borderColor: 'white',
              color: 'rgb(82, 38, 0)',
            },
          }}
        >
          Close
        </Button>
      </Box>
    </Box>
  );
};

export default NewContactPage;

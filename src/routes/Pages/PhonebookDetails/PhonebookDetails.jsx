import { Suspense } from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
// import BackLink from '@/routes/Component/BackLink';
// import Phonebook from '@/components/Phonebook';
// import { useLogOutRedirect } from '@/hooks/useLogOuteRedirect';
import style from './PhonebookDetails.module.css';

const PhonebookDetails = () => {
  const location = useLocation();

  return (
    <Box className={style.phonebookDetailsContainer}>
      <Box className={style.phonebookDetailsBox}>
        <Typography className={style.phonebookDetailsTitle} variant="h4">
          Your contacts
        </Typography>
        <Button
          component={NavLink}
          to="newContactPage"
          state={{ from: location }}
          variant="outlined"
          sx={{
            width: '210px',
            borderColor: 'white',
            color: 'white',
            transition:
              'transform 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1)',

            '&:hover': {
              transform: 'scale(1.07)',
              color: 'rgb(82, 38, 0)',
              borderColor: 'rgb(82, 38, 0)',
            },
            '&:focus': {
              transform: 'scale(1.07)',
              color: 'rgb(82, 38, 0)',
              borderColor: 'rgb(82, 38, 0)',
            },
            '&.active': {
              color: 'rgb(255, 129, 56)',
              borderColor: 'rgb(255, 129, 56)',
            },
          }}
        >
          Add new contact
        </Button>
        <Button
          component={NavLink}
          to="findContactPage"
          state={{ from: location }}
          variant="outlined"
          sx={{
            width: '210px',
            borderColor: 'white',
            color: 'white',
            transition:
              'transform 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1)',

            '&:hover': {
              transform: 'scale(1.07)',
              color: 'rgb(82, 38, 0)',
              borderColor: 'rgb(82, 38, 0)',
            },
            '&:focus': {
              transform: 'scale(1.07)',
              color: 'rgb(82, 38, 0)',
              borderColor: 'rgb(82, 38, 0)',
            },
            '&.active': {
              color: 'rgb(255, 129, 56)',
              borderColor: 'rgb(255, 129, 56)',
            },
          }}
        >
          Find contact by name
        </Button>
      </Box>

      <Suspense
        fallback={
          <div style={{ alignSelf: 'flex-start' }}>LOADING SUBPAGE...</div>
        }
      >
        <Box className={style.phonebookDetailsOutletBox}>
          <Outlet />
        </Box>
      </Suspense>
    </Box>
  );
};

export default PhonebookDetails;

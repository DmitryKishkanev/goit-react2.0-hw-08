import { Suspense } from 'react';
import { Outlet, NavLink, useLocation } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
// import BackLink from '@/routes/Component/BackLink';
// import Phonebook from '@/components/Phonebook';
// import { useLogOutRedirect } from '@/hooks/useLogOuteRedirect';
import style from './PhonebookDetails.module.css';

const PhonebookDetails = () => {
  const location = useLocation();
  // const backLinkRef = useRef(location.state?.from ?? '/');

  // useLogOutRedirect();

  // useEffect(() => {
  //   window.scrollTo({
  //     top: document.body.scrollHeight,
  //     behavior: 'smooth',
  //   });
  // }, [location]);

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

    // <main className={style.main}>
    //   <div className={style.backLinkBox}>
    //     {/* строчка для ESLint, что бы он не ругался на backLinkRef.current*/}
    //     {/* eslint-disable-next-line */}
    //     <BackLink to={backLinkRef.current}>Go back</BackLink>
    //   </div>

    //   <div className={style.phonebooDetailsContainer}>
    //     <Phonebook />

    //     <div className={style.descriptionBox}>
    //       <div className={style.linkBox}>
    //         <Link className={style.link} to="description">
    //           Description
    //         </Link>
    //       </div>
    //       <Suspense fallback={<div>Loading...</div>}>
    //         <Outlet />
    //       </Suspense>
    //     </div>
    //   </div>
    // </main>
  );
};

export default PhonebookDetails;

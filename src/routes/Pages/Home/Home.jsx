import { NavLink, Outlet } from 'react-router-dom';
import { useLogOutRedirect } from '@/hooks/useLogOuteRedirect';
import { useGetState } from '@/redux/useGetState';
import { Box, Button, Typography } from '@mui/material';
// import style from './Home.module.css';

const Home = () => {
  const { isLoggedIn } = useGetState();

  useLogOutRedirect();

  return (
    <>
      {isLoggedIn ? (
        <Box
          sx={{
            display: 'flex',
            // flexDirection: 'column',
            justifyContent: 'left',
            alignItems: 'center',
            minHeight: 'calc(100vh - 110px)',
          }}
        >
          <Typography
            variant="h1"
            sx={{ color: 'rgb(82, 38, 0)', fontSize: '87px' }}
          >
            Phonebook welcome page
          </Typography>
          <Box>
            <Button component={NavLink} to="/description" variant="outlined">
              Description
            </Button>

            <Outlet />
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            minHeight: 'calc(100vh - 110px)',
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button
            component={NavLink}
            to="/login"
            variant="outlined"
            // color="inherit"
            sx={{
              width: '98px',
              marginLeft: '1000px',
              color: 'rgb(124, 58, 0)',
              border: '2px solid rgb(124, 58, 0)',
              transition:
                'transform 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1)',

              '&:hover': {
                transform: 'scale(1.07)',
                color: 'rgb(255, 129, 56)',
                borderColor: 'rgb(255, 129, 56)',
              },
              '&:focus': {
                transform: 'scale(1.07)',
                color: 'rgb(255, 129, 56)',
                borderColor: 'rgb(255, 129, 56)',
              },
            }}
          >
            Log in
          </Button>

          <Button
            component={NavLink}
            to="/register"
            variant="outlined"
            color="inherit"
            sx={{
              width: '95px',
              marginLeft: '1000px',
              color: 'rgb(124, 58, 0)',
              border: '2px solid rgb(124, 58, 0)',
              transition:
                'transform 250ms cubic-bezier(0.4, 0, 0.2, 1), color 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1)',

              '&:hover': {
                transform: 'scale(1.07)',
                color: 'rgb(255, 129, 56)',
                borderColor: 'rgb(255, 129, 56)',
              },
              '&:focus': {
                transform: 'scale(1.07)',
                color: 'rgb(255, 129, 56)',
                borderColor: 'rgb(255, 129, 56)',
              },
            }}
          >
            Sign Up
          </Button>
        </Box>
      )}
    </>

    // <main className={style.main}>
    //   {isLoggedIn ? (
    //     <div>
    //       <h1>This phone book knows everything about your contacts</h1>
    //     </div>
    //   ) : (
    //     <div className={style.authorizationBox}>
    //       <NavLink to="/login">
    //         <button className={style.authorizationButton}>Log in</button>
    //       </NavLink>

    //       <NavLink to="/register">
    //         <button className={style.authorizationButton}>Sign up</button>
    //       </NavLink>
    //     </div>
    //   )}
    // </main>
  );
};

export default Home;

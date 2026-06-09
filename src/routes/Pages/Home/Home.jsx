import { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavLink, Outlet } from 'react-router-dom';
// import { useLogOutRedirect } from '@/hooks/useLogOuteRedirect';
import { useGetState } from '@/redux/useGetState';
import { Box, Button, Typography } from '@mui/material';
// import style from './Home.module.css';

const Home = () => {
  const { isLoggedIn } = useGetState();
  const navigate = useNavigate();

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      navigate('/', { replace: true });
    }
  };

  // оборачиваем handleKeyDown в useCallback(), что бы ниже в useEffect можно было handleKeyDown спокойно поставить в зависимости, что бы эффект постоянно не отписывал/подписывал слушатель заново
  const handleKeyDown = useCallback(
    event => {
      if (event.code === 'Escape') {
        navigate('/', { replace: true });
      }
    },
    [navigate],
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
    // Не ставим handleKeyDown в зависимости useEffect,
    // потому что функция пересоздаётся на каждом рендере,
    // и эффект будет постоянно отписывать/подписывать слушатель заново.
    // Нам нужен один слушатель при монтировании, поэтому оставляем [].
  }, [handleKeyDown]);

  // useLogOutRedirect();

  return (
    <>
      {isLoggedIn ? (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            minHeight: 'calc(100vh - 110px)',
            position: 'relative',
          }}
        >
          <Box
            onClick={handleBackdropClick}
            sx={{
              position: 'absolute',
              inset: 0,
            }}
          />
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                alignItems: 'flex-end',
              }}
            >
              <Typography
                variant="h1"
                sx={{ color: 'rgb(82, 38, 0)', fontSize: '87px' }}
              >
                Phonebook welcome page
              </Typography>
              <Button
                component={NavLink}
                to="/description"
                variant="outlined"
                sx={{
                  fontWeight: 500,
                  fontSize: 16,
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
                Description
              </Button>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: 'calc(100vh - 101.02px)',

              // alignItems: 'center',
              width: '400px',
            }}
          >
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
  );
};

export default Home;

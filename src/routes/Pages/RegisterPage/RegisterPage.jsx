import { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
import RegisterForm from '@/routes/Component/RegisterForm';
import style from './RegisterPage.module.css';

const RegisterPage = () => {
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
  }, [handleKeyDown]);

  return (
    <Box className={style.registerPageContainer} onClick={handleBackdropClick}>
      <RegisterForm />
    </Box>
  );
};

export default RegisterPage;

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Typography, TextField, Button } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
import { logIn } from '@/redux/auth/operations';
import style from './LoginForm.module.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      // dispatch возвращает промис, а unwrap превращает его в обычный промис с payload
      await dispatch(logIn({ email, password })).unwrap();

      // если логин успешный, очищаем форму и переходим на главную
      setEmail('');
      setPassword('');
      // Можно не делать если есть приватные и публичные роуты
      // navigate('/', { replace: true });
    } catch (error) {
      // если логин неуспешный, ловим ошибку
      setErrorMessage(error.message || 'Login failed');
    }
  };

  return (
    <Box className={style.loginFormBox}>
      <Typography variant="h5" className={style.loginFormTitle}>
        Log In
      </Typography>
      <Box component="form" className={style.loginForm} onSubmit={handleSubmit}>
        <TextField
          className={style.loginFormField}
          label="Email"
          type="email"
          name="email"
          required
          fullWidth
          value={email}
          onChange={e => setEmail(e.target.value)}
          sx={{
            borderRadius: '4px',
            backgroundColor: 'white',
            transition: 'transform 250ms cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              transform: 'scale(1.05)',
            },
            '&:focus': {
              transform: 'scale(1.05)',
            },
            '& .MuiInputBase-input': {
              padding: '12px 14px',
              fontSize: '1.2rem', // увеличивает шрифт текста внутри поля
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                border: 'none',
              },
              '&:hover fieldset': {
                border: 'none',
              },
              '&.Mui-focused fieldset': {
                border: 'none',
              },
            },
            '& .MuiInputLabel-root': {
              color: 'rgba(0, 0, 0, 0.5)',
              fontSize: '1.1rem',
            },
            '& .MuiInputLabel-root.Mui-focused': {
              justifyContent: 'center',
              color: 'rgba(0, 0, 0, 0.5)',
              fontSize: '1.5rem',
            },
          }}
        />

        <TextField
          className={style.loginFormField}
          label="Password"
          type="password"
          name="password"
          required
          fullWidth
          value={password}
          onChange={e => setPassword(e.target.value)}
          sx={{
            borderRadius: '4px',
            backgroundColor: 'white',
            transition: 'transform 250ms cubic-bezier(0.4, 0, 0.2, 1)',

            '&:hover': {
              transform: 'scale(1.05)',
            },
            '&:focus': {
              transform: 'scale(1.05)',
            },
            '& .MuiInputBase-input': {
              padding: '12px 14px',
              fontSize: '1.2rem', // увеличивает шрифт текста внутри поля
            },
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                border: 'none',
              },
              '&:hover fieldset': {
                border: 'none',
              },
              '&.Mui-focused fieldset': {
                border: 'none',
              },
            },
            '& .MuiInputLabel-root': {
              color: 'rgba(0, 0, 0, 0.5)',
              fontSize: '1.1rem',
            },
            '& .MuiInputLabel-root.Mui-focused': {
              color: 'rgba(0, 0, 0, 0.5)',
              fontSize: '1.5rem',
            },
          }}
        />

        {errorMessage && (
          <Typography
            color="error"
            variant="body2"
          >{`${errorMessage} - try again`}</Typography>
        )}

        <Button
          className={style.loginFormButton}
          variant="outlined"
          type="submit"
          disabled={!email || !password}
          sx={{
            alignSelf: 'center',
            width: '100px',
            border: '2px solid white',
            color: 'white',
            transition:
              ' transform 250ms cubic-bezier(0.4, 0, 0.2, 1), border-color 250ms cubic-bezier(0.4, 0, 0.2, 1)',
            '&:hover': {
              transform: 'scale(1.09)',
              borderColor: 'white',
            },
          }}
        >
          Log in
        </Button>
      </Box>
    </Box>
  );
};

export default LoginForm;

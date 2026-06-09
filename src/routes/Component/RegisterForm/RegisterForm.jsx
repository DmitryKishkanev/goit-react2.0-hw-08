import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Typography, TextField, Button } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
import { register } from '@/redux/auth/operations';
import style from './RegisterForm.module.css';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      // dispatch возвращает промис, а unwrap превращает его в обычный промис с payload
      await dispatch(register({ name, email, password })).unwrap();

      // если регистрация успешна, очищаем форму и переходим на главную
      setName('');
      setEmail('');
      setPassword('');
      // Можно не делать если есть приватные и публичные роуты
      // navigate('/', { replace: true });
    } catch (error) {
      // если логин неуспешный, ловим ошибку
      setErrorMessage(error.message || 'Register failed');
    }
  };

  return (
    <Box className={style.registerFormBox}>
      <Typography variant="h5" className={style.registerFormTitle}>
        Registration
      </Typography>
      <Box
        component="form"
        className={style.registerForm}
        onSubmit={handleSubmit}
      >
        <TextField
          className={style.registerFormField}
          label="Name"
          type="text"
          name="name"
          required
          fullWidth
          value={name}
          onChange={e => setName(e.target.value)}
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
              color: 'rgb(199, 141, 75)',
              fontSize: '1.5rem',
            },
          }}
        />

        <TextField
          className={style.registerFormField}
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
              color: 'rgb(199, 141, 75)',
              fontSize: '1.5rem',
            },
          }}
        />

        <TextField
          className={style.registerFormField}
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
              color: 'rgb(199, 141, 75)',
              fontSize: '1.5rem',
            },
          }}
        />

        {errorMessage && <p>{`${errorMessage} - try again`}</p>}

        <Button
          className={style.registerFormButton}
          variant="outlined"
          type="submit"
          disabled={!name || !email || !password}
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
          Sign Up
        </Button>
      </Box>
    </Box>
  );
};

export default RegisterForm;

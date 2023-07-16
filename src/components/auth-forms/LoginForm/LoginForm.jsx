import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { logIn } from '../../../redux/ApiOperations';
import css from './LoginForm.module.css';

export default function LoginForm() {
  const dispatch = useDispatch();

  const [isEmailWrong, setEmailValidation] = useState(false);
  const [isPasswordWrong, setPasswordValidation] = useState(false);

  const isLogProblem = useSelector(
    state => state.auth.isAuthProblem.isLogProblem
  );

  const [isActive, setIsActive] = useState(false);

  const buttonStyles = {
    backgroundColor: isActive ? '#2072af' : '#003262',
    transition: 'background-color 0.2s ease',
  };

  const handleSubmit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const email = data.get('email');
    const password = data.get('password');

    if (email === '') {
      return setEmailValidation(true);
    }
    setEmailValidation(false);

    if (password.length > 6) {
      setPasswordValidation(false);
    } else {
      return setPasswordValidation(true);
    }

    const userData = {
      name: email.split('@')[0],
      email,
      password,
    };

    dispatch(logIn(userData));
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: '#003262' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Log In
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            id="email"
            name="email"
            type="email"
            label="Email Address"
            placeholder="example.something@gmail.com"
            autoComplete="email"
            margin="normal"
            required
            fullWidth
            autoFocus
            error={isEmailWrong || isLogProblem ? true : false}
            helperText={isEmailWrong ? 'Invalid email. Please try again' : ''}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            error={isPasswordWrong || isLogProblem ? true : false}
            helperText={
              !isPasswordWrong
                ? ''
                : 'Password must contain at leat 7 characters'
            }
            autoComplete="current-password"
          />
          {isLogProblem && (
            <div style={{ marginTop: 10 }}>
              <p style={{ margin: 0, color: 'red' }}>
                Wrong email or password. Please try again
              </p>
            </div>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2, mb: 2 }}
            style={{ ...buttonStyles }}
            className={css.loginButton}
            onMouseEnter={() => setIsActive(true)}
            onMouseLeave={() => setIsActive(false)}
          >
            Log In
          </Button>
          <Grid container>
            <Grid item>
              <Link
                href="http://localhost:3000/goit-react-hw-08-phonebook/register"
                variant="body2"
                style={{ textDecoration: 'none' }}
              >
                <p className={css.loginLink}>
                  <span>Don't have an account?</span>
                  <span style={{ marginLeft: 5 }}>Sign Up</span>
                </p>
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

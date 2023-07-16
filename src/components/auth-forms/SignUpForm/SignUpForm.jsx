import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';

import { useDispatch, useSelector } from 'react-redux';

import { useState } from 'react';

import { registerUser } from '../../../redux/ApiOperations';

import { AiOutlineQuestionCircle } from 'react-icons/ai';
import css from './SignUpForm.module.css';

export default function SignIn() {
  const dispatch = useDispatch();

  const isAuthProblem = useSelector(
    state => state.auth.isAuthProblem.isRegProblem
  );

  const [isEmailWrong, setIsEmailWrong] = useState(false);
  const [isPasswordWrong, setIsPasswordWrong] = useState(false);
  const [isAddInfo, setAddInfo] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const email = data.get('email');
    const password = data.get('password');

    if (email === '') {
      return setIsEmailWrong(true);
    }

    if (!(email.includes('@') && email.split('.').length - 1 === 2)) {
      return setIsEmailWrong(true);
    }

    setIsEmailWrong(false);

    if (password.length <= 6) {
      return setIsPasswordWrong(true);
    }

    setIsPasswordWrong(false);

    const userData = {
      name: email.split('@')[0],
      email,
      password,
    };

    dispatch(registerUser(userData));
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
          Sign Up
        </Typography>

        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{ mt: 1 }}
          style={{ position: 'relative' }}
        >
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
            error={isEmailWrong || isAuthProblem ? true : false}
            helperText={
              isEmailWrong ? (
                <span>
                  Invalid email. Please try again{' '}
                  <AiOutlineQuestionCircle
                    onMouseEnter={() => {
                      setAddInfo(true);
                    }}
                    onMouseLeave={() => {
                      setAddInfo(false);
                    }}
                  />
                </span>
              ) : (
                <span>
                  Must contain two "." symbols{' '}
                  <AiOutlineQuestionCircle
                    className={css.emailTextHelper}
                    onMouseEnter={() => {
                      setAddInfo(true);
                    }}
                    onMouseLeave={() => {
                      setAddInfo(false);
                    }}
                  />
                </span>
              )
            }
          />

          <div
            className={css.infoBlock}
            style={{
              display: isAddInfo ? 'block' : 'none',
            }}
          >
            <p
              style={{
                padding: 7,
                fontSize: 12,
                fontWeight: 500,
                color: 'white',
              }}
            >
              Due to specific backend features email must contain two "." and
              "@" symbols. Please write the email in the following format
              "example.smth@gmail.com"
            </p>
          </div>
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            error={isPasswordWrong ? true : false}
            inputProps={{ pattern: /^\S+@\S+\.\S+$/ }}
            helperText={'Must be at least 7 character long'}
            autoComplete="current-password"
          />
          {isAuthProblem && (
            <div style={{ marginTop: 10 }}>
              <p style={{ margin: 0, color: 'red' }}>
                This email is already registered or written form is not accepted
                in backend. Please try to write a new one{' '}
              </p>
            </div>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 2, mb: 2 }}
            className={css.signUpButton}
          >
            Sign Up
          </Button>
        </Box>
        <Link
          href="http://localhost:3000/goit-react-hw-08-phonebook/login"
          variant="body2"
          style={{ textDecoration: 'none' }}
        >
          <p className={css.signUpLink}>
            <span>Have already an account?</span>
            <span style={{ marginLeft: 5 }}>Login</span>
          </p>
        </Link>
      </Box>
    </Container>
  );
}

import { createSlice } from '@reduxjs/toolkit';
import {
  registerUser,
  logIn,
  logOut,
  fetchCurrentUser,
} from '../ApiOperations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLogged: false,
  isRefreshing: false,
  isAuthProblem: { isRegProblem: false, isLogProblem: false },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user.name = action.payload.user.name;
        state.user.email = action.payload.user.email;
        state.token = action.payload.token;
        state.isLogged = true;
        state.isAuthProblem.isRegProblem = false;
      })
      .addCase(registerUser.rejected, state => {
        state.isAuthProblem.isRegProblem = true;
      })
      .addCase(logIn.fulfilled, (_, action) => {
        return {
          user: {
            name: action.payload.user.name,
            email: action.payload.user.email,
          },
          token: action.payload.token,
          isLogged: true,
          isAuthProblem: { isRegProblem: false, isLogProblem: false },
        };
      })
      .addCase(logIn.rejected, state => {
        state.isAuthProblem.isLogProblem = true;
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLogged = false;
      })

      .addCase(fetchCurrentUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLogged = true;
        state.isRefreshing = false;
      })
      .addCase(fetchCurrentUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addDefaultCase(state => {
        return state;
      });
  },
});

export default authSlice;

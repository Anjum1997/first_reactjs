
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signupSuccess: (state, action) => {
      state.user = action.payload;
      state.error = null;
    },
    signupFailure: (state, action) => {
      state.user = null;
      state.error = action.payload;
    },
    loginSuccess: (state, action) => {
        state.user = action.payload;
        state.error = null;
      },
      loginFailure: (state, action) => {
        state.user = null;
        state.error = action.payload;
      },
      logoutSuccess: (state, action) => {
        state.user = action.payload;
        state.error = null;
      },
       logoutFailure: (state,action) => {
        state.user = null;
        state.error = action.payload;
      },
     resetPasswordSuccess: (state, action) => {
        state.user = action.payload;
        state.error = null;
      },
      resetPasswordFailure: (state, action) => {
        state.user = null;
        state.error = action.payload;
      },
      
      sendPasswordResetEmailSuccess: (state, action) => {
        state.user = action.payload;
        state.error = null;
      },
      sendPasswordResetEmailFailure: (state, action) => {
        state.user = null;
        state.error = action.payload;
      },
  },
});

export const { signupSuccess, signupFailure,loginSuccess,loginFailure, logoutSuccess,logoutFailure,resetPasswordSuccess,resetPasswordFailure,sendPasswordResetEmailSuccess,sendPasswordResetEmailFailure } = authSlice.actions;

export default authSlice.reducer;

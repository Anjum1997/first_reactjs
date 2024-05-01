
import{ SIGNUP_SUCCESS,SIGNUP_FAILURE,LOGIN_SUCCESS,LOGIN_FAILURE,
LOGOUT_SUCCESS,LOGOUT_FAILURE,RESET_PASSWORD_SUCCESS,RESET_PASSWORD_FAILURE,SEND_PASSWORD_RESET_EMAIL_SUCCESS,SEND_PASSWORD_RESET_EMAIL_FAILURE} from '../constants/authConstants';

export const signupSuccess = (user) => {
  return {
     type: SIGNUP_SUCCESS,
      payload: user };
};

export const signupFailure = (error) => {
  return { 
    type: SIGNUP_FAILURE, 
    payload: error };
};

export const loginSuccess = (user) => {
  return {
     type: LOGIN_SUCCESS, 
     payload: user };
};

export const loginFailure = (error) => {
  return {
     type:LOGIN_FAILURE,
      payload: error };
};

export const logoutSuccess = () => {
  return { 
    type: LOGOUT_SUCCESS };
};

export const logoutFailure = (error) => {
  return {
     type: LOGOUT_FAILURE,
     payload: error };
};

export const resetPasswordSuccess = () => {
  return { 
    type:RESET_PASSWORD_SUCCESS };
};

export const resetPasswordFailure = (error) => {
  return { 
    type: RESET_PASSWORD_FAILURE, 
    payload: error };
};

export const sendPasswordResetEmailSuccess = () => {
  return { 
    type: SEND_PASSWORD_RESET_EMAIL_SUCCESS };
};

export const sendPasswordResetEmailFailure = (error) => {
  return { 
    type: SEND_PASSWORD_RESET_EMAIL_FAILURE, 
    payload: error };
};


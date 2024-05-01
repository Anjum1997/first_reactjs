import{ SIGNUP_SUCCESS,SIGNUP_FAILURE,LOGIN_SUCCESS,LOGIN_FAILURE,
  LOGOUT_SUCCESS,LOGOUT_FAILURE,RESET_PASSWORD_SUCCESS,RESET_PASSWORD_FAILURE,SEND_PASSWORD_RESET_EMAIL_SUCCESS,SEND_PASSWORD_RESET_EMAIL_FAILURE} from '../constants/authConstants';
  
const initialState = {
  user: null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGNUP_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: null,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        user: null,
        error: action.payload,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: null,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        user: null,
        error: action.payload,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        user: null,
        error: null,
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        error: null,
      };
    case RESET_PASSWORD_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case SEND_PASSWORD_RESET_EMAIL_SUCCESS:
      return {
        ...state,
        error: null,
      };
    case SEND_PASSWORD_RESET_EMAIL_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;

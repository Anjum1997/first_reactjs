
import { combineReducers } from 'redux';
import authReducer from './slices/authSlice';
import modalReducer from "./slices/modalSlice";
import productsReducer from "./slices/productsSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  modal: modalReducer,
  products: productsReducer
  
});

export default rootReducer;

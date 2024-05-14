
import { combineReducers } from 'redux';
import authReducer from './slices/authSlice';
import cartReducer from "./slices/cartSlice";
import modalReducer from "./slices/modalSlice";


const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  modal: modalReducer,
  
});

export default rootReducer;

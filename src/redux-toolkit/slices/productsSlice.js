
import { createSlice } from '@reduxjs/toolkit';
import { products} from "../../components/productcart/ProductData";

const initialState = {
  products: products,
  cart: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addToCart(state, action) {
      const productToAdd = state.products.find(product => product.id === action.payload.id);
      if (productToAdd) {
        return {
          ...state,
          cart: [...state.cart, productToAdd]
        };
      }
      return state;
    },
    removeFromCart(state, action) {
      state.cart = state.cart.filter(item => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = productsSlice.actions;
export default productsSlice.reducer;




// 
// import { createSlice } from '@reduxjs/toolkit';
// 
// const initialState = []; 
// 
// const productsSlice = createSlice({
//   name: 'products',
//   initialState,
//   reducers: {
//     setProducts(state, action) {
//       return action.payload;
//     },
//   },
// });
// 
// export const { setProducts } = productsSlice.actions;
// export default productsSlice.reducer;
// 

// src/redux/slices/productSlice.js
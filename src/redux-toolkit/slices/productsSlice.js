// productsSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { products } from "../../components/productcart/ProductData";

const initialState = {
  products: products,
  filteredProducts: products, 
  cart: [],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addToCart(state, action) {
      const productToAdd = state.products.find(product => product.id === action.payload.id);
      if (productToAdd) {
        state.cart.push(productToAdd);
      }
    },
    removeFromCart(state, action) {
      state.cart = state.cart.filter(item => item.id !== action.payload);
    },
    filterProductsByType(state, action) {
      state.filteredProducts = state.products.filter(product => product.type === action.payload);
    },
  },
});

export const { addToCart, removeFromCart, filterProductsByType } = productsSlice.actions;
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
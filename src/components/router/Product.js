import React from 'react';
import ProductListPage from '../productcart/ProductListpage';




const Product = () => {
  return (
    <div>
      <ProductListPage />
    </div>
  )
}

export default Product;




// import React, { useState, useEffect } from 'react';
// import ProductPage from '../productcart/ProductPage';
// import Navbar from "../navbar/Navbar";
// 
// 
// const Product = () => {
//   const [products, setProducts] = useState([]);
//  
// 
//   useEffect(() => {
//     fetch('https://fakestoreapi.com/products')
//       .then(response => response.json())
//       .then(data => setProducts(data))
//       .catch(error => console.error('Error fetching products:', error));
//   }, []);
// 
//   
//   return (
//     <>
//     <Navbar />
//     <div className='product-container'>
//       <h1>Shop Store</h1>
//         <div>
//           {products.map(product => (
//             <ProductPage key={product.id} product={product} />
//           ))}
//         </div>
//     </div>
//     </>
//   );
// };
// 
// export default Product;

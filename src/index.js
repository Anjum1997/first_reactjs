import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux/store/store';
import { AuthContextProvider } from "./components/context/AuthContext";
import { BrowserRouter } from 'react-router-dom';



const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  
  <React.StrictMode>
   <Provider store ={store}>
      <AuthContextProvider>
        <BrowserRouter>
        <App />
        </BrowserRouter>
    
      </AuthContextProvider>
      </Provider>
 
  </React.StrictMode>
);

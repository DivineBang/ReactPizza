import React, { useState, useEffect } from 'react';

import  Header from "./components/Header";
import  {Home} from "./pages/Home";
import  {Cart} from "./pages/Cart";

import {Routes, Route} from "react-router-dom";

import AppContext from './context';
import axios from 'axios';


function App() {

const [pizzasAll, setPizzasAll] = useState([]);
const [cartItems, setCartItems] = useState([]);

useEffect(() => {
  const fetchData = async () => {
    try {
      const allCardsResponse = await axios.get('https://652d1c1df9afa8ef4b26cba1.mockapi.io/allCards');
      setPizzasAll(allCardsResponse.data);

      const cartResponse = await axios.get('https://652d1c1df9afa8ef4b26cba1.mockapi.io/cart');
      setCartItems(cartResponse.data);

    
    } catch (error) {
      console.error('Error fetching data:', error);
    
    }
  };

  fetchData();
}, []);


  const addToCart = (product) => {
    
    if (cartItems.find ((item) => Number(item.id) === Number(product.id))) {
      axios.delete(`https://652d1c1df9afa8ef4b26cba1.mockapi.io/cart/${product.id}`); 
      setCartItems((prev) =>prev.filter((item) => Number(item.id) !== Number(product.id))); 

    }else{
      axios.post('https://652d1c1df9afa8ef4b26cba1.mockapi.io/cart', product);
      setCartItems((prev) =>[...prev, product]);

    }
 
  };

  const deleteFromCart = async (id) => {
    try {
      await axios.delete(`https://652d1c1df9afa8ef4b26cba1.mockapi.io/cart/${id}`);
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    } catch (error) {
      console.error('Error deleting item from cart:', error);
      // Можно добавить обработку ошибок, например, показ сообщения об ошибке пользователю
    }
  };
 

  
  return (
    <AppContext.Provider value = {{pizzasAll,addToCart,cartItems,deleteFromCart}}>
      
      <div className="App">
 
            <Header/>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route  path='/cart' element={<Cart />} />
                  
            </Routes>

      </div>
   </AppContext.Provider>
  );
}

export default App;

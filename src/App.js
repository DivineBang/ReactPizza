import React from 'react'
import  Header from "./components/Header";
import  {Home} from "./pages/Home";
import  {Cart} from "./pages/Cart";


import {Routes, Route} from "react-router-dom";


function App() {


  return (
    
    <div className="App">

      <Header/>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route  path='/cart' element={<Cart />} />
             
      </Routes>
        

    </div>
  );
}

export default App;

import { useState } from "react";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";

const App = ()=>{
  
 
  
  
  return(
    <div>
      
    <h1>Plan with Love</h1>
    <Navbar/>
    <Filter/>
    <Cards/>

    
    </div>
  )
}

export default App;
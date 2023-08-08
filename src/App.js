import { useState } from "react";

import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { filterData, apiUrl } from "./data";

const App = ()=>{
  
 
  
  
  return(
    <div>
      
    <h1>Plan with Love</h1>
    <Navbar/>
    <Filter filterData = {filterData}/>
    <Cards/>

    
    </div>
  )
}

export default App;
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { filterData, apiUrl } from "./data";

const App = ()=>{
  
  const[courses, setCourses] = useState({});

  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        const data = await fetch(apiUrl);
        const json = await data.json();
        console.log(json.data);
        setCourses(json.data);
      }
      catch(error){
        alert("something went wrong!!")
        console.log("error aye hai ", error);
      }
    }
    fetchData();
  }, []);

  
  
  return(
    <div>
      
    <h1>Plan with Love</h1>
    <Navbar/>
    <Filter filterData = {filterData}/>
    <Cards courses={courses}/>

    
    </div>
  )
}

export default App;
import { useEffect, useState } from "react";
import Spinner from "./components/Spinner";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { filterData, apiUrl } from "./data";

const App = ()=>{
  
  const[courses, setCourses] = useState({});
  const [loading , setLoading]= useState(true);
  const[category, setcategory] = useState(filterData[0].title)

  useEffect(()=>{
    const fetchData = async ()=>{
      setLoading(true)
      try{
        const data = await fetch(apiUrl);
        const json = await data.json();
        // console.log(json.data);
        setCourses(json.data);
      }
      catch(error){
        alert("something went wrong!!")
        console.log("error aye hai ", error);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  
  
  return(
    <div>
      
    <h1>Plan with Love</h1>

    <Navbar/>

    <Filter filterData = {filterData} category={category} setcategory={setcategory}/>

    {loading ? <Spinner/> : <Cards courses={courses}/>}
    
    <ToastContainer/>
    
    </div>
  )
}

export default App;
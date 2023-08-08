import { useState } from "react";

const App = ()=>{
  
  const[text, setText] = useState('')
 
  
  function changeHandler(e){
    setText(e.target.value);
    console.log(text);
  }
  return(
    <div>
      
    <h1>Plan with Love</h1>
    <input className="border-black bg-slate-400" type="text" onChange={changeHandler} />
    

    </div>
  )
}

export default App;
import React from 'react'

const Filter = ({filterData, category, setcategory}) => {
  function filterHandler(title){
    setcategory(title);
  }
  return (
    <div className='flex justify-center mt-5'>
      {filterData.map( 
        (data, i) =>{
            return(
                <button key={i} onClick={()=>filterHandler(data.title)} className='bg-gray-400 p-2 m-2 rounded shadow-lg'>{data.title}</button>
            )
        }
      )}
    </div>
  )
}

export default Filter

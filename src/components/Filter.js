import React from 'react'

const Filter = ({filterData}) => {
  return (
    <div>
      {filterData.map( 
        (data) =>{
            return(
                <button className='bg-gray-400 p-2 m-2 rounded shadow-lg'>{data.title}</button>
            )
        }
      )}
    </div>
  )
}

export default Filter

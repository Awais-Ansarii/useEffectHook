import React from 'react'

const Card = ({course}) => {
  const{id, title, description, image} = course
  // console.log(title)
  // console.log(description)
  return (
    <div className='w-[400px]  bg-gray-200 rounded shadow-xl p-2 m-5'>

      <div>

        <img className='h-[300px] w-[380px]' src={image.url} alt={image.alt}></img>

        <div>
          <button className='font-bold text-4xl'>♡</button>
        </div>

      </div>

      <div>
        <h1 className='font-bold text-2xl'>{title}</h1>
      </div>

      <div>
        <p>
          {description}
        </p>
      </div>

    </div>
  )
}

export default Card

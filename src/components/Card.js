import React from 'react'
import {FcLike} from 'react-icons/fc'
import {FcLikePlaceholder} from 'react-icons/fc'
import {toast} from 'react-toastify'

const Card = ({course, likedCoursess, setLikedCourses}) => {
  const{id, title, description, image } = course
  // console.log(title)
  // console.log(description)
  function clickHandler(){
    if(   likedCoursess.includes(id)  ){
      setLikedCourses( (prev)=> prev.filter( (cid)=> (cid !== id) ) )
      toast.warning("Like removed")
    }
    else{
      if(likedCoursess.length === 0){
        setLikedCourses([id])
      }
      else{

        setLikedCourses( (prev) => [...prev, id] );
      }
      toast.success("Liked successfully")
    }
  }
  return (
    <div className='w-[400px]  bg-gray-200 rounded shadow-xl p-2 m-5'>

      <div className='relative'>

        <img className='h-[300px] w-[380px]' src={image.url} alt={image.alt}></img>

        <div  className=' h-[40px] w-[40px] bg-white rounded-full flex justify-center items-center absolute bottom-2 right-2'>
          <button onClick={clickHandler}  className='font-bold  text-4xl'>

          { likedCoursess.includes(id) ?  <FcLike fontSize="1.75rem"/> : <FcLikePlaceholder fontSize="1.75rem"/> }
            
          </button>
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

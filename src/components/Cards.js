import React, { useState } from "react";
import Card from './Card'

const Cards = ({ courses, category }) => {

  const[likedCoursess, setLikedCourses] = useState([]);
  const getDATA = () => {
    if(category === "All"){
      let getAllCourses = [];
    Object.values(courses).forEach((courseCategory) => {
      courseCategory.forEach((course) => {
        getAllCourses.push(course);
      });
    });
    return getAllCourses;
    }
    else{
      return courses[category];
    }
  };

  // console.log(getDATA());
  return (
  <div className="flex flex-wrap justify-center mt-3 m-3 p-3">
  {getDATA().map( (course)=>{
   
    return(
      <Card 
        course ={course} key={course.id} 
        likedCoursess={likedCoursess}
        setLikedCourses={setLikedCourses}
        />
    )
  }

  )}
  </div>
  );
};

export default Cards;

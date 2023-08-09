import React from "react";
import Card from './Card'

const Cards = ({ courses }) => {
  const getDATA = () => {
    let getAllCourses = [];
    Object.values(courses).forEach((courseCategory) => {
      courseCategory.forEach((course) => {
        getAllCourses.push(course);
      });
    });
    return getAllCourses;
  };

  // console.log(getDATA());
  return (
  <div className="flex flex-wrap justify-center mt-3 m-3 p-3">
  {getDATA().map( (course)=>{
    {/* console.log(course) */}
    return(
      <Card course ={course} key={course.id}/>
    )
  }

  )}
  </div>
  );
};

export default Cards;

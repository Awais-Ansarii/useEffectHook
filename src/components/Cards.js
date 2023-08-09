import React from "react";

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

  console.log(getDATA());
  return (<div>hi</div>);
};

export default Cards;

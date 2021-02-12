import React from "react";

const CategoryCard = ({ category, id }) => {
  return (
    <div>
      {console.log(category)}
      <h1>Name: {category}</h1>
      <p>Id: {id}</p>
    </div>
  );
};

export default CategoryCard;

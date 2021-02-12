import axios from "axios";
import React from "react";
import AddCategory from "./AddCategory";

const CategoryCard = ({ category, id }) => {
  const categoryUrl = "http://localhost:8080/category";

  let showAdd = false;
  let setShowAdd = false;
  let showEdit = false;
  let setShowEdit = false;

  const deleteCategory = async () => {
    axios.delete(categoryUrl + id).then((resp) => console.log(resp.data));
  };

  return (
    <div>
      {console.log(category)}
      <h1>Name: {category}</h1>
      <p>Id: {id}</p>
      <button onClick={(setShowAdd = !showAdd)}>Add Category</button>
      {showAdd ? <AddCategory boolAdd={true} id={id} /> : null}
      <button onClick={(setShowEdit = !showEdit)}>Edit Category</button>
      {showEdit ? <AddCategory boolAdd={false} id={id} /> : null}
      <button onClick={deleteCategory()}>Delete</button>
    </div>
  );
};

export default CategoryCard;

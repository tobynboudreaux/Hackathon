import axios from "axios";
import React from "react";
import AddCategory from "./AddCategory";

const CategoryCard = ({ category, id }) => {
  const categoryUrl = "http://localhost:8080/category";

  const [showAdd, setShowAdd] = false;
  const [showEdit, setShowEdit] = false;

  const deleteCategory = async () => {
    axios.delete(categoryUrl + id).then((resp) => console.log(resp.data));
  };

  return (
    <div>
      <h1>Name: {category.name}</h1>
      <p>Id: {category.id}</p>
      <button onClick={setShowAdd(!showAdd)}>Add Category</button>
      {showAdd ? <AddCategory boolAdd={true} id={id} /> : null}
      <button onClick={setShowEdit(!showEdit)}>Edit Category</button>
      {showEdit ? <AddCategory boolAdd={false} id={id} /> : null}
      <button onClick={deleteCategory()}>Delete</button>
    </div>
  );
};

export default CategoryCard;

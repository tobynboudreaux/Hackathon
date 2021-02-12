import React, { useEffect, useState } from "react";
import { TopNavBar } from "../landingPage/topNavBar";
import CategoryCard from "./CategoryCard";
import axios from "axios";

const CategoryContainer = () => {
  const categoryUrl = "http://localhost:8080/category";
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get(categoryUrl).then((resp) => {
      console.log(resp.data);
      setCategories(resp.data);
    });
  }, []);
  // const getCategories = async (e) => {
  //   const dummyData = [
  //     {
  //       id: 1,
  //       name: "Corsair PC Build",
  //     },
  //     {
  //       id: 2,
  //       name: "Razor PC Build",
  //     },
  //   ];
  //   try {
  //     axios.get(categoryUrl).then((resp) => {
  //       console.log(resp.data);
  //       return setCategories(resp.data);
  //     });
  //   } catch {
  //     setCategories(dummyData);
  //   }
  // };

  return (
    <div>
      <TopNavBar />
      {console.log(categories)}
      {categories.length > 0
        ? categories.map((cat, idx) => (
            <CategoryCard
              key={idx}
              category={cat.categoryName}
              id={cat.categoryId}
            />
          ))
        : null}
    </div>
  );
};

export default CategoryContainer;

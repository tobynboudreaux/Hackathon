import React, { useEffect, useState } from "react";
import { TopNavBar } from "../landingPage/topNavBar";
import CategoryCard from "./CategoryCard";
import axios from "axios";

const CategoryContainer = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = async (e) => {
    const dummyData = [
      {
        id: 1,
        name: "Corsair PC Build",
      },
      {
        id: 2,
        name: "Razor PC Build",
      },
    ];

    // setCategories(dummyData);
  };

  useEffect(() => {
    axios.get("http://localhost:8080/category").then((response) => {
      console.log(response.data);
      setCategories(response.data);
    });
  }, []);

  return (
    <div>
      <TopNavBar />
      {categories.map((cat, idx) => (
        <CategoryCard
          key={idx}
          category={cat.categoryName}
          id={cat.categoryId}
        />
      ))}
    </div>
  );
};

export default CategoryContainer;

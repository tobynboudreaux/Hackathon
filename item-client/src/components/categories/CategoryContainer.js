import React, { useEffect, useState } from "react";
import { TopNavBar } from "../landingPage/topNavBar";
import CategoryCard from "./CategoryCard";
import axios from "axios";

const CategoryContainer = () => {
  const [categories, setCategories] = useState([]);

  const categoryUrl = "http://localhost:8080/category";
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
    try {
      axios.get(categoryUrl).then((resp) => setCategories(resp.data));
    } catch {
      setCategories(dummyData);
    }
  };

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

import React, { useState, useEffect } from "react";
import "../styles/global.css";
export const Meals = () => {
  const [meals, setmeals] = useState({});
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setmeals(data));
  }, []);
  return (
    <div>
      <div className="mealsCategory">
        {meals?.categories &&
          meals.categories.map((meal) => (
            <div key={meal.idCategory}>
              <h3>{meal.strCategory}</h3>
              <img src={meal.strCategoryThumb} alt={meal.strCategory} />
              <p>{meal.strCategoryDescription}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

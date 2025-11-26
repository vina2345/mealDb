import React, { useState, useEffect } from "react";
import "../styles/global.css";
export const Catogeries = (catogeries) => {
    const [meals, setMeals] = useState([]);
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${catogeries.categories}`)
            .then((res) => res.json())
            .then((data) => setMeals(data.meals || []));
    }, [catogeries.categories]);
    return (
        <div>
      <h1>Catogeries</h1>
      <div className="catogeriesList">
        {meals?.map((meal) => (
          <div key={meal.idMeal} className="catogeriesItem">  
            <h3>{meal.strMeal}</h3>
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}       

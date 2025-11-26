import React, { useState, useEffect } from "react";
import "../styles/global.css";
export const Ingredients = (ingredient) => {
  const [ingredients, setingredients] = useState({});
  // console.log(ingredient.ingredient);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient.ingredient}`)
      .then((res) => res.json())
      .then((data) => setingredients(data));
  }, [ingredient.ingredient]);

  return (
    <div>
      <h1>Ingredients</h1>
      <div className="ingredientsList">
        {ingredients?.meals?.map((ingredient) => (
          <div key={ingredient.idMeal} className="ingredientItem">
            <h3>{ingredient.strMeal}</h3>
            <img
              src={ingredient.strMealThumb}
              alt={ingredient.strCategory}
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
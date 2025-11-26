import React, { useState, useEffect } from "react";
import "../styles/global.css";
import { Meals } from "./Meals";
import { Ingredients } from "./Ingredients";
import { Catogeries } from "./Catogeries";
import { Areas } from "./Areas";
const Recipes = () => {
  const [categories, setcategories] = useState({});
  const [areas, setareas] = useState({});
  const [ingredients, setingredients] = useState({});
  const [type, setType] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedArea, setSelectedArea] = useState("");
  const [selectedIngredient, setSelectedIngredient] = useState("");

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then((res) => res.json())
      .then((data) => setcategories(data));
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
      .then((res) => res.json())
      .then((data) => setareas(data));
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?i=list")
      .then((res) => res.json())
      .then((data) => setingredients(data));
  }, []);

  const getCategoryOptions = () => {
    return categories?.categories?.map((category) => (
      <option key={category.idCategory} value={category.strCategory}>
        {category.strCategory}
      </option>
    ));
  };

  const getAreaOptions = () => {
    return areas?.meals?.map((area) => (
      <option key={area.idArea} value={area.strArea}>
        {area.strArea}
      </option>
    ));
  };

  const getIngredientOptions = () => {
    return ingredients?.meals?.map((ingredient) => (

      <option key={ingredient.idIngredient} value={ingredient.strIngredient}>
        {ingredient.strIngredient}
      </option>
    ));
  }

  const onIngredientsButtonClick = (e) => {
    setType("ingredients");
    setSelectedIngredient(e.target.value);
  }
  const onCatogeriesButtonClick = (e) => {
    setType("catogeries");
    setSelectedCategory(e.target.value);
  }
  const onAreasButtonClick = (e) => {
    setType("areas");
    setSelectedArea(e.target.value);
  }
  const onMealsButtonClick = () => {
    setType("meals");
    
  }
  return (
    <div>
      <h2>MealDB</h2>
      <div className="buttonsSection">
        <button className="buttons" onClick={onMealsButtonClick}>All Meals</button>
        <label>Explore Meals By:</label>
        <label>Category</label>
        <select onChange={(e) => { onCatogeriesButtonClick(e); }
        }>
          <option>None</option>
          {getCategoryOptions()}
        </select>
        <label>Area</label>
        <select onChange={(e) => { onAreasButtonClick(e); }}>
          <option>None</option>
          {getAreaOptions()}
        </select>
        <label>Ingredients</label>
        <select onChange={(e) => { onIngredientsButtonClick(e); }}>
          <option>None</option>
          {getIngredientOptions()}
        </select>

      </div>

      <div>{type === "meals" && <Meals />}</div>
      <div>{type === "ingredients" && <Ingredients ingredient={selectedIngredient} />}</div>
      <div>{type === "catogeries" && <Catogeries />}</div>
      <div>{type === "areas" && <Areas />}</div>
    </div>
  );
};

export default Recipes;

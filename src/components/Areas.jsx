import React, { useState, useEffect } from "react";
import "../styles/global.css";
export const Areas = ({ area }) => {
  const [areas, setAreas] = useState([]);
  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
      .then((res) => res.json())
      .then((data) => setAreas(data.meals || []));
  }, [area]);

  return(
    <div>
      <h1>Areas</h1>
      <div className="areasList">
        {areas?.map((area) => (
          <div key={area.idMeal} className="areaItem">  
            <h3>{area.strMeal}</h3>
            <img
              src={area.strMealThumb}
              alt={area.strMeal}
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}           

    
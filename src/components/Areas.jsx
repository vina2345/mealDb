import React, { useState, useEffect } from "react";
import "../styles/global.css";
export const Areas = () => {
  const [aras, setareas] = useState({});
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
      .then((res) => res.json())
      .then((data) => setareas(data));
  }, []);
  return(
    <div>
      <div className="areasList">
        {aras?.meals &&
          aras.meals.map((area) => (
            <div key={area.idArea}>
              <h3>{area.strArea}</h3>
            </div>
          ))}
         </div>
    </div>
  );
}


  
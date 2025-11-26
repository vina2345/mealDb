import React, { useState, useEffect } from "react";
import "../styles/global.css";
export const Catogeries = () => {
    const [catogeries, setcatogeries] = useState({});
    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
            .then((res) => res.json())
            .then((data) => setcatogeries(data));
    }, []);
    return (
        <div>
            <div className="catogeriesList">
                {catogeries?.meals &&
                    catogeries.meals.map((catogery) => (
                        <div key={catogery.idCategory}>
                            <option>{catogery.strCategory}</option>
                        </div>
                    ))}
            </div>
        </div>
    );
}


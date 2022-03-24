import React, { useEffect, useState } from "react";
import MealCart from "../Cart/MealCart";
import Meal from "./Meal";

const AllMeal = () => {
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=a")
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-9  my-3">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {meals.map((meal) => (
              <Meal key={meal.idMeal} meal={meal} />
            ))}
          </div>
        </div>
        <div className="col-lg-3">
          <MealCart />
        </div>
      </div>
    </div>
  );
};

export default AllMeal;

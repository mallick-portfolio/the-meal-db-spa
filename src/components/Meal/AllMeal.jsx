import React, { useEffect, useState } from "react";
import {
  addToLocalStorate,
  getLocalStorage,
} from "../../utilities/localstorage";
import MealCart from "../Cart/MealCart";
import Meal from "./Meal";

const AllMeal = ({ searchValue }) => {
  const [meals, setMeals] = useState([]);
  const [cartMeals, setCartMeals] = useState([]);
  const cartMeal = (meal) => {
    // addToLocalStorate(meal.idMeal);
    addToLocalStorate(meal.idMeal);
    const checkMeal = cartMeals.find((m) => m.idMeal === meal.idMeal);
    if (checkMeal !== undefined) {
      alert("your selected item is already exists");
      return;
    }
    setCartMeals([...cartMeals, meal]);
  };

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=a")
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, []);

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.meals.length > 0) {
          setMeals(data.meals);
        }
      });
  }, [searchValue]);

  useEffect(() => {
    const storageMeals = getLocalStorage();
    if (!storageMeals) {
      return;
    }
    const storageCartMeals = [];
    for (const meal of storageMeals) {
      const findMeals = meals.find((m) => m.idMeal === meal);
      if (findMeals) {
        storageCartMeals.push(findMeals);
      }
    }
    setCartMeals(storageCartMeals);
  }, [meals]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-8  my-3">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {meals.map((meal) => (
              <Meal key={meal.idMeal} meal={meal} cartMeal={cartMeal} />
            ))}
          </div>
        </div>
        <div className="col-lg-4">
          <MealCart cartMeals={cartMeals} />
        </div>
      </div>
    </div>
  );
};

export default AllMeal;

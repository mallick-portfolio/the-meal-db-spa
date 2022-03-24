import React from "react";
import CartItem from "../CartItems/CartItem";
import "./MealCart.css";
const MealCart = ({ cartMeals }) => {
  return (
    <div className="mealCart sticky-md-top">
      <h4>Cart Item</h4>
      {cartMeals.length > 0 &&
        cartMeals.map((meal) => <CartItem key={meal.idMeal} meal={meal} />)}
    </div>
  );
};

export default MealCart;

import React from "react";
import "./CartItem.css";
const CartItem = ({ meal }) => {
  const { strMealThumb, strMeal, strCategory } = meal;
  return (
    <div className="cartMeal">
      <img src={strMealThumb} alt="" />
      <div>
        <h6>Meal Name</h6>
        <p>{strMeal}</p>
      </div>
      <p>{strCategory}</p>
    </div>
  );
};

export default CartItem;

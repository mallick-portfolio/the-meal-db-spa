import React from "react";
import "./CartItem.css";
const CartItem = ({ meal }) => {
  const { strMealThumb, strMeal, strCategory } = meal;
  return (
    <div className="cartMeal">
      <img src={strMealThumb} alt="" />
      <div>
        <span className="cartCommon">Meal Name</span>
        <p>{strMeal}</p>
      </div>
      <div>
        <span className="cartCommon">Category</span>
        <p>{strCategory}</p>
      </div>
    </div>
  );
};

export default CartItem;

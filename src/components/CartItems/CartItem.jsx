import React from "react";
import "./CartItem.css";

const CartItem = ({ meal, deleteCartId }) => {
  const { strMealThumb, strMeal, strCategory, idMeal } = meal;
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
      <button className="btn btn-danger btn-sm" onClick={() => deleteCartId(idMeal)}>
        Delete
      </button>
    </div>
  );
};

export default CartItem;

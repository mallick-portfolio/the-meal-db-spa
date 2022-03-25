import React from "react";
import CartItem from "../CartItems/CartItem";
import "./MealCart.css";
const MealCart = ({ cartMeals, deleteCartId }) => {
  return (
    <div className="mealCart sticky-md-top">
      <h4>Cart Item</h4>
      <div className="meals">
        {cartMeals.length > 0 &&
          cartMeals.map((meal) => (
            <CartItem
              key={meal.idMeal}
              meal={meal}
              deleteCartId={deleteCartId}
            />
          ))}
      </div>
      <div className="d-flex mt-4 justify-content-between align-items-center px-5">
        <button className="btn btn-primary">Check Out</button>
        <button className="btn btn-info">Buy Now</button>
      </div>
    </div>
  );
};

export default MealCart;

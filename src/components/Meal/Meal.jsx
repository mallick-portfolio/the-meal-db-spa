import React from "react";

const Meal = ({ meal }) => {
  const { strMealThumb, strMeal, strCategory, strInstructions } = meal;
  return (
    <div className="col">
      <div className="card h-100">
        <img src={strMealThumb} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{strMeal}</h5>
          <h5 className="card-title">Category: {strCategory}</h5>
          <p className="card-text">{strInstructions.slice(0, 50)}...</p>
        </div>
        <button className="btn btn-warning">Add To Cart</button>
      </div>
    </div>
  );
};

export default Meal;

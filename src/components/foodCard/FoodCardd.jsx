import React from 'react';

const FoodCardd = ({item}) => {
    const {_id,image,recipe,name,price}=item
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
        {/* <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div> */}
      </div>
    );
};

export default FoodCardd;
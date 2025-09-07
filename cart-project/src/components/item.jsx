import React from "react";
export default function Item(props) {
  return (
    <div className="item-card">
      <h4>{props.name}</h4>
      <p>Price : ${props.price}</p>
      <button>Add to cart</button>
    </div>
  );
}

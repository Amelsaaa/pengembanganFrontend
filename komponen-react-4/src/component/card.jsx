import React from "react";
const Card = (props) => {
  return (
    <div class="card">
      <p class="product">{props.product_name}</p>
      <p class="description">{props.prod_name}</p>
      <button class="button">Add to cart</button>
    </div>
  );
};

//Dibawah ini digunakan biar file ini siap di export ke tempat lain.
export default Card;

import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div>
      <h1>Products page</h1>
      <ul>
        <li>
          <Link to="products/a-car">A car</Link>
        </li>
        <li>
          <Link to="products/laptopasd">A laptop</Link>
        </li>
        <li>
          <Link to="products/asd">Your mum</Link>
        </li>
      </ul>
    </div>
  );
};

export default Products;

import React from "react";
import "./TopUpApp.css";

const TopUpApp = (props) => {
  const notifikasi = () => {
    alert(`Kamu telah berhasil membeli paket: ${props.product_desc}`);
  };

  return (
    <div className="product-card">
      <h2>{props.product_name}</h2>
      <h4>Jenis Paket</h4>
      <p>{props.product_desc}</p>
      <button className="buy-button" onClick={notifikasi}>
        Beli<i class="fa-solid fa-cart-plus"></i>
      </button>
    </div>
  );
};

export default TopUpApp;

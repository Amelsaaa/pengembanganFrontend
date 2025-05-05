import React from "react";
import "./TopUpApp.css";

const TopUpApp = (props) => {
  const notif = () => {
    alert(`Kamu telah membeli paket: ${props.product_desc}`);
  };

  return (
    <div className="product-card">
      <h4>Jenis Paket</h4>
      <p>{props.product_desc}</p>
      <button className="buy-button" onClick={notif}>
        Beli
      </button>
    </div>
  );
};

export default TopUpApp;

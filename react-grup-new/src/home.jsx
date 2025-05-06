import React from "react";
import "./home.css";
import { useState } from "react";
import Search from "./search";
import logokita from "./assets/img/logokita.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img
          src={logokita}
          alt="logo Ueno Streaming"
          width="60"
          style={{ borderRadius: "50px" }}
        />
        Ueno Streaming
      </div>
      <ul className="navbar-link">
        <li>
          <a href="#home">Beranda</a>
        </li>
        <li>
          <a href="#paket">Paket</a>
        </li>
        <li>
          <a href="#contact">Kontak</a>
        </li>
        <li>
          <input
            type="text"
            placeholder="Search"
            style={{ padding: "5px", borderRadius: "50px", marginLeft: "50px" }}
          />
          <button
            style={{
              marginLeft: "5px",
              padding: "5px 10px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            <i className="fa fa-search" aria-hidden="true"></i>
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

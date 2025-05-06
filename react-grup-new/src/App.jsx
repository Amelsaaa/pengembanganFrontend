import React from "react";
import Navbar from "./home";
import TopUpApp from "./topUpApp";
import "./app.css";
import Bayar from "./payment";

//Memasukkan gambar aplikasi
import youtube from "./assets/img/youtube.png";
import spotify from "./assets/img/spotify.png";
import wetv from "./assets/img/wetv.jpg";
import netflix from "./assets/img/netflix.png";
import viu from "./assets/img/viu.png";
import iqiyi from "./assets/img/iqiyi.png";
import vidio from "./assets/img/vidio.png";
import canva from "./assets/img/canva.jpg";

//Memasukkan gambar aplikasi pembayaran
import DANA from "./assets/img/DANA.png";
import OVO from "./assets/img/OVO.png";
import INDOMARET from "./assets/img/INDOMARET.png";

function App() {
  return (
    <div>
      <Navbar />
      <h1>Katalog Aplikasi</h1>
      <br />
      <div className="logo-card">
        <img
          src={spotify}
          className="logo-image"
          alt="logo aplikasi"
          width="100"
          height="auto"
          style={{ marginTop: "10px" }}
        />
        <h1>Spotify</h1>
        <div className="product-row">
          <TopUpApp product_desc="Paket 1 : Individu Rp54.990 / bulan" />
          <TopUpApp product_desc="Paket 2 : Family Rp86.900 / bulan" />
          <TopUpApp product_desc="Paket 3 : 2 orang Rp71.490 / bulan" />
        </div>
      </div>
      <br />
      <div className="logo-card">
        <img
          src={netflix}
          className="logo-image"
          alt="logo aplikasi"
          width="100"
          height="auto"
          style={{ marginTop: "10px" }}
        />
        <h1>Netflix</h1>
        <div className="product-row">
          <TopUpApp product_desc="Paket 1 : Ponsel Rp54.000 / bulan" />
          <TopUpApp product_desc=" Paket 2 : Dasar Rp65.000 / bulan" />
          <TopUpApp product_desc=" Paket 3 : Standart Rp120.000 / bulan" />
        </div>
      </div>
      <br />
      <div className="logo-card">
        <img
          src={youtube}
          className="logo-image"
          alt="logo aplikasi"
          width="100"
          height="auto"
          style={{ marginTop: "10px" }}
        />
        <h1>Youtube</h1>
        <div className="product-row">
          <TopUpApp product_desc="Paket 1 : FAMPLAN Rp12.000 / bulan" />
          <TopUpApp product_desc=" Paket 2 : Family Plan Rp18.000 / bulan" />
          <TopUpApp product_desc=" Paket 3 : INDPLAN Rp18.000 / bulan" />
        </div>
      </div>
      <br />
      <div className="logo-card">
        <img
          src={wetv}
          className="logo-image"
          alt="logo aplikasi"
          width="100"
          height="auto"
          style={{ marginTop: "10px" }}
        />
        <h1>WE TV</h1>
        <div className="product-row">
          <TopUpApp product_desc="Paket 1 : Sharing Rp15.000 / bulan" />
          <TopUpApp product_desc=" Paket 2 : Private Rp38.000 / bulan" />
          <TopUpApp product_desc=" Paket 3 : Semi Private Rp28.000 / bulan" />
        </div>
      </div>
      <br />
      <div className="logo-card">
        <img
          src={viu}
          className="logo-image"
          alt="logo aplikasi"
          width="100"
          height="auto"
          style={{ marginTop: "10px" }}
        />
        <h1>VIU</h1>
        <div className="product-row">
          <TopUpApp product_desc="Paket 1 : Private Rp10.000 / bulan" />
          <TopUpApp product_desc=" Paket 2 : AntiLimit Rp15.000 / bulan" />
          <TopUpApp product_desc=" Paket 3 : Sharing Plus Rp20.000 / bulan" />
        </div>
      </div>
      <br />
      <div className="logo-card">
        <img
          src={iqiyi}
          className="logo-image"
          alt="logo aplikasi"
          width="100"
          height="auto"
          style={{ marginTop: "10px" }}
        />
        <h1>IQIYI</h1>
        <div className="product-row">
          <TopUpApp product_desc="Paket 1 : Sharing Rp15.000 / bulan" />
          <TopUpApp product_desc=" Paket 2 : Private Rp40.000 / bulan" />
          <TopUpApp product_desc=" Paket 3 : VIP Premium Plus Rp69.000 / bulan" />
        </div>
      </div>
      <br />
      <div className="logo-card">
        <img
          src={vidio}
          className="logo-image"
          alt="logo aplikasi"
          width="100"
          height="auto"
          style={{ marginTop: "10px" }}
        />
        <h1>Vidio</h1>
        <div className="product-row">
          <TopUpApp product_desc="Paket 1 : Platinum Rp35.000 / bulan" />
          <TopUpApp product_desc=" Paket 2 : Private Rp40.000 / bulan" />
          <TopUpApp product_desc=" Paket 3 : Premier Rp299.000 / bulan" />
        </div>
      </div>
      <br />
      <div className="pembayaran">
        <h3>Saluran Pembayaran</h3>
        <hr />
        <br />
        <div className="bayar">
          <Bayar gambar={DANA} />
          <Bayar gambar={OVO} />
          <Bayar gambar={INDOMARET} />
        </div>
      </div>
      <br />
      <div className="call">
        <h4>Hubungi Kami</h4>
        <br />
        <div className="sosmed">
          <i style={{ marginRight: "15px" }} class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-x-twitter"></i>
        </div>
      </div>
    </div>
  );
}

export default App;

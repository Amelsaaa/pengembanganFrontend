import React from "react";
import Navbar from "./home";
import TopUpApp from "./TopUpApp";
import "./App.css";
import Bayar from "./payment";

//Logo Aplikasi
import canva from "./assets/img/canva.jpg";
import spotify from "./assets/img/spotify.png";
import iqiyi from "./assets/img/iqiyi.png";
import netflix from "./assets/img/netflix.png";
import vidio from "./assets/img/vidio.png";
import viu from "./assets/img/viu.png";
import wetv from "./assets/img/wetv.jpg";
import youtube from "./assets/img/youtube.png";

//Logo Pembayaran Aplikasi
import dana from "./assets/img/DANA.png";
import indomaret from "./assets/img/INDOMARET.png";
import ovo from "./assets/img/OVO.png";

function App() {
  return (
    <div>
      <Navbar />
      <h1>
        <strong>Katalog Produk</strong>
      </h1>
      <div className="logo-card">
        <div className="top-title">
          <img src={spotify} alt="logo-image" className="logo-aplikasi" />
          <h2>Spotify</h2>
        </div>
        <div className="product-row">
          <TopUpApp product_desc="Paket 1 : Kids Rp15.000 / bulan" />
          <TopUpApp product_desc="Paket 2 : Family Plan Rp20.000 / bulan" />
          <TopUpApp product_desc="Paket 3 : Indplan Rp30.000 / bulan" />
          <TopUpApp product_desc="Paket 4 : Individu Rp54.990 / bulan" />
          <TopUpApp product_desc="Paket 5 : Family Rp86.900 / bulan" />
        </div>
      </div>

      <br />

      <div className="logo-card">
        <div className="top-title">
          <img src={netflix} alt="logo-image" className="logo-aplikasi" />
          <h2>Netflix</h2>
        </div>
        <div className="product-row">
          <TopUpApp product_desc="Paket 1 : Sharing 1U Rp29.000 / bulan" />
          <TopUpApp product_desc="Paket 2 : Semi Private Rp36.000 / bulan" />
          <TopUpApp product_desc="Paket 3 : Ponsel Rp54.000 / bulan" />
          <TopUpApp product_desc="Paket 4 : Dasar Rp65.000 / bulan" />
          <TopUpApp product_desc="Paket 5 : Premium Rp186.000 / bulan" />
        </div>
      </div>
      <br />

      <div className="logo-card">
        <div className="top-title">
          <img src={canva} alt="logo-image" className="logo-aplikasi" />
          <h2>Canva</h2>
        </div>
        <div className="product-row">
          <TopUpApp product_desc="Paket 1 : Member Rp10.000 / bulan" />
          <TopUpApp product_desc="Paket 2 : Member Rp15.000 / 2 bulan" />
          <TopUpApp product_desc="Paket 3 : Member Rp20.000 / 3 bulan" />
          <TopUpApp product_desc="Paket 4 : Member Rp25.000 / 6 bulan" />
          <TopUpApp product_desc="Paket 5 : Member Rp30.000 / 12 bulan" />
        </div>
      </div>

      <br />

      <div className="logo-card">
        <div className="top-title">
          <img src={iqiyi} alt="logo-image" className="logo-aplikasi" />
          <h2>Iqiyi</h2>
        </div>
        <div className="product-row">
          <TopUpApp product_desc="Paket 1 : Sharing Rp10.000 / bulan" />
          <TopUpApp product_desc="Paket 2 : Sharing Rp15.000 / 2 bulan" />
          <TopUpApp product_desc="Paket 3 : Sharing Rp20.000 / 3 bulan" />
          <TopUpApp product_desc="Paket 4 : Sharing Rp25.000 / 3 bulan" />
          <TopUpApp product_desc="Paket 5 : Sharing Rp30.000 / 4 bulan" />
        </div>
      </div>

      <br />

      <div className="logo-card">
        <div className="top-title">
          <img src={vidio} alt="logo-image" className="logo-aplikasi" />
          <h2>Vidio</h2>
        </div>
        <div className="product-row">
          <TopUpApp product_desc="Paket 1 : Platinum Rp10.000 / hari" />
          <TopUpApp product_desc="Paket 2 : Platinum Rp25.000 / 7 hari" />
          <TopUpApp product_desc="Paket 3 : Platinum Rp39.000 / bulan" />
          <TopUpApp product_desc="Paket 4 : Premier Rp49.000 / bulan" />
          <TopUpApp product_desc="Paket 5 : Platinum + Premier Rp139.000 / bulan" />
        </div>
      </div>

      <br />

      <div className="logo-card">
        <div className="top-title">
          <img src={viu} alt="logo-image" className="logo-aplikasi" />
          <h2>Viu</h2>
        </div>
        <div className="product-row">
          <TopUpApp product_desc="Paket 1 : Sharing Rp10.000 / bulan" />
          <TopUpApp product_desc="Paket 2 : Sharing Rp15.000 / 2 bulan" />
          <TopUpApp product_desc="Paket 3 : Sharing Rp20.000 / 3 bulan" />
          <TopUpApp product_desc="Paket 4 : Premium Rp33.000 / bulan" />
          <TopUpApp product_desc="Paket 5 : Sharing Plus Rp20.000 / bulan" />
        </div>
      </div>

      <br />

      <div className="logo-card">
        <div className="top-title">
          <img src={wetv} alt="logo-image" className="logo-aplikasi" />
          <h2>WeTV</h2>
        </div>
        <div className="product-row">
          <TopUpApp product_desc="Paket 1 : Sharing Rp10.000 / bulan" />
          <TopUpApp product_desc="Paket 2 : Sharing Rp15.000 / 2 bulan" />
          <TopUpApp product_desc="Paket 3 : Sharing Rp20.000 / 3 bulan" />
          <TopUpApp product_desc="Paket 4 : Private Rp38.000 / bulan" />
          <TopUpApp product_desc="Paket 5 : Semi Private Rp40.000 / bulan" />
        </div>
      </div>

      <br />

      <div className="pembayaranDanCall">
        <div>
          <h3>
            <strong>Saluran Pembayaran</strong>
          </h3>
          <br />
          <div>
            <img src={dana} alt="dana" className="logo-item" />
            <img src={indomaret} alt="indomaret" className="logo-item" />
            <img src={ovo} alt="ovo" className="logo-item" />
          </div>
        </div>

        <div className="hubungi">
          <h4>
            <strong>Hubungi Kami</strong>
          </h4>
          <br />
          <div className="sosmed">
            <i
              style={{ marginRight: "20px" }}
              className="fa-brands fa-2x fa-instagram"
            ></i>
            <i
              style={{ marginRight: "20px" }}
              className="fa-brands fa-2x fa-x-twitter"
            ></i>
            <i class="fa-brands fa-2x fa-tiktok"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

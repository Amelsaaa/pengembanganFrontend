import React from "react";
import "./topUpApp.css";
import Keranjang from "./components/keranjang";

const TopUpApp = (props) => {
  return (
    <div className="kotak">
      <div className="img">
        <img src={props.logo} alt="logo aplikasi" width="200" />
      </div>
      <h2 className="judul">{props.appName}</h2>
      {/* tulisan toLocaleString itu untuk menyesuaikan daerah kita yaitu ('id-ID') => bahasa Indonesia - INDONESIA, jadi kek lokal gityu */}
      <p>
        Paket 1: {props.paket1_nama} = Rp.{" "}
        {props.paket1_harga.toLocaleString("id-ID")}{" "}
        <button className="buy"
          onClick={() =>
            props.onTopUp({
              nama: props.paket1_nama,
              harga: props.paket1_harga,
            })
          }
        >
          Beli
        </button>
      </p>
      <p>
        Paket 2: {props.paket2_nama} = Rp.{" "}
        {props.paket2_harga.toLocaleString("id-ID")}{" "}
        <button className="buy"
          onClick={() =>
            props.onTopUp({
              nama: props.paket2_nama,
              harga: props.paket2_harga,
            })
          }
        >
          Beli
        </button>
      </p>
      <p>
        Paket 3: {props.paket3_nama} = Rp.{" "}
        {props.paket3_harga.toLocaleString("id-ID")}{" "}
        <button className="buy"
          onClick={() =>
            props.onTopUp({
              nama: props.paket3_nama,
              harga: props.paket3_harga,
            })
          }
        >
          Beli
        </button>
      </p>
    </div>
  );
};

export default TopUpApp;

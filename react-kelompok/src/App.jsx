import React from "react";
import Navbar from "./home";
import "./App.css";
import TopUpApp from "./topUpApp";
import Keranjang from "./components/keranjang";

// Memasukkan gambar
import youtube from "./assets/img/youtube.png";
import spotify from "./assets/img/spotify.png";
import wetv from "./assets/img/wetv.jpg";
import netflix from "./assets/img/netflix.png";
import viu from "./assets/img/viu.png";
import iqiyi from "./assets/img/iqiyi.png";
import vidio from "./assets/img/vidio.png";
import canva from "./assets/img/canva.jpg";

// fungsi app
const App = () => {
  const handleTopUp = (paket) => {
    alert(`Kamu membeli paket: ${paket.nama}, harga: ${paket.harga}`);
  };

  return (
    <div>
      <Navbar />
      <h2>Katalog Aplikasi untuk Top Up</h2>
      <div className="aplikasi">
        <TopUpApp
          logo={spotify}
          appName="Spotify"
          paket1_nama="Individu"
          paket1_harga={54990}
          paket2_nama="Family"
          paket2_harga={102000}
          paket3_nama="Privat"
          paket3_harga={62000}
          onTopUp={handleTopUp}
        />
        <TopUpApp
          logo={youtube}
          appName="Youtube"
          paket1_nama="FAMPLAN (1 bulan)"
          paket1_harga={12000}
          paket2_nama="Family Plan (2 bulan)"
          paket2_harga={18000}
          paket3_nama="INDPLAN (1 bulan)"
          paket3_harga={18000}
          onTopUp={handleTopUp}
        />
        <TopUpApp
          logo={wetv}
          appName="WE TV"
          paket1_nama="Sharing (1 bulan)"
          paket1_harga={15000}
          paket2_nama="Private (1 bulan)"
          paket2_harga={38000}
          paket3_nama="SemiPrivate (1 bulan)"
          paket3_harga={28000}
          onTopUp={handleTopUp}
        />
        <TopUpApp
          logo={netflix}
          appName="Netflix"
          paket1_nama="Sharing 1P1U (7 hari)"
          paket1_harga={16000}
          paket2_nama="SemiPrivate (1 bulan)"
          paket2_harga={48000}
          paket3_nama="Private (1 bulan)"
          paket3_harga={180000}
          onTopUp={handleTopUp}
        />
        <TopUpApp
          logo={viu}
          appName="VIU"
          paket1_nama="Private (1 bulan)"
          paket1_harga={10000}
          paket2_nama="AntiLimit (1 bulan)"
          paket2_harga={15000}
          paket3_nama="Sharing Plus (1 bulan)"
          paket3_harga={20000}
          onTopUp={handleTopUp}
        />
        <TopUpApp
          logo={iqiyi}
          appName="IQIYI"
          paket1_nama="Sharing (1 bulan)"
          paket1_harga={15000}
          paket2_nama="Private (1 bulan)"
          paket2_harga={40000}
          paket3_nama="VIP Premium (1 bulan)"
          paket3_harga={69000}
          onTopUp={handleTopUp}
        />
        <TopUpApp
          logo={vidio}
          appName="Vidio"
          paket1_nama="Platinum (1 bulan)"
          paket1_harga={35000}
          paket2_nama="Private (1 bulan)"
          paket2_harga={35000}
          paket3_nama="Premier (1 tahun)"
          paket3_harga={299000}
          onTopUp={handleTopUp}
        />
      </div>
      <div className="bayar">
        <h2>Saluran Pembayaran</h2>
      </div>
    </div>
  );
};

export default App;

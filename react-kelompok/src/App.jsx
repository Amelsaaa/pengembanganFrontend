import React from "react";
import Navbar from "./home";
import "./App.css"
import topUpApp from "./topUpApp";
import TopUpApp from "./topUpApp";
import youtube from './assets/img/youtube.png';
import spotify from './assets/img/spotify.png';

const App = () => {
  return (
    <div>
      <Navbar />
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
        />
        <TopUpApp
          logo={youtube}
          appName="Youtube"
          paket1_nama="Individual (per bulan)"
          paket1_harga={69000}
          paket2_nama="Family (per bulan)"
          paket2_harga={139000}
          paket3_nama="YouTube Premium 1 Tahun (FULL GARANSI)"
          paket3_harga={50000}
        />
      </div>
    </div>
  );
};

export default App;

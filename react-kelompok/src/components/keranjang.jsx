import React from "react";
import TopUpApp from "../topUpApp";
import { useState } from "react";

const Keranjang = () => {
  const handleTopUp = (paket) => {
    alert(`Kamu membeli paket: ${paket.nama}, harga: Rp${paket.harga}`);
  };

  return (
    <div>
      <div>
        <TopUpApp
          logo={spotify}
          appName="Spotify"
          paket1_nama="Individu"
          paket1_harga={54990}
          paket2_nama="Family"
          paket2_harga={102000}
          paket3_nama="Privat"
          paket3_harga={62000}
          onTopUp={(paket) => handleTopUp(paket)}
        />
        <TopUpApp
          logo={youtube}
          appName="Youtube"
          paket1_nama="FAMPLAN (1 bulan)"
          paket1_harga={12000}
          paket2_nama="Family Plan (2 bulan)"
          paket2_harga={18000}
          paket3_nama="INDPLAN"
          paket3_harga={18000}
          onTopUp={(paket) => handleTopUp(paket)}
        />
        <TopUpApp
          logo={wetv}
          appName="WE TV"
          paket1_nama="Sharing (1 bulan)"
          paket1_harga={15000}
          paket2_nama="Private (1 bulan)"
          paket2_harga={38000}
          paket3_nama="SemiPrivate"
          paket3_harga={28000}
          onTopUp={(paket) => handleTopUp(paket)}
        />
        <TopUpApp
          logo={netflix}
          appName="Netflix"
          paket1_nama="Sharing 1P1U (7 hari)"
          paket1_harga={16000}
          paket2_nama="SemiPrivate (1 bulan)"
          paket2_harga={48000}
          paket3_nama="Private"
          paket3_harga={180000}
          onTopUp={(paket) => handleTopUp(paket)}
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
          onTopUp={(paket) => handleTopUp(paket)}
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
          onTopUp={(paket) => handleTopUp(paket)}
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
          onTopUp={(paket) => handleTopUp(paket)}
        />
      </div>
    </div>
  );
};

export default Keranjang;

import React from "react";
import MinisteriosTabs from "../components/MinisteriosTabs";
import ScrollToTop from "../components/ScrollToTop";
import TopBanner from "../components/TopBanner";

const Ministerios = () => {
  return (
    <main className="bg-white">
      <ScrollToTop />
      <TopBanner title="Ministérios" background="bg-[url(/igreja/igreja_completa_facebook.jpg)]" />
      <MinisteriosTabs />
    </main>
  );
};

export default Ministerios;

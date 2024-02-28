import React from "react";
import ScrollToTop from "../components/ScrollToTop";
import TopBanner from "../components/TopBanner";

import { Link, useLocation } from "react-router-dom";


const PagamentoPendente = () => {
  const location = useLocation();
  const token = new URLSearchParams(location.search).get('token');

  const dataInscricao = new Date().toLocaleDateString('pt-BR');; // Suponha que a data da inscrição está disponível aqui

  // Função para determinar o href com base na data da inscrição
  const getHrefFromDataInscricao = () => {
    const [dayToday, monthToday] = dataInscricao.split('/');

    if (monthToday <= 2) {
      return "https://pag.ae/7-ayfcYCM";
    } else if (monthToday == 3) {
      return "https://pag.ae/7-eNAkvVu";
    } else if (monthToday == 4 || (monthToday == 5 && dayToday <= 5)) {
      return "https://pag.ae/7-eQ24mnK";
    } else if (monthToday == 5 && dayToday > 5) {
      return "https://pag.ae/7-eQaC4pu";
    } else if (monthToday == 6) {
      return "https://pag.ae/7-eQee-w4";
    } else if (monthToday == 7) {
      return "https://pag.ae/7-eQiwqS2";
    } else if (monthToday == 8) {
      return "https://pag.ae/7-eQmNaX9";
    } else if (monthToday == 9) {
      return "https://pag.ae/7-eQphfen";
    } else if (monthToday == 10) {
      return "https://pag.ae/7-eQqAj64";
    } else if (monthToday == 11) {
      return "https://pag.ae/7-eQrZ1w9";
    }
  };
  return (
    <main className="bg-white">
      <ScrollToTop />
      <TopBanner title="Inscrição ENCIBAF" background="bg-[url(/igreja/igreja_completa_facebook.jpg)]" />
      <div className="mb-8 mt-10 text-center">
        <h2 className="mb-6 text-2xl font-bold">Que bom ter vocês fazendo parte do ENCIBAF 2024!</h2>
        <p className="mb-2 text-[15px] text-[#777]">Clique abaixo para seguir para o pagamento.</p>
        <div className="flex items-center justify-center">
            <a 
            href={getHrefFromDataInscricao()}
            target="_blank" 
            title="Pagar com PagSeguro"
            >
            <img 
                src="//assets.pagseguro.com.br/ps-integration-assets/botoes/pagamentos/205x30-pagar.gif" 
                alt="Pague com PagSeguro - é rápido, grátis e seguro!" 
            />
            </a>
        </div>
    </div>
    </main>
  );
};

export default PagamentoPendente;

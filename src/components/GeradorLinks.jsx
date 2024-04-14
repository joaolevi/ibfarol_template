import { data } from 'autoprefixer';
import React, { useState } from 'react';

function GeradorLinks({ docSnap }) {
  if(!docSnap) return <p>Carregando...</p>;

  const userData = docSnap.data();
  const [linksLote1] = useState({ //até dia 28 de fevereiro - 10 parcelas
    "1": "https://pag.ae/7-ayfcYCM",
    "2": "https://pag.ae/7-eFqH8sK",
    "3": "https://pag.ae/7-eFrbWup",
    "4": "https://pag.ae/7-eFrt6NK",
    "5": "https://pag.ae/7-eFrPqTK",
    "6": "https://pag.ae/7-eFseCnK",
    "7": "https://pag.ae/7-eFsxyr4",
    "8": "https://pag.ae/7-eFsThup",
    "9": "https://pag.ae/7-eFt7jm2",
    "10": "https://pag.ae/7-eFts3hK",
    });

  const [linksLote2Marco] = useState({ //a partir do dia 1 de março - 9 parcelas
    "1": "https://pag.ae/7-eNAkvVu",
    "2": "https://pag.ae/7-ePWMU4u",
    "3": "https://pag.ae/7-ePYy87K",
    "4": "https://pag.ae/7-ePZj_Kp",
    "5": "https://pag.ae/7-ePZQy2K",
    "6": "https://pag.ae/7-eP-szTQ",
    "7": "https://pag.ae/7-eP--9nK",
    "8": "https://pag.ae/7-eP_x4xK",
    "9": "https://pag.ae/7-eP__X64",
    });

  const [linksLote2AbrilMaio] = useState({ //até dia 5 de maio - 8 parcelas
    "1": "https://pag.ae/7-eQ24mnK",
    "2": "https://pag.ae/7-eQ2ChCK",
    "3": "https://pag.ae/7-eQ371up",
    "4": "https://pag.ae/7-eQ4aMHK",
    "5": "https://pag.ae/7-eQ7AasK",
    "6": "https://pag.ae/7-eQ85mQn",
    "7": "https://pag.ae/7-eQ8GXun",
    "8": "https://pag.ae/7-eQ9b-ep",
    });

  const [linksLote3Maio] = useState({ // a partir do dia 6 de maio - 7 parcelas
    "1": "https://pag.ae/7-eQaC4pu",
    "2": "https://pag.ae/7-eQbfEEp",
    "3": "https://pag.ae/7-eQbGdVn",
    "4": "https://pag.ae/7-eQc9xg4",
    "5": "https://pag.ae/7-eQcBiup",
    "6": "https://pag.ae/7-eQd1TX9",
    "7": "https://pag.ae/7-eQdvEg2",
  });

  const [linksLote3Junho] = useState({ // a partir de junho - 6 parcelas
    "1": "https://pag.ae/7-eQee-w4",
    "2": "https://pag.ae/7-eQeHF64",
    "3": "https://pag.ae/7-eQfAtQn",
    "4": "https://pag.ae/7-eQg1MG2",
    "5": "https://pag.ae/7-eQh8Vw4",
    "6": "https://pag.ae/7-eQhFjb4",
  });

  const [linksLote3Julho] = useState({ // a partir de julho - 5 parcelas
    "1": "https://pag.ae/7-eQiwqS2",
    "2": "https://pag.ae/7-eQj3-TQ",
    "3": "https://pag.ae/7-eQjuQcH",
    "4": "https://pag.ae/7-eQjYqr4",
    "5": "https://pag.ae/7-eQkiG14",
  });

  const [linksLote3Agosto] = useState({ // a partir de agosto - 4 parcelas
    "1": "https://pag.ae/7-eQmNaX9",
    "2": "https://pag.ae/7-eQnbWNK",
    "3": "https://pag.ae/7-eQnAiX4",
    "4": "https://pag.ae/7-eQnZ-4n",
  });

  const [linksLote3Setembro] = useState({ // a partir de setembro - 3 parcelas
    "1": "https://pag.ae/7-eQphfen",
    "2": "https://pag.ae/7-eQpHBsQ",
    "3": "https://pag.ae/7-eQq4ChH",
  });

  const [linksLote3Outubro] = useState({ // a partir de outubro - 2 parcelas
    "1": "https://pag.ae/7-eQqAj64",
    "2": "https://pag.ae/7-eQrjKX4",
  });

  const [linksLote3Novembro] = useState({ // a partir de novembro - 1 parcela
    "1": "https://pag.ae/7-eQrZ1w9",
  });

  function verificarParcela(parcela) {
    switch (parcela) {
      case true:
        return true;
      case 'true':
        return true;
      case 'false':
        return false;
      case false:
        return false;
      default:
        return false;
    }
  }

  function showParcelas(userData, today, dataInscricao) {
    const [dayToday, monthToday] = today.split('/');
    const [dayInscricao, monthInscricao] = dataInscricao.split('/');
    const parcelas = [];

    if (monthInscricao == 1 || monthInscricao == 2) {
      var links = linksLote1;
    } else if (monthInscricao == 3) {
      var links = linksLote2Marco;
    } else if ((monthInscricao == 4) || (monthInscricao == 5 && dayInscricao <= 5)) {
      var links = linksLote2AbrilMaio;
    } else if (monthInscricao == 5 && dayInscricao > 5) {
      var links = linksLote3Maio;
    } else if (monthInscricao == 6) {
      var links = linksLote3Junho;
    } else if (monthInscricao == 7) {
      var links = linksLote3Julho;
    } else if (monthInscricao == 8) {
      var links = linksLote3Agosto;
    } else if (monthInscricao == 9) {
      var links = linksLote3Setembro;
    } else if (monthInscricao == 10) {
      var links = linksLote3Outubro;
    } else if (monthInscricao == 11) {
      var links = linksLote3Novembro;
    };

    let inicio = 1;
    let parcelaFinal = 10;
    let somadorMes = 1;
    if (userData.loteInscricao == 2) {
      if (monthInscricao == 3) {
        parcelaFinal = 9;
        somadorMes = 2;
      } else if ((monthInscricao == 4) || (monthInscricao == 5 && dayInscricao <= 5)) {
        parcelaFinal = 8;
        somadorMes = 3;
      }
    } else if (userData.loteInscricao == 3) {
      inicio = 1;
      if (monthInscricao == 5 && dayInscricao > 5) {
        parcelaFinal = 7;
        somadorMes = 4;
      } else if (monthInscricao == 6) {
        parcelaFinal = 6;
        somadorMes = 5;
      } else if (monthInscricao == 7) {
        parcelaFinal = 5;
        somadorMes = 6;
      } else if (monthInscricao == 8) {
        somadorMes = 7;
        parcelaFinal = 4;
      } else if (monthInscricao == 9) {
        somadorMes = 8;
        parcelaFinal = 3;
      } else if (monthInscricao == 10) {
        somadorMes = 9;
        parcelaFinal = 2;
      }
    }

    for (let monthIndex = inicio; monthIndex <= parcelaFinal; monthIndex++) {
      const parcelaKey = `parcela${monthIndex.toString().padStart(2, '0')}`;
      const parcelaTexto = `Parcela ${monthIndex.toString().padStart(2, '0')}`;
      // a segunda condição garante que o mês de janeiro seja considerado
      let mesToday = parseInt(monthToday);
      if (mesToday === (monthIndex) || ((parseInt(monthInscricao) == 1 || parseInt(monthInscricao) == 2) && monthIndex == 1)) {
        console.log('entrou; '+'MonthToday: '+parseInt(monthToday)+'; MonthIndex: '+monthIndex);
        if (verificarParcela(userData[parcelaKey])) {
          parcelas.push(
            <p key={parcelaKey} className="text-green-600">
              <strong>{parcelaTexto}:</strong> Paga
            </p>
          );
        } else {
          parcelas.push(
            <p key={parcelaKey} className="text-blue-600">
              <strong>{parcelaTexto}:</strong> <a href={links[monthIndex]} target="_blank" rel="noreferrer">Pagar</a>
            </p>
          );
        }
      } else if (mesToday > monthIndex) {
        parcelas.push(
          <p key={parcelaKey} className="text-red-600">
            <strong>{parcelaTexto}:</strong> Parcela vencida - <a className='text-blue-600' href={links[monthIndex]} target="_blank" rel="noreferrer">Pagar</a>
          </p>
        );
      } else {
        parcelas.push(
          <p key={parcelaKey} className="text-gray-600">
            <strong>{parcelaTexto}:</strong> Parcela ainda não disponível (Liberação no dia 01/{monthIndex+somadorMes}/2024)
          </p>
        );
      }
    }
  
    return (
      <div>
        {parcelas.length > 0 ? parcelas : <p className="text-gray-600">Nenhuma parcela disponível para este mês.</p>}
      </div>
    );
  }


  const getComponentFromSubscriptionDate = (userData) => {
    try {
        const dataInscricao = new Date(userData.dataInscricao.seconds * 1000).toLocaleDateString('pt-BR');
        const today = new Date().toLocaleDateString('pt-BR');
        return (
          <div className="border border-gray-300 rounded p-4 my-4 shadow-md overflow-auto bg-[#F6F7FB]">
            <h2 className="text-2xl font-bold mb-4">ENCIBAF Lote {userData.loteInscricao} - Status do pagamento</h2>
            <div className="ml-4">
              {showParcelas(userData, today, dataInscricao)}
            </div>
          </div>
        );
    } catch (error) {
      console.log(error);
      return "Erro ao gerar o link"
    }
};


  // const link = getLinkFromDate(userData.dataInscricao);

  return (
    <div>
      {getComponentFromSubscriptionDate(userData)}
    </div>
  );
}

export default GeradorLinks;

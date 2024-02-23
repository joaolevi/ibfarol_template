import React from 'react';
import { format } from 'date-fns';

const ListaPagamentos = ({ docSnap }) => {
    const userData = docSnap

  return (
    <div>
      <hr className="my-4 border-gray-300"/>
      {/* <h2 className="text-2xl font-bold mb-4 mt-4">Dados da Inscrição</h2> */}
      <div className="ml-4">
        <h2 className="text-xl font-bold mb-4">Em desenvolvimento...</h2>
        {/* <p><strong>Data de Inscrição:</strong> {format(new Date(userData.dataInscricao), 'dd/MM/yyyy HH:mm:ss')}</p>
        <p><strong>Lote:</strong> {userData.wifeBirthdate}</p>
        <p><strong>Parcela 01:</strong> {userData.wifeCpf}</p>
        <p><strong>Número do RG e Orgão Expedidor:</strong> {userData.wifeRg}</p>
        <p><strong>Profissão:</strong> {userData.wifeJob}</p>
        <p><strong>Telefone:</strong> {userData.wifePhone}</p>
        <p><strong>Email:</strong> {userData.wifeEmail}</p> */}
      </div>
    </div>
  );
};

export default ListaPagamentos;

import React from 'react';
import StatusPagamento from './StatusPagamento';

const ListaEncibaf = ({ docSnap }) => {
    const userData = docSnap

  return (
    <div className="border border-gray-300 rounded p-4 my-4 shadow-md overflow-auto bg-[#F6F7FB]">
        {/* <StatusPagamento inscricaoPaga={userData.inscricaoPaga} /> */}
      <h2 className="text-2xl font-bold mb-4">Dados da Inscrição</h2>
      <div className="ml-4">
        <h2 className="text-xl font-bold mb-4">Esposa</h2>
        <p><strong>Nome:</strong> {userData.wifeName}</p>
        <p><strong>Data:</strong> {userData.wifeBirthdate}</p>
        <p><strong>CPF:</strong> {userData.wifeCpf}</p>
        <p><strong>Número do RG e Orgão Expedidor:</strong> {userData.wifeRg}</p>
        <p><strong>Profissão:</strong> {userData.wifeJob}</p>
        <p><strong>Telefone:</strong> {userData.wifePhone}</p>
        <p><strong>Email:</strong> {userData.wifeEmail}</p>
        <p><strong>Membro da IBF?:</strong> {
          (() => {
            switch (userData.wifeIbf) {
              case 'true':
                return 'Sim';
              case 'false':
                return 'Não';
              // Adicione mais casos conforme necessário
              default:
                return 'Valor desconhecido';
            }
          })()
        }</p>
        <p><strong>Caso não seja, qual igreja?</strong> {userData.wifeChurch}</p>
        <p><strong>Tamanho da camisa:</strong> {userData.wifeSize}</p>
        {/* Marido */}
        <h2 className="text-xl font-bold mb-4 mt-5">Marido</h2>
        <p><strong>Nome:</strong> {userData.husbandName}</p>
        <p><strong>Data:</strong> {userData.husbandBirthdate}</p>
        <p><strong>CPF:</strong> {userData.husbandCpf}</p>
        <p><strong>Número do RG e Orgão Expedidor:</strong> {userData.husbandRg}</p>
        <p><strong>Profissão:</strong> {userData.husbandJob}</p>
        <p><strong>Telefone:</strong> {userData.husbandPhone}</p>
        <p><strong>Email:</strong> {userData.husbandEmail}</p>
        <p><strong>Membro da IBF?:</strong> {
          (() => {
            switch (userData.husbandIbf) {
              case 'true':
                return 'Sim';
              case 'false':
                return 'Não';
              // Adicione mais casos conforme necessário
              default:
                return 'Valor desconhecido';
            }
          })()
        }</p>
        <p><strong>Caso não seja, qual igreja?</strong> {userData.husbandChurch}</p>
        <p><strong>Tamanho da camisa:</strong> {userData.husbandSize}</p>
        {/* Casal */}
        <h2 className="text-xl font-bold mb-4 mt-5">Casal</h2>
        <p><strong>Nome dos filhos e idade:</strong> {userData.childInfo}</p>
        <p><strong>Contato de emergência:</strong> {userData.emergencyContact}</p>
        <p><strong>Tem condução própria?</strong> {
          (() => {
            switch (userData.hasVehicle) {
              case 'true':
                return 'Sim';
              case 'false':
                return 'Não';
              // Adicione mais casos conforme necessário
              default:
                return 'Valor desconhecido';
            }
          })()
        }</p>
        <p><strong>Se sim, pode dar carona?</strong> {
          (() => {
            switch (userData.ride) {
              case 'true':
                return 'Sim';
              case 'false':
                return 'Não';
              // Adicione mais casos conforme necessário
              default:
                return 'Valor desconhecido';
            }
          })()
        }</p>
        <p><strong>Tem interesse em ônibus comum para transporte?</strong> {
          (() => {
            switch (userData.busTransport) {
              case 'true':
                return 'Sim';
              case 'false':
                return 'Não';
              // Adicione mais casos conforme necessário
              default:
                return 'Valor desconhecido';
            }
          })()
        }</p>
        <p><strong>Observações</strong> {userData.observations}</p>
        {/* Pagamento */}
        <h2 className="text-xl font-bold mb-4 mt-5">Pagamento</h2>
        <p><strong>Forma de pagamento:</strong> {
          (() => {
            switch (userData.paymentType) {
              case '1':
                return 'PIX (à vista)';
              case '2':
                return 'PIX (em até 10x)';
              case '3':
                return 'Crédito (Parcela única)';
              case '4':
                return 'Débito (Parcela única)';
              case '5':
                return 'Boleto (em até 10x)';
              case '6':
                return 'Cheque (em até 10x)';
              // Adicione mais casos conforme necessário
              default:
                return 'Não informado';
            }
          })()
        }</p>
        <p><strong>Em quantas parcelas?</strong> {userData.parcels}</p>
        <p><strong>Dia do vencimento:</strong> {userData.paydate}</p>
        {/* Adicione mais campos conforme necessário */}
      </div>
    </div>
  );
};

export default ListaEncibaf;

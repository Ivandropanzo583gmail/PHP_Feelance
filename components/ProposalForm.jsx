import { useState } from 'react';

export default function ParentComponent() {
  const [hours, setHours] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [isEncerrado, setIsEncerrado] = useState(false); // Estado de envio encerrado

  // Função para aumentar as horas
  const increaseHours = () => {
    setHours(hours + 1);
  };

  // Função para diminuir as horas
  const decreaseHours = () => {
    if (hours > 1) {
      setHours(hours - 1);
    }
  };

  // Função para abrir o modal
  const openModal = () => {
    setShowModal(true);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setShowModal(false);
  };

  // Função para encerrar o envio
  const encerrarEnvio = () => {
    setIsEncerrado(true);  // Atualiza para "Encerrado"
    setShowModal(false);    // Fecha o modal
  };

  return (
    <div className="p-4 bg-gray-800 text-white rounded-md">
      {/* Estado de aceitação de propostas */}
      <div className='flex justify-between '>
        <div className="mt-10 ">
          {!isEncerrado ? (
            <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full ">Aceitando Proposta</span>
          ) : (
            <span className="bg-red-500 text-white px-3 py-1 rounded-full">Encerrado</span>
          )}
        </div>

        {/* Botão para abrir o modal */}
        {!isEncerrado && (
        <div className=''>
            <button
            className="bg-blue-800 text-white py-4 px-8 rounded-md"
            onClick={openModal}
            >
             ENVIAR UMA PROPOSTA
            </button>
            <div className='-mb-20 absolute right-3/3'>
              <span className=" px-5 py-1 ">Encerra em: 01:12:26:64</span>
            </div>
        </div>
      )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-gray-800 text-white p-6 rounded-lg w-96 relative">
            {/* Header com botão de fechar */}
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Envie sua proposta</h3>
              <button
                className="text-gray-400 hover:text-white"
                onClick={closeModal}  // Fechar o modal ao clicar no ícone
              >
                ✕
              </button>
            </div>

            <p className="text-gray-400 text-sm mb-4">
              Faça sua oferta em horas mensais que você pode contribuir com o projeto.
            </p>

            <form>
              <label className="block mb-2">E-mail</label>
              <input
                type="email"
                placeholder="Insira seu e-mail"
                className="w-full p-2 mb-4 bg-gray-700 text-white rounded-md focus:outline-none"
                required
              />

              <label className="block mb-2">Horas</label>
              <div className="flex items-center space-x-2 mb-4">
                <button
                  type="button"
                  onClick={decreaseHours}
                  className="bg-gray-700 p-2 rounded-md text-white"
                >
                  -
                </button>
                <span className="text-white">{hours < 10 ? `0${hours}` : hours}</span>
                <button
                  type="button"
                  onClick={increaseHours}
                  className="bg-gray-700 p-2 rounded-md text-white"
                >
                  +
                </button>
              </div>

              <div className="mb-4">
                <input type="checkbox" id="terms" className="mr-2" required/>
                <label htmlFor="terms" className="text-sm text-gray-400">
                  Concordo com os Termos e Políticas de privacidade.
                </label>
              </div>

              <button
                type="button"
                className="bg-red-500 text-white py-2 px-4 rounded-md"
                onClick={encerrarEnvio} // Fecha o modal e altera o estado para "Encerrado"
              >
                Encerrar Envio de Proposta
              </button>
            </form>

            <div className="text-gray-400 text-sm mt-4 flex items-center">
              <span>🔒</span>
              <p className="ml-2">Suas informações estão seguras</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

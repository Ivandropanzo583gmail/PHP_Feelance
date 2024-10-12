import { useState } from 'react';

export default function ProposalModal() {
  const [showModal, setShowModal] = useState(false);

  // Função para abrir o modal
  const openModal = () => {
    setShowModal(true);
  };

  // Função para fechar o modal
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="relative">
   

      {/* Modal */}
 
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-900 p-6 rounded-lg shadow-lg relative w-full max-w-sm">
            {/* Botão de fechar o modal */}
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white"
              onClick={closeModal}
            >
              X
            </button>

            {/* Cabeçalho do Modal */}
            <h2 className="text-2xl font-bold text-white mb-4">Envie sua proposta</h2>
            <p className="text-gray-400 mb-6">
              Faça sua oferta em horas mensais que você pode contribuir com o projeto.
            </p>

            {/* Formulário */}
            <form>
              <div className="mb-4">
                <label className="block text-gray-400 mb-2" htmlFor="email">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 text-black rounded-md"
                  placeholder="Insira seu e-mail"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-400 mb-2" htmlFor="hours">
                  Horas
                </label>
                <div className="flex items-center">
                  <button
                    type="button"
                    className="bg-gray-700 px-2 py-1 rounded-l-md"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    id="hours"
                    className="w-12 text-center py-2 text-black"
                    value="01"
                    readOnly
                  />
                  <button
                    type="button"
                    className="bg-gray-700 text-white px-2 py-1 rounded-r-md"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="mb-4">
                <label className="flex items-center text-gray-400">
                  <input type="checkbox" className="mr-2" />
                  Concordo com os Termos e Políticas de privacidade.
                </label>
              </div>

              {/* Botão de envio */}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md"
              >
                Enviar uma Proposta
              </button>
            </form>

            {/* Mensagem de segurança */}
            <p className="text-gray-400 text-sm mt-4 text-center">
              <span className="inline-block mr-1">🛡️</span>
              Suas informações estão seguras
            </p>
          </div>
        </div>
     
    </div>
  );
}

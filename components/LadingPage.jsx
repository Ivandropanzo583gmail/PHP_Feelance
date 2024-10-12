import ParentComponent from './ParentComponen';
import { FaNodeJs, FaReact, FaJs } from 'react-icons/fa';
import { SiNextdotjs, SiVite } from 'react-icons/si';
import { FaStar } from 'react-icons/fa';
import { FaTrophy, FaClock, FaArrowUp, FaArrowDown, FaMinus } from 'react-icons/fa';

import { useState } from 'react';

import PropostaState from './ProposalModal';

export default function LadingPage() {

    const [propostas, setPropostas] = useState([
        { nome: 'Rodrigo Gonçalves', horas: 30, status: 'top', tempo: '5h' },
        { nome: 'Diego Fernandes', horas: 22, status: 'Diego', tempo: '5h' },
        { nome: 'Jonas Milan', horas: 14, status: 'Jonas', tempo: '5h' },
        { nome: 'Lara Azevedo', horas: 12, status: 'up', tempo: '5h' },
        { nome: 'Bianca Moresco', horas: 11, status: 'down', tempo: '5h' },
        { nome: 'Isa Garcia', horas: 9, status: 'regular', tempo: '5h' },
        { nome: 'Paulo Clemente', horas: 9, status: 'regular', tempo: '5h' },
        { nome: 'Gustavo Franco', horas: 9, status: 'regular', tempo: '5h' },
        { nome: 'Guilherme Capitão', horas: 8, status: 'up', tempo: '5h' },
        { nome: 'Dalton Menezes', horas: 7, status: 'down', tempo: '5h' },
      ])


      const loadMore = () => {
        // Função para carregar mais propostas
        const novasPropostas = [...propostas]; // Simulando carregamento
        setPropostas(novasPropostas);
      };
    
      const getStatusIcon = (status) => {
        switch (status) {
            case 'top':
                return <div className='bg-yellow-200  rounded-full p-4'><FaTrophy className="text-yellow-500 " /></div>
            case "Diego":
                return <div className='bg-white  rounded-full p-4'><FaTrophy className="text-gray-400 " /></div>
            case "Jonas":
                return <div className='bg-yellow-100  rounded-full p-4'><FaTrophy className="text-yellow-800 " /></div>
            case 'up':
                return <div className='rounded-full p-4 bg-green-200'><FaArrowUp className="text-green-500" /></div>
            case 'down':
                return <div className='bg-red-200 rounded-full p-4'><FaArrowDown className="text-pink-500" /></div>
            default:
                return <div className='bg-gray-200 rounded-full p-4'><FaMinus className="text-gray-500" /></div>
        }
      };
    return (
        <>
            <div className='bg-gray-900  max-md:block flex justify-center items-center max-md:w-full max-md:-mt-20 '>
                <div className="bg-gray-800 min-h-screen text-white p-6 rounded-2xl w-5/12 mt-20 max-md:w-full ">
                
                   {/* <header className="flex justify-between items-center mt-4 ">
                    <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full">Aceitando Propostas</span>
                    <div className="block justify-center items-center ">
                        <ParentComponent />
                        <div className=" mt-4 ">
                            <span className="bg-gray-700 px-3 py-1 rounded">Encerra em: 01:12:26:64</span>
                        </div>
                    </div>
                </header>*/}
                <ParentComponent />
               

                
            
                
                    <div className=" ">
                        <div className=''>
                            <h1 className="text-3xl font-bold">Landing page para Pet Shop</h1>
                            
                        </div>
                        
                        <p className="mt-2 text-gray-400">Publicado há 5 horas</p>
                    
                    </div>


                    <div className="mt-8 space-y-5">
                        <div>
                            <p>Olá! Estamos em busca de um desenvolvedor talentoso para colaborar no desenvolvimento de uma landing page dedicada a promover os serviços do nosso Pet Shop. Somos uma empresa apaixonada por cuidar dos animais, oferecendo serviços de banho e tosa, consultas veterinárias, e uma loja completa com produtos de qualidade para pets.</p>
                        </div>

                        <div>
                            <p>Sobre o projeto:</p>
                        </div>

                        <div>
                            <li>Escopo: A landing page terá 10 seções, cobrindo desde a apresentação da empresa até os serviços oferecidos e uma área para agendamento online.</li>
                            <li>Design: O design completo já está pronto e finalizado no Figma, garantindo uma base sólida para o desenvolvimento.</li>
                            <li>Objetivo: Criar uma página rápida e responsiva que ajude a converter visitantes em clientes, destacando a confiança e carinho que temos pelos pets.</li>
                        </div>

                        <div>
                            <p>O que estamos buscando:</p>
                        </div>

                        <div>
                            <p>Um desenvolvedor competente e comprometido, com experiência em HTML, CSS, JavaScript e preferencialmente em React, que consiga transformar o design em uma landing page otimizada e funcional.
                            Alguém que tenha um olhar crítico para detalhes e que possa colaborar para garantir a melhor performance e usabilidade</p>
                        </div>

                        <div>
                            <p>Estamos animados para trabalhar com alguém que compartilhe nossa paixão por criar experiências de qualidade!</p>
                        </div>
                    </div>

                    <div className="mt-5">
                        <p className="text-gray-400">TECNOLOGIAS</p>


                        <div className="md:flex block  space-x-4 p-4 rounded-lg mr-2">
                            <div className="flex items-center space-x-2 bg-gray-800 p-2 rounded-full">
                                <FaNodeJs className="text-green-500 w-6 h-6" />
                                <span className="text-white text-sm">Node.js</span>
                            </div>
                        
                            <div className="flex items-center space-x-2 bg-gray-800 p-2 rounded-full">
                                <FaReact className="text-blue-500 w-6 h-6" />
                                <span className="text-white text-sm">React</span>
                            </div>

                            <div className="flex items-center space-x-2 bg-gray-800 p-2 rounded-full">
                                <FaJs className="text-yellow-400 w-6 h-6" />
                                <span className="text-white text-sm">JavaScript</span>
                            </div>

                            <div className="flex items-center space-x-2 bg-gray-800 p-2 rounded-full">
                                <SiVite className="text-yellow-400 w-6 h-6" />
                                <span className="text-white text-sm">Vite</span>
                            </div>

                            <div className="flex items-center space-x-2 bg-gray-800 p-2 rounded-full">
                                <SiNextdotjs className="text-gray-400 w-6 h-6" />
                                <span className="text-white text-sm">Next.js</span>
                            </div>
                        </div>
                    </div>

                    <div className='mt-2'>
                        <p className='text-gray-400'>PUBLICADO POR</p>

                        <div className="flex items-center  p-4 rounded-lg space-x-4 mt-4 ">
                    
                            <img
                                className="w-12 h-12 rounded-full "
                                src="./LadingPage/imagLand.png" 
                                alt="Mayk Brito"
                            />
                        
                        
                            <div>
                                <h2 className="text-white font-semibold">Mayk Brito</h2>
                                
                                {/* Estrelas */}
                                <div className="flex space-x-1">
                                {[...Array(5)].map((_, i) => (
                                    <FaStar key={i} className="text-yellow-400 " />
                                ))}
                                </div>
                            </div>
                        </div>
                    </div>


        

                </div>



            <div className="bg-gray-800 text-white p-4 rounded-lg w-96 -mt-32 max-md:mt-20 max-md:w-full md:ml-10 -mb-32">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-semibold">Propostas</h2>
                    <span className="text-gray-400">32</span>
                </div>
                <p className="text-sm text-gray-400 mb-4">Atualizado em tempo real</p>
                <ul className="space-y-4">
                    {propostas.map((proposta, index) => (
                    <li key={index} className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                        <div className="p-2 bg-gray-800 rounded-full">
                            {getStatusIcon(proposta.status)}
                        </div>
                        <div>
                            <p className="font-semibold">{proposta.nome}</p>
                            <p className="text-sm text-gray-400">Enviado há {proposta.tempo}</p>
                        </div>
                        </div>
                        <div className="flex items-center space-x-2">
                        <FaClock className="text-gray-400" />
                        <span className="text-sm font-semibold bg-gray-800 py-1 px-3 rounded-md">
                            {proposta.horas} HORAS
                        </span>
                        </div>
                    </li>
                    ))}
                </ul>
                <button
                    onClick={loadMore}
                    className="bg-gray-900 py-2 px-4 rounded-md mt-4 w-full"
                >
                    CARREGAR MAIS
                </button>
                </div>
            </div>

    </>
    );
  }
  
'use client'

import Image from 'next/image' // Se estiver usando Next.js
// Remova se for React puro
import Link from 'next/link'

export default function Cardapio() {
  const pizzas_tradicionais = [
    {
      nome: "Frango com Catupiry",
      descricao: "Frango desfiado com catupiry cremoso e orégano.",
      preco: "R$ 39,90",
      imagem: "/imagens/cardapio/frango.jpeg",
    },
    {
      nome: "Calabresa",
      descricao: "Calabresa fatiada, cebola roxa e queijo mussarela.",
      preco: "R$ 37,90",
      imagem: "/imagens/cardapio/calabresa1.jpeg",
    },
    {
      nome: "Marguerita",
      descricao: "Mussarela, tomate, manjericão e azeite de oliva.",
      preco: "R$ 35,90",
      imagem: "/imagens/cardapio/marguerita1.jpeg",
    },
    {
      nome: "Quatro Queijos",
      descricao: "Mussarela, provolone, parmesão e gorgonzola.",
      preco: "R$ 34,90",
      imagem: "/imagens/cardapio/4queijos1.jpeg",
    },
  ];
const pizzas_especiais = [
    {
      nome: "Pizza da Sally",
      descricao: "Queijo cremoso, carne levemente temperada e um toque especial de molho barbecue",
      preco: "R$ 45,90",
      imagem: "/imagens/cardapio/sally.jpeg",
    },
    {
      nome: "byroniana",
      descricao: "Muçarela especial, calabresa artesanal, tiras crocantes de bacon, toque leve de catupiry e finalizada com orégano fresco e azeite premium",
      preco: "R$ 45,90",
      imagem: "/imagens/cardapio/byroniana.jpeg",
    },
    {
      nome: "Pizza do Kody",
      descricao: "Queijo, fatias de salmão defumado, cream cheese, cebolinha e um toque de shoyu.",
      preco: "R$ 45,90",
      imagem: "/imagens/cardapio/japonesa2.jpeg",
    },
];
const pizzas_doces = [
    {
      nome: "Chororango",
      descricao: "A combinação do amargo sutil do chocolate com a doçura e acidez dos morangos cria um equilíbrio perfeito, tornando cada mordida uma experiência deliciosa.",
      preco: "R$ 38,90",
      imagem: "/imagens/cardapio/doce1.jpeg",
    },
    {
      nome: "Banana",
      descricao: "A combinação da banana macia com a crocância da massa e o toque doce do chocolate é simplesmente irresistível.",
      preco: "R$ 35,90",
      imagem: "/imagens/cardapio/doce3.jpeg",
    },
    {
      nome: "Choco branco",
      descricao: "Raspas de chocolate branco, merengues pequenos e até mesmo morangos banhados em chocolate branco, criando uma textura e um sabor suaves e luxuosos.",
      preco: "R$ 39,90",
      imagem: "/imagens/cardapio/doce2.jpeg",
    },
];

  return (
    <main className="bg-orange-50 text-orange-600 font-bold min-h-screen py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-12">Nosso Cardápio</h1>
      <h2 className="text-2xl font-bold text-center mb-12">Pizzas Tradicionais</h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
        {pizzas_tradicionais.map((pizza, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300 border border-orange-700"
          >
            <img
              src={pizza.imagem}
              alt={pizza.nome}
              className="w-full h-48 object-contain flex items-center justify-center"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-1">{pizza.nome}</h2>
              <p className="text-sm mb-2">{pizza.descricao}</p>
              <span className="text-lg font-semibold text-orange-600">{pizza.preco}</span>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-center mb-12 mt-12">Pizzas Especiais</h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
        {pizzas_especiais.map((pizza, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300 border border-orange-700"
          >
            <img
              src={pizza.imagem}
              alt={pizza.nome}
              className="w-full h-48 object-contain flex items-center justify-center"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-1">{pizza.nome}</h2>
              <p className="text-sm mb-2">{pizza.descricao}</p>
              <span className="text-lg font-semibold text-orange-600">{pizza.preco}</span>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-center mb-12 mt-12">Pizzas Doces</h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
        {pizzas_doces.map((pizza, index) => (
          <div
            key={index}
            className="bg-white text-black rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300 border border-orange-700"
          >
            <img
              src={pizza.imagem}
              alt={pizza.nome}
              className="w-full h-48 object-contain flex items-center justify-center"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-1">{pizza.nome}</h2>
              <p className="text-sm mb-2">{pizza.descricao}</p>
              <span className="text-lg font-semibold text-orange-600">{pizza.preco}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-16">
        <Link href="/" className="text-orange-500 underline hover:text-orange-300 transition">
          Voltar para Home
        </Link>
      </div>
    </main>
  );
}

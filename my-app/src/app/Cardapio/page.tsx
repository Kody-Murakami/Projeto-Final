'use client'

import Image from 'next/image' // Se estiver usando Next.js
import Link from 'next/link'
import { pizzas } from '../../Data/pizzas';
import { useCarrinho } from '../../contexts/CarrinhoContext'; // Importe o hook

// A função do componente não recebe mais props do carrinho
export default function Cardapio() {
  // Use o hook para acessar as funções do carrinho
  const { adicionarItem } = useCarrinho();
  
  return (
    <main className="bg-orange-50 text-orange-600 font-bold min-h-screen py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-12">Nosso Cardápio</h1>

      <h2 className="text-2xl font-bold text-center mb-12">Pizzas Tradicionais</h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
        {pizzas.slice(0, 4).map((produto) => (
          <button
            key={produto.id}
            onClick={() => adicionarItem(produto)} // Use a função do contexto
          >
            <div
              className="bg-white text-black rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300 border border-orange-700"
            >
              <img
                src={produto.imagem}
                alt={produto.nome}
                className="w-full h-48 object-contain flex items-center justify-center"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-1">{produto.nome}</h2>
                <p className="text-sm mb-2">{produto.descricao}</p>
                <span className="text-lg font-semibold text-orange-600">R$ {produto.preco}</span>
              </div>
            </div>
          </button>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-center mb-12 mt-12">Pizzas Especiais</h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto items-stretch">
        {pizzas.slice(4, 7).map((produto) => (
          <button
            key={produto.id}
            onClick={() => adicionarItem(produto)} // Use a função do contexto
          >
            <div
              className="bg-white text-black rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300 border border-orange-700 h-full"
            >
              <img
                src={produto.imagem}
                alt={produto.nome}
                className="w-full h-48 object-contain flex items-center justify-center"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-1">{produto.nome}</h2>
                <p className="text-sm mb-2">{produto.descricao}</p>
                <span className="text-lg font-semibold text-orange-600">R$ {produto.preco}</span>
              </div>
            </div>
          </button>
        ))}
      </div>

      <h2 className="text-2xl font-bold text-center mb-12 mt-12">Pizzas Doces</h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
        {pizzas.slice(7, 10).map((produto) => (
          <button
            key={produto.id}
            onClick={() => adicionarItem(produto)} // Use a função do contexto
          >
            <div
              className="bg-white text-black rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300 border border-orange-700"
            >
              <img
                src={produto.imagem}
                alt={produto.nome}
                className="w-full h-48 object-contain flex items-center justify-center"
              />
              <div className="p-4">
                <h2 className="text-xl font-bold mb-1">{produto.nome}</h2>
                <p className="text-sm mb-2">{produto.descricao}</p>
                <span className="text-lg font-semibold text-orange-600">R$ {produto.preco}</span>
              </div>
            </div>
          </button>
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


'use client'

import Image from 'next/image' // Se estiver usando Next.js
// Remova se for React puro
import Link from 'next/link'
import { pizzas } from '../../Data/pizzas';

export default function Cardapio() {

  return (
    <main className="bg-orange-50 text-orange-600 font-bold min-h-screen py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-12">Nosso Cardápio</h1>

      <h2 className="text-2xl font-bold text-center mb-12">Pizzas Tradicionais</h2>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
        {pizzas.slice(0,4).map((pizza, index) => (
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
        {pizzas.slice(4,7).map((pizza, index) => (
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
        {pizzas.slice(7,10).map((pizza, index) => (
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

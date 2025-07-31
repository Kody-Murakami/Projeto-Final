'use client';

import { pizzas } from "@/Data/pizzas";

export default function Carrinho() {
    return (
        <section className="bg-orange-50 py-12 px-6">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8 space-y-8">
                <h2 className="text-3xl font-bold text-orange-00 text-center">🛒 Seu Carrinho</h2>

                <button className="bg-orange-500 hover:bg-orange-700 text-white rounded-md px-4 py-1 text-sm">
                    Limpar Carrinho
                </button>

                <div className="flex flex-col md:flex-row items-center gap-6 border-b pb-6">
                    {pizzas.slice(0, 1).map((pizza, index) => (
                        <div
                        key={index}
                        className="bg-white text-black rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300 border border-orange-700"
                        >
                            <img src={pizza.imagem} alt={pizza.nome} className="w-28 h-28 rounded-lg object-cover" />

                            <div className="flex-1">
                                <h3 className="text-2xl font-semibold text-gray-800">{pizza.nome}</h3>
                                <p className="text-sm text-gray-600">{pizza.descricao}</p>
                                <p className="text-orange-500 font-bold mt-2">{pizza.preco}</p>
                                <p className="text-sm text-gray-700">Quantidade: </p>
                            </div>
                            
                            <div className="flex flex-col gap-2">
                                <button className="bg-red-400 hover:bg-red-500 text-white rounded-md px-4 py-1 text-sm">
                                    Remover
                                </button>
                                <button className="bg-green-400 hover:bg-green-500 text-white rounded-md px-4 py-1 text-sm">
                                    Adicionar +
                                </button>
                            </div>
                        </div>
                    ))}
                    <div className="text-right font-bold text-2xl text-orange-600 mt-6">
                        Total: R$ 39,90
                    </div>

                    <div className="flex justify-end">
                        <button className="bg-orange-500 hover:bg-orange-700 text-white rounded-md px-4 py-1 text-lg">
                        Finalizar Compra
                        </button>
                    </div>
                </div>  
            </div>
        </section>

    );
}
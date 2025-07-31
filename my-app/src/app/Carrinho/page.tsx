'use client';


import Link from 'next/link';
import { useCarrinho } from '../../contexts/CarrinhoContext';


export default function Carrinho() {
  const { carrinho, adicionarItem, removerItem, limparCarrinho } = useCarrinho();
  const total = carrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0);
  return (
    <main className='bg-orange-50 text-orange-600 font-bold min-h-screen py-12 px-4'>
      <section className="max-w-3xl mx-auto py-12">
        <h2 className="text-3xl font-bold mb-6 text-center text-orange-700">🛒Carrinho</h2>
        {carrinho.length === 0 ? (
          <div className='flex flex-col gap-5 items-center'>
            <p className="text-center text-gray-500">Seu carrinho está vazio.</p>
          </div>
        ) : (
          <>
            <ul className="divide-y divide-gray-300">
              {carrinho.map((item) => (
                <div className='bg-white'>
                  <li key={item.id} className="flex justify-between items-center py-2 gap-5 shadow-2xl">
                    <div className='flex flex-col px-5'>
                      <span>{item.nome} x{item.quantidade}</span>
                      <span>R$ {item.preco}</span>
                    </div>
                    <div className="px-5 py-5 grid gap-2">
                      <button
                        onClick={() => removerItem(item.id)}
                        className="bg-red-500 text-white px-2 py-1 rounded"
                      >
                        Remover
                      </button>
                      <button
                        onClick={() => adicionarItem(item)}
                        className="bg-green-500 text-white px-2 py-1 rounded"
                      >
                        Adicionar
                      </button>
                    </div>
                  </li>
                </div>
              ))}
            </ul>
            <p className="text-left mt-4 font-bold text-xl">Total: R$ {total.toFixed(2)}</p>
            <button
              onClick={limparCarrinho}
              className="mt-6 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 block mx-auto"
            >
              Limpar Carrinho
            </button>
          </>
        )}
      </section>
      <div className='flex justify-center'>
        <Link href='/Cardapio' className='text-orange-700 font-bold rounded-lg px-4 py-2 sm:mx-30'>Adicionar produtos
        </Link>
      </div>
    </main>
  );
}
'use client';

// Importe o hook useCarrinho que você criou
import { useCarrinho } from '../../contexts/CarrinhoContext'; // Ajuste o caminho conforme sua estrutura

// A função do componente não recebe mais props
export default function Carrinho() {
  // Use o hook para obter o estado e as funções do carrinho
  const { carrinho, adicionarItem, removerItem, limparCarrinho } = useCarrinho();

  // A lógica de cálculo do total permanece a mesma
  const total = carrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0);

  // O JSX (a estrutura HTML) permanece inalterado
  return (
    <section className="mt-16 px-4 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-center">Carrinho</h2>

      {carrinho.length === 0 ? (
        <p className="text-center text-gray-500">Seu carrinho está vazio.</p>
      ) : (
        <>
          <ul className="divide-y divide-gray-300">
            {carrinho.map((item) => (
              <li key={item.id} className="flex justify-between items-center py-2">
                <span>{item.nome} x{item.quantidade}</span>
                <div className="space-x-2">
                  <button
                    onClick={() => removerItem(item.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded"
                  >
                    -
                  </button>
                  <button
                    onClick={() => adicionarItem(item)}
                    className="bg-green-500 text-white px-2 py-1 rounded"
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <p className="text-right mt-4 font-bold">Total: R$ {total.toFixed(2)}</p>

          <button
            onClick={limparCarrinho}
            className="mt-6 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 block mx-auto"
          >
            Limpar Carrinho
          </button>
        </>
      )}
    </section>
  );
}
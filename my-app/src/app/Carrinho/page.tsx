'use client';
export default function Carrinho() {
    return (
        <section className="bg-orange-50 py-12 px-6">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-8 space-y-8">
                <h2 className="text-3xl font-bold text-orange-600 text-center">🛒 Seu Carrinho</h2>

                <button className="bg-orange-500 hover:bg-orange-700 text-white rounded-md px-4 py-1 text-lg">
                Limpar Carrinho
                </button>

                <div className="flex flex-col md:flex-row items-center gap-6 border-b pb-6">
                    <img src="./imagens/cardapio/sally.jpeg" alt="Pizza da Sally" className="w-28 h-28 rounded-lg object-cover" />

                    <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-gray-800">Pizza da Sally</h3>
                        <p className="text-sm text-gray-600">Queijo cremoso, carne temperada e molho barbecue</p>
                        <p className="text-orange-500 font-bold mt-2">R$ 39,90</p>
                        <p className="text-sm text-gray-700">Quantidade: 1</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <button className="bg-red-400 hover:bg-red-500 text-white rounded-md px-4 py-1 text-sm">
                            Remover
                        </button>
                        <button className="bg-green-400 hover:bg-green-500 text-white rounded-md px-4 py-1 text-sm">
                            Adicionar 
                        </button>
                    </div>
                </div>

                <div className="text-right font-bold text-2xl text-orange-600 mt-6">
                    Total: R$ 39,90
                </div>

                <div className="flex justify-end">
                    <button className="bg-orange-500 hover:bg-orange-700 text-white rounded-md px-4 py-1 text-lg">
                    Finalizar Compra
                    </button>
                </div>

            </div>
        </section>
    );
}

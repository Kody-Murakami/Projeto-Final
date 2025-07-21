import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-grow bg-orange-50">
      {/*secao Hero*/}
      <section className='relative h-[550px] w-full border border-slate-950 shadow-2xl drop-shadow-2xl'>
        <img
          src="./imagens/imagem_hero.jpeg"
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" /> {/* escurece a imagem */}
        <div className="relative z-10 flex flex-col items-end justify-center text-white h-full gap-6 container mx-auto font-bold px-30">
          <h1 className=' text-5xl font-bold text-start'>Pizzas deliciosas</h1>
          <p className='text-4\3xl text-center w-100'>Sabor que conquista no primeiro pedaço!
Massa leve, ingredientes frescos e o melhor forno da cidade. Experimente a verdadeira pizza artesanal!</p>
          <Link
            href='#contato'
            className='bg-orange-800 hover:bg-blue-500 transition-colors text-black font-bold rounded-lg px-4 py-2 mx-30'
          >
            Ver cardapio
          </Link>
        </div>
        <div />
      </section>

      <section className='flex my-8 justify-center py-12 gap-10'>
        <div className="flex flex-col gap-3">
          <div className="w-70 h-64 shadow-2xl overflow-hidden">
            <img src="./imagens/card1.png" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="w-70 h-64 shadow-2xl overflow-hidden">
            <img src="./imagens/card2.jpg" alt="" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="bg-white w-80 shadow-2xl overflow-hidden">
          <img src="./imagens/card3.jpeg" alt="" className="w-full h-auto" />
        </div>
      </section>

      {/* secao em destaque*/}
      <section className='py-12 bg-orange-50'>
        <div className=' flex flex-col items-center mx-50 gap-10 border rounded-lg py-10 bg-white mb-50'>
          <h2 className='text-orange-700 text-4xl font-serif'>Destaques</h2>
          <div className="grid grid-cols-3 gap-10">
            <div className="flex flex-col bg-white border border-orange-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full items-center py-3 duration-300 hover:scale-101 w-70">
              <img className="px-10" src="./imagens/pizza-destaque1.png" alt="" />
              <h2 className="text-black text-center font-bold text-xl mx-2">Pizza de Frango c/ Catupiry</h2>
              <p className="text-black py-3 px-2 font-semibold text-center">🔥 Explosão de sabor! Frango desfiado temperado no ponto, coberto com cremoso catupiry derretido — a combinação perfeita que conquista qualquer paladar!🍕</p>
              <button className="text-black text-center bg-orange-400  hover:bg-orange-500 transition-colors font-bold rounded-lg px-4 w-30 h-10">Adicionar</button>
            </div>
            <div className="flex flex-col bg-white border border-orange-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full items-center py-3 duration-300 hover:scale-101 w-70">
              <img className="px-10" src="./imagens/pizza-destaque1.png" alt="" />
              <h2 className="text-black text-center font-bold text-xl mx-2">Pizza de Frango c/ Catupiry</h2>
              <p className="text-black py-3 px-2 font-semibold text-center">🔥 Explosão de sabor! Frango desfiado temperado no ponto, coberto com cremoso catupiry derretido — a combinação perfeita que conquista qualquer paladar!🍕</p>
              <button className="text-black text-center bg-orange-400  hover:bg-orange-500 transition-colors font-bold rounded-lg px-4 w-30 h-10 ">Adicionar</button>
            </div>
            <div className="flex flex-col bg-white border border-orange-700 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow h-full items-center py-3 duration-300 hover:scale-101 w-70">
              <img className="px-10" src="./imagens/pizza-destaque1.png" alt="" />
              <h2 className="text-black text-center font-bold text-xl mx-2">Pizza de Frango c/ Catupiry</h2>
              <p className="text-black py-3 px-2 font-semibold text-center">🔥 Explosão de sabor! Frango desfiado temperado no ponto, coberto com cremoso catupiry derretido — a combinação perfeita que conquista qualquer paladar!🍕</p>
              <button className="text-black text-center bg-orange-400  hover:bg-orange-500 transition-colors font-bold rounded-lg px-4 w-30 h-10 ">Adicionar</button>
            </div>
          </div>
        </div>
      </section>

    </main>

  );
}

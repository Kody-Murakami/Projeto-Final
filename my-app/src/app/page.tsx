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
    </main>

  );
}

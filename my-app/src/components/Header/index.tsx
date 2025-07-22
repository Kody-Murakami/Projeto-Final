import Link from "next/link";


export default function Header(){
    return(
        <header className="w-full bg-black text-white py-4 border border-slate drop-shadow-lg">
            <div className="flex justify-between container mx-auto">
                    <Link className="text-xl font-bold hover:scale-105 transition-all" href="/">
                        <div className="flex">
                            <img className="rotate-20 bg-center size-7 translate-y-[-1px]" src="imagens/icons8-pizza-48.png" alt="" />
                            <h2>byron.Pizzas</h2>
                            <img className="rotate-200 bg-center size-7 mt-0.5" src="imagens/icons8-pizza-48.png" alt="" />
                        </div>
                    </Link>    
                
                <nav className="hidden lg:flex lg:gap-6">
                    <Link className="hover:text-orange-500 transition-colors" href="#">
                    Home
                    </Link>
                
                    <Link className="hover:text-orange-500 transition-colors" href="#contato">
                    Contato
                    </Link>

                    <Link className="hover:text-orange-500 transition-colors" href="/Sobre">
                    Sobre nos
                    </Link>

                    <Link className="hover:text-orange-500 transition-colors" href="/">
                    Carrinho
                    </Link>
                </nav>
            </div>
        </header>
    )
}
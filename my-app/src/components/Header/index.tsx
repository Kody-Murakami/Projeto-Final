'use client'

import Link from "next/link";
import Navbar from "../Navbar";



export default function Header(){
    return(
        
        <header className="w-full bg-black text-white py-4 border border-slate drop-shadow-lg">
            <div className="hidden lg:flex lg:justify-between container mx-auto">
                <Link className="text-xl font-bold hover:scale-105 transition-all" href="/">
                    <div className="flex">
                        <img className="rotate-20 bg-center size-7 translate-y-[-1px]" src="imagens/icons8-pizza-48.png" alt="" />
                        <h2>byron.Pizzas</h2>
                        <img className="rotate-200 bg-center size-7 mt-0.5" src="imagens/icons8-pizza-48.png" alt="" />
                    </div>
                </Link>    
                

                <nav className="flex gap-6 items-center">
                
                    <Link className="hidden lg:block hover:text-orange-500 transition-colors" href="#contato">
                    Contato
                    </Link>

                    <Link className="hidden lg:block hover:text-orange-500 transition-colors" href="/Sobre">
                    Sobre nós
                    </Link>

                    <Link className="hidden lg:block hover:scale-110 transition duration-300" href="/Carrinho">
                    <img className="size-8" src="imagens/logo-carrinho.png" alt="" />
                    </Link>

                    <Link className="hidden lg:block hover:scale-110 transition duration-300" href="/">
                    <img className="size-8" src="imagens/logo-user.png" alt="" />
                    </Link>
                </nav>
            </div>

            <div className="lg:hidden grid grid-cols-3">
                    <Link className="text-xl font-bold hover:scale-105 transition-all justify-self-center sm:col-start-2 ml-10 sm:ml-0" href="/">
                        <div className="flex">
                            <img className="rotate-20 bg-center size-7 translate-y-[-1px]" src="imagens/icons8-pizza-48.png" alt="" />
                            <h2>byron.Pizzas</h2>
                            <img className="rotate-200 bg-center size-7 mt-0.5" src="imagens/icons8-pizza-48.png" alt="" />
                        </div>
                    </Link> 

                    <div className="grid col-start-3 justify-self-end px-5">
                        <Navbar/>
                    </div>

            </div>

        </header>
    )
}
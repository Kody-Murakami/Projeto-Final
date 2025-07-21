import Link from "next/link";

export default function Header(){
    return(
        <header className="w-full bg-black text-white py-4 border border-slate drop-shadow-lg">
            <div className="flex justify-between container mx-auto">
                <Link className="text-xl font-bold hover:scale-105 transition-all" href="/">byron.PIZZAS</Link>
                <nav className="hidden lg:flex lg:gap-6">
                    <Link className="hover:text-orange-500 transition-colors" href="#">
                    Home
                    </Link>
                
                    <Link className="hover:text-orange-500 transition-colors" href="#contato">
                    Contato
                    </Link>

                    <Link className="hover:text-orange-500 transition-colors" href="/sobre">
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
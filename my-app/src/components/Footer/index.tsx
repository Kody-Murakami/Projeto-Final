export default function Footer() {
    return (
        <footer id="contato" className="bg-black text-white py-8 mt-2">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-3 gap-8">

                {/* Logo / Nome */}
                <div>
                    <div className="flex items-center">
                            <img className="rotate-20 size-7 translate-y-[-2px]" src="imagens/icons8-pizza-48.png" alt="" />
                            <h2 className="text-2xl">byron.Pizzas</h2>
                            <img className="rotate-200 size-7 mt-0.5" src="imagens/icons8-pizza-48.png" alt="" />
                    </div>
                    <p className="text-sm">Sabor que conquista no primeiro pedaço!
Massa leve, ingredientes frescos e o melhor forno da cidade. Experimente a verdadeira pizza artesanal!</p>
                </div>

                {/* Links rápidos */}
                <div className="flex flex-col items-center">
                    <h3 className="text-xl font-semibold mb-3">Links</h3>
                    <ul className="space-y-2 flex flex-col items-center">
                        <li><a href="#" className="hover:underline">Home</a></li>
                        <li><a href="#" className="hover:underline">Cardápio</a></li>
                        <li><a href="#" className="hover:underline">Sobre nós</a></li>
                        <div className="flex items-center ml-[-10]">
                            <li><a href="https://instagram.com/byron.solutions" className="hover:underline"><img className="w-15 h-15 overflow-hidden" src="./imagens/logo_instagram.png" alt=""/></a></li>
                            <li><a href="https://wa.me/19971662807" className="hover:underline"><img className="w-8 h-8" src="./imagens/logo_whatsapp.png" alt="" /></a></li>
                        </div>
                    </ul>
                </div>

                {/* Contato */}
                <div>
                    <h3 className="text-xl font-semibold mb-3">Contato</h3>
                    <p className="text-sm">Rua da Pizza, 123 - Centro</p>
                    <p className="text-sm">Telefone: (11) 91234-5678</p>
                </div>
            </div>

            {/* Linha final */}
            <div className="border-t border-slate-200 mt-8 pt-4 text-center text-sm">
                © 2025 Pizza Delícia. Todos os direitos reservados.
            </div>
        </footer>

    )
}
// src/components/Navbar.tsx
import Link from 'next/link'; // ou 'react-router-dom' se for React puro
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-white">
  
        {/* Botão hamburguer para mobile */}
        <button
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menu"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      
      {/* Menu de navegação mobile */}
      {isOpen && (
        <nav className="lg:hidden flex flex-col space-y-4 mt-4 px-4 bg-white text-black border rounded-lg py-2">
          <Link href="#contato" onClick={() => setIsOpen(false)}> - Contato</Link>
          <Link href="/Sobre" onClick={() => setIsOpen(false)}> - Sobre nós</Link>
          <Link href="/Sobre" onClick={() => setIsOpen(false)}> - Carrinho</Link>
          <Link href="/Sobre" onClick={() => setIsOpen(false)}> - Cadastre-se</Link>
        </nav>
      )}
    </header>
  );
}

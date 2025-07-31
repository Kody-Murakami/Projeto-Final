// src/contexts/CarrinhoContext.tsx

'use client';

import { createContext, useState, useContext, ReactNode } from 'react';
import { Produto } from '../Data/pizzas'; // Verifique o caminho se necessário

type ItemCarrinho = Produto & { quantidade: number };

interface CarrinhoContextType {
  carrinho: ItemCarrinho[];
  adicionarItem: (produto: Produto) => void;
  removerItem: (id: number) => void;
  limparCarrinho: () => void;
}

const CarrinhoContext = createContext<CarrinhoContextType | undefined>(undefined);

export function CarrinhoProvider({ children }: { children: ReactNode }) {
  const [carrinho, setCarrinho] = useState<ItemCarrinho[]>([]);

  const adicionarItem = (produto: Produto) => {
    // Adicionando console.log para inspecionar o estado antes
    console.log('--- ADICIONANDO ITEM ---');
    console.log('Estado do carrinho ANTES:', carrinho);
    console.log('Produto a ser adicionado:', produto);

    setCarrinho((prevCarrinho) => {
      const itemExistente = prevCarrinho.find((item) => item.id === produto.id);
      let novoCarrinho;

      if (itemExistente) {
        novoCarrinho = prevCarrinho.map((item) =>
          item.id === produto.id ? { ...item, quantidade: item.quantidade + 1 } : item
        );
      } else {
        novoCarrinho = [...prevCarrinho, { ...produto, quantidade: 1 }];
      }

      // Adicionando console.log para inspecionar o estado depois
      console.log('Estado do carrinho DEPOIS:', novoCarrinho);
      console.log('------------------------');

      return novoCarrinho;
    });
  };

  const removerItem = (id: number) => {
  setCarrinho((prevCarrinho) => {
    // 1. Encontra o item no carrinho
    const itemExistente = prevCarrinho.find((item) => item.id === id);

    // Se o item não existe, retorna o carrinho sem alteração
    if (!itemExistente) {
      return prevCarrinho;
    }

    // 2. Se a quantidade for maior que 1, apenas decrementa
    if (itemExistente.quantidade > 1) {
      return prevCarrinho.map((item) =>
        item.id === id ? { ...item, quantidade: item.quantidade - 1 } : item
      );
    }
    
    // 3. Se a quantidade for 1, remove o item completamente
    // A função filter retorna um novo array sem o item com o id correspondente.
    return prevCarrinho.filter((item) => item.id !== id);
  });
};

  const limparCarrinho = () => {
    setCarrinho([]);
  };

  return (
    <CarrinhoContext.Provider value={{ carrinho, adicionarItem, removerItem, limparCarrinho }}>
      {children}
    </CarrinhoContext.Provider>
  );
}

export function useCarrinho() {
  const context = useContext(CarrinhoContext);
  if (context === undefined) {
    throw new Error('useCarrinho deve ser usado dentro de um CarrinhoProvider');
  }
  return context;
}
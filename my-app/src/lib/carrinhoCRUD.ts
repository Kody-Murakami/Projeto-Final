import path from 'path';
import ConexaoBD from '../lib/conexaoDB';

const CAMINHO_BD = path.resolve(process.cwd(), 'src/db/carrinho-db.json');

export interface ItemCarrinho {
  id: number;
  usuarioId: number;
  produtoId: number;
  nomeProduto: string;
  preco: number;
  quantidade: number;
}

export async function adicionarItemCarrinho(novoItem: Omit<ItemCarrinho, 'id'>): Promise<ItemCarrinho> {
  const itens = await ConexaoBD.retornaBD(CAMINHO_BD);
  const novoId = itens.length > 0 ? itens[itens.length - 1].id + 1 : 1;
  const item: ItemCarrinho = { id: novoId, ...novoItem };
  itens.push(item);
  await ConexaoBD.armazenaBD(CAMINHO_BD, itens);
  return item;
}

export async function atualizarItemCarrinho(id: number, dadosAtualizados: Partial<Omit<ItemCarrinho, 'id'>>): Promise<ItemCarrinho | null> {
  const itens = await ConexaoBD.retornaBD(CAMINHO_BD);
  const index = itens.findIndex((i: ItemCarrinho) => i.id === id);
  if (index === -1) return null;
  itens[index] = { ...itens[index], ...dadosAtualizados };
  await ConexaoBD.armazenaBD(CAMINHO_BD, itens);
  return itens[index];
}

export async function deletarItemCarrinho(id: number): Promise<boolean> {
  const itens = await ConexaoBD.retornaBD(CAMINHO_BD);
  const novosItens = itens.filter((i: ItemCarrinho) => i.id !== id);
  if (novosItens.length === itens.length) return false;
  await ConexaoBD.armazenaBD(CAMINHO_BD, novosItens);
  return true;
}

export async function listarItensCarrinho(): Promise<ItemCarrinho[]> {
  return await ConexaoBD.retornaBD(CAMINHO_BD);
}

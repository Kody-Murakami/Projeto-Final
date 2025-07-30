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

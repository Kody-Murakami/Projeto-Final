import path from 'path';
import ConexaoBD from '../lib/conexaoDB';

const CAMINHO_BD = path.resolve(process.cwd(), 'src/db/usuarios-db.json');

export interface Usuario {
  id: number;
  nome: string;
  email: string;
  senha: string;
}

export async function criarUsuario(novoUsuario: Omit<Usuario, 'id'>): Promise<Usuario> {
  const usuarios = await ConexaoBD.retornaBD(CAMINHO_BD);
  const novoId = usuarios.length > 0 ? usuarios[usuarios.length - 1].id + 1 : 1;
  const usuario: Usuario = { id: novoId, ...novoUsuario };
  usuarios.push(usuario);
  await ConexaoBD.armazenaBD(CAMINHO_BD, usuarios);
  return usuario;
}

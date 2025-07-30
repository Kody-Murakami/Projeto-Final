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

export async function atualizarUsuario(id: number, dadosAtualizados: Partial<Omit<Usuario, 'id'>>): Promise<Usuario | null> {
  const usuarios = await ConexaoBD.retornaBD(CAMINHO_BD);
  const index = usuarios.findIndex((u: Usuario) => u.id === id);
  if (index === -1) return null;
  usuarios[index] = { ...usuarios[index], ...dadosAtualizados };
  await ConexaoBD.armazenaBD(CAMINHO_BD, usuarios);
  return usuarios[index];
}

export async function deletarUsuario(id: number): Promise<boolean> {
  const usuarios = await ConexaoBD.retornaBD(CAMINHO_BD);
  const novosUsuarios = usuarios.filter((u: Usuario) => u.id !== id);
  if (novosUsuarios.length === usuarios.length) return false;
  await ConexaoBD.armazenaBD(CAMINHO_BD, novosUsuarios);
  return true;
}

export async function listarUsuarios(): Promise<Usuario[]> {
  return await ConexaoBD.retornaBD(CAMINHO_BD);
}

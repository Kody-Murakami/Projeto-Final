"use server"; 

import { redirect } from "next/navigation";
import { criarUsuario } from "../../lib/usuariosCRUD";

export async function handleCadastro(formData: FormData) {

  const nome = formData.get("name") as string;
  const email = formData.get("email") as string;
  const senha = formData.get("password") as string;
  const confirmarSenha = formData.get("confirmPassword") as string;

  if (senha !== confirmarSenha) {
    throw new Error("As senhas não coincidem!");
  }

  try {
    await criarUsuario({ nome, email, senha });
  } catch (error) {
    throw new Error("Não foi possível criar o usuário. Tente novamente.");
  }

  redirect("/Login");
}
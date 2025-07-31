"use server";

import { redirect } from "next/navigation";
import { encontrarUsuarioPorEmail } from "../../lib/usuariosCRUD"; 

export async function handleLogin(formData: FormData) {
  const email = formData.get("email") as string;
  const senha = formData.get("password") as string;

  try {
    const usuario = await encontrarUsuarioPorEmail(email);

    if (!usuario) {
      throw new Error("Email não encontrado.");
    }

    if (usuario.senha !== senha) {
      throw new Error("Senha incorreta.");
    }

    console.log("Login bem-sucedido para:", usuario.email);

  } catch (error) {
    if (error instanceof Error) {
        console.error(error.message);
        throw error; 
    }
  }

  redirect("/");
}
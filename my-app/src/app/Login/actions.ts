"use server";
export interface LoginFormState {
  success: boolean;
  message: string;
}

import { redirect } from "next/navigation";
import { encontrarUsuarioPorEmail } from "../../lib/usuariosCRUD"; 

export async function handleLogin(
  prevState: LoginFormState, 
  formData: FormData
): Promise<LoginFormState> {
  const email = formData.get("email") as string;
  const senha = formData.get("password") as string;

  try {
    const usuario = await encontrarUsuarioPorEmail(email);

    if (!usuario) {
     return { success: false, message: "Email não encontrado." };
    }

    if (usuario.senha !== senha) {
     return { success: false, message: "Senha incorreta." };
    }

    console.log("Login bem-sucedido para:", usuario.email);

  } catch (error) {
    return { success: false, message: "Ocorreu um erro no servidor. Tente novamente." };
  }

  redirect("/");
}
"use client";

import Link from 'next/link';
import { useActionState } from 'react';
import { handleLogin } from './actions';

export default function LoginPage() {

  const initialState = { success: false, message: "" };
  const [state, formAction] = useActionState(handleLogin, initialState);

  return (
    <main className="flex min-h-screen items-center justify-center bg-orange-50 text-white">
      <div className="w-full max-w-md rounded-lg bg-black p-8 shadow-2xl">

        {state.message && !state.success && (
          <div className="mb-4 rounded-lg bg-red-500 p-3 text-center text-white">
            <p>{state.message}</p>
          </div>
        )}

        <h1 className="mb-6 text-center text-3xl font-bold">Login</h1>
        <form action={formAction}>
          <div className="mb-4">
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full rounded-lg border border-gray-600 bg-gray-700 p-3 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
              placeholder="seu@email.com"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-300">
              Senha
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full rounded-lg border border-gray-600 bg-gray-700 p-3 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-orange-500 px-5 py-3 text-center font-bold text-white transition-colors hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-800">
            Entrar
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-400">
          Não tem uma conta?{' '}
          <Link href="/Cadastro" className="font-medium text-orange-500 hover:underline">
            Cadastre-se
          </Link>
        </p>
      </div>
    </main>
  );
}
import Link from 'next/link';

export default function CadastroPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-900 text-white">
      <div className="w-full max-w-md rounded-lg bg-black p-8 shadow-2xl">
        <h1 className="mb-6 text-center text-3xl font-bold text-white">Cadastro</h1>
        <form>

            {/* Nome */}
          <div className="mb-4">
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-300">Nome</label>
            <input type="text" id="name" className="w-full rounded-lg border border-gray-600 bg-gray-700 p-3 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500" placeholder="Seu nome completo" required />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-300">Email</label>
            <input type="email" id="email" className="w-full rounded-lg border border-gray-600 bg-gray-700 p-3 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500" placeholder="seu@email.com" required />
          </div>

          {/* Senha */}
          <div className="mb-4">
            <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-300">Senha</label>
            <input type="password" id="password" className="w-full rounded-lg border border-gray-600 bg-gray-700 p-3 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500" placeholder="••••••••" required />
          </div>

          {/* Confirmar senha */}
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="mb-2 block text-sm font-medium text-gray-300">Confirmar Senha</label>
            <input type="password" id="confirmPassword" className="w-full rounded-lg border border-gray-600 bg-gray-700 p-3 text-white placeholder-gray-400 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500" placeholder="••••••••" required />
          </div>

          <button type="submit" className="w-full rounded-lg bg-orange-500 px-5 py-3 text-center font-bold text-white transition-colors hover:bg-orange-600 focus:outline-none focus:ring-4 focus:ring-orange-800">
            Criar Conta
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-gray-400">
          Já tem uma conta?{' '}
          <Link href="/login" className="font-medium text-orange-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}
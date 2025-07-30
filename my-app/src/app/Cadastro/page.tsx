import Link from 'next/link';

export default function CadastroPage() {
  return (
    <main>
      <div>
        <h1>Cadastro</h1>
        <form>

            {/* Nome */}
          <div>
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" placeholder="Seu nome completo" required />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="seu@email.com" required />
          </div>

          {/* Senha */}
          <div>
            <label htmlFor="password">Senha</label>
            <input type="password" id="password" placeholder="••••••••" required />
          </div>

          {/* Confirmar senha */}
          <div>
            <label htmlFor="confirmPassword">Confirmar Senha</label>
            <input type="password" id="confirmPassword" placeholder="••••••••" required />
          </div>
          
          <button type="submit">
            Criar Conta
          </button>
        </form>
        <p>
          Já tem uma conta?{' '}
          <Link href="/login">
            Faça Login
          </Link>
        </p>
      </div>
    </main>
  );
}
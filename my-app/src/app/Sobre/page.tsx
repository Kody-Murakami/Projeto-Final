
const chefe = [
    {
        name: 'Vinicius Kody Murakami',
        role: 'Chefe',
        image: 'imagens/membros/',
    }
];

const membros = [
    {
        name: 'Breno Paiola Zanarelli',
        role: 'Desenvolvedor',
        image: '/imagens/membros/breno.jpg',
    },
    {
        name: 'Joao Victor Assis',
        role: 'Desenvolvedor',
        image: '/imagens/membros/',
    },
    {
        name: 'Fabricio Pontes Ferreira',
        role: 'Desenvolvedo',
        image: '/imagens/membros',
    },

];

export default function SobrePage() {
    return (
        <main className="min-h-screen bg-orange-50 text-gray-800 px-6 py-10">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 space-y-4">
                <h1 className="text-3xl font-bold text-orange-600 text-center">Sobre Nós</h1>

                <p>
                    Bem-vindo à <strong>Byron Pizzas</strong>, onde tradição e sabor se encontram!
                    Desde nossa fundação, temos o compromisso de oferecer pizzas artesanais preparadas com ingredientes frescos e massas de fermentação natural.
                </p>

                <p>
                    Nossa paixão pela culinária italiana nos inspira a criar sabores únicos, combinando ingredientes de alta qualidade com um toque especial de carinho.
                    Trabalhamos todos os dias para levar até você uma experiência gastronômica inesquecível.
                </p>

                <p>
                    Seja em um jantar em família, encontro entre amigos ou uma noite especial, conte com a Byron Pizzas para deixar tudo ainda mais saboroso.
                </p>

                <p>
                    A Byron Pizzas nasceu em 2025, no coração de Itajubá (MG), com um sonho simples: levar pizzas artesanais de alta qualidade para a mesa das famílias locais.
                </p>
            </div>

            <div className="py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-orange-600">Conheça a Equipe</h2>
                </div>

                <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-10 px-6 mb-1">
                    {chefe.map((member, index) => (
                        <div key={index} className="sm:col-start-2 bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-32 h-32 object-cover rounded-full mb-4"
                            />
                            <h3 className="font-bold text-orange-600">{member.name}</h3>
                            <p className="text-gray-600 text-sm">{member.role}</p>

                        </div>
                    ))}
                </div>

                <div className="max-w-6xl mx-auto grid sm:grid-cols-3 gap-10 px-6 mt-10">
                    {membros.map((member, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center hover:shadow-xl transition-shadow duration-300">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-32 h-32 object-cover rounded-full mb-4"
                            />
                            <h3 className="font-bold text-orange-600">{member.name}</h3>
                            <p className="text-gray-600 text-sm">{member.role}</p>

                        </div>
                    ))}
                </div>
            </div>

        </main>
    );
}

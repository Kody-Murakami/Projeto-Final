export interface Produto {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
}
  


export const pizzas: Produto[] = [
  {
    id: 1,
    nome: "Frango com Catupiry",
    descricao: "Frango desfiado com catupiry cremoso e orégano.",
    preco: 39.90,
    imagem: "/imagens/cardapio/frango.jpeg",
  },
  {
    id: 2,
    nome: "Calabresa",
    descricao: "Calabresa fatiada, cebola roxa e queijo mussarela.",
    preco: 37.90,
    imagem: "/imagens/cardapio/calabresa1.jpeg",
  },
  {
    id: 3,
    nome: "Marguerita",
    descricao: "Mussarela, tomate, manjericão e azeite de oliva.",
    preco: 35.90,
    imagem: "/imagens/cardapio/marguerita1.jpeg",
  },
  {
    id: 4,
    nome: "Quatro Queijos",
    descricao: "Mussarela, provolone, parmesão e gorgonzola.",
    preco: 34.90,
    imagem: "/imagens/cardapio/4queijos1.jpeg",
  },
  {
    id: 5,
    nome: "Pizza da Sally",
    descricao:
      "Queijo cremoso, carne levemente temperada e um toque especial de molho barbecue",
    preco: 45.90,
    imagem: "/imagens/cardapio/sally.jpeg",
  },
  {
    id: 6,
    nome: "byroniana",
    descricao:
      "Muçarela especial, calabresa artesanal, tiras crocantes de bacon, toque leve de catupiry e finalizada com orégano fresco e azeite premium",
    preco: 45.90,
    imagem: "/imagens/cardapio/byroniana.jpeg",
  },
  {
    id: 7,
    nome: "Pizza do Kody",
    descricao:
      "Queijo, fatias de salmão defumado, cream cheese, cebolinha e um toque de shoyu.",
    preco: 45.90,
    imagem: "/imagens/cardapio/japonesa2.jpeg",
  },
  {
    id: 8,
    nome: "Chororango",
    descricao:
      "A combinação do amargo sutil do chocolate com a doçura e acidez dos morangos cria um equilíbrio perfeito, tornando cada mordida uma experiência deliciosa.",
    preco: 38.90,
    imagem: "/imagens/cardapio/doce1.jpeg",
  },
  {
    id: 9,
    nome: "Banana",
    descricao:
      "A combinação da banana macia com a crocância da massa e o toque doce do chocolate é simplesmente irresistível.",
    preco: 35.90,
    imagem: "/imagens/cardapio/doce3.jpeg",
  },
  {
    id: 10,
    nome: "Choco branco",
    descricao:
      "Raspas de chocolate branco, merengues pequenos e até mesmo morangos banhados em chocolate branco, criando uma textura e um sabor suaves e luxuosos.",
    preco: 39.9,
    imagem: "/imagens/cardapio/doce2.jpeg",
  },
];

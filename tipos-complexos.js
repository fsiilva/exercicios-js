// arrays e objetos

// o que é um array? - lista de coisas

const listaDeFrutas = ["uva", "morango", "laranja"];

const alturaDePessoas = [1.6, 1.75, 1.85, 1.92];

const estoqueDeFrutas = [
  ["maça", 10],
  ["morango", 3],
  ["manga", 20],
];

//como saber quantos itens meu array tem?

console.log(listaDeFrutas.length);
console.log(alturaDePessoas.length);
console.log(estoqueDeFrutas.length);

//acessando os itens do meu array:

console.log(listaDeFrutas);

const frutaFavorita = listaDeFrutas[2];
const segundaFrutaFavorita = listaDeFrutas[1];

console.log(frutaFavorita);
console.log(segundaFrutaFavorita);
console.log(alturaDePessoas[alturaDePessoas.length - 1]);

//adicionar um item no array

listaDeFrutas[3] = "banana";

console.log(listaDeFrutas);
console.log(listaDeFrutas[3]);

alturaDePessoas[alturaDePessoas.length] = 2.5;
alturaDePessoas[alturaDePessoas.length] = 4;

console.log(alturaDePessoas);

//trocando itens do array

listaDeFrutas[0] = "Pêra";

console.log(listaDeFrutas);

//criando outro array

const arrayMisturado = [
  listaDeFrutas[1],
  alturaDePessoas[1],
  estoqueDeFrutas[2][0],
  estoqueDeFrutas[2][1],
];

console.log(arrayMisturado);

// Introdução a objetos

const professor = {
  nome: "Rodrigo",
  sobrenome: "Medeiros",
  idade: 35,
  casado: false,
  profissao: "Programador",
  especializacao: "fullstack",
  equipamentos: ["macbook", "iphone", "ipad"],
  temCarro: true,
  carro: [
    {
      nome: "Fusca",
      marca: "VW",
    },
    {
      nome: "Civic",
      marca: "Honda",
    },
  ],
};

// como acessar os dados nos objetos?

console.log(professor.profissao);

console.log(professor.equipamentos[0]);

console.log(professor.carro[1].marca);

console.log(professor.carro[0].nome);

// verificando tipos

console.log(typeof professor.nome);

console.log(typeof listaDeFrutas);

//outra forma de acessar dados no objeto:

const lapiseira = {
  marca: "Compactor",
  temBorracha: true,
  cor: "azul",
  grafite: 0.7,
  modelo: "C07",
};

console.log(lapiseira["cor"]);
console.log(lapiseira["grafite"]);

//trocando o valor da propriedade

lapiseira.cor = "verde";

lapiseira["modelo"] = "COMP07";

console.log(lapiseira);

//deletando propriedades

delete lapiseira.marca;

console.log(lapiseira);

//adicionando propriedades

lapiseira.ponteiro = "cromado";
console.log(lapiseira);

const tenis = {
  titulo: "Tênis Masculino Nike Revolution 8",
  referencia: "995996",
  preco: 379.99,
  descricao:
    "A nova geração da linha Revolution oferece ainda mais conforto para suas corridas. O Revolution 8 conta com entressola em espuma que proporciona amortecimento suave e transições equilibradas. A tela superior superventilada mantém os pés frescos, enquanto os sulcos flexíveis no antepé aumentam a naturalidade dos movimentos.",
  tamanhos: [37, 38, 39, 40, 41, 42, 43, 44],
  nota: 4.5,
};

//operadores matemáticos

const soma = 200 + 500;

const subtracao = 300 - 50.5;

const result = 300 * 3;

const result2 = 200 / 1.5;

//mod - resto da divisao

const result3 = 5 % 3;

//operadores comparativos (sempre me retorna true ou false)

//maior que
const comp1 = 10 > 2; //true

console.log(comp1);

//menor que
const comp2 = 4 < 2; //false

//menor igual
const comp3 = 11 <= 20; //true

//maior igual
const comp4 = 30 >= 30; //true

//igual (== ou ===)

const comp5 = 20 == 20; //true

const comp6 = 30 == 40; //false

const comp7 = "50" == 50; //true - igual ( mas verifica apenas valor )

const comp8 = "50" === 50; //false - identico (verifica valor e tipo)

const comp9 = "cinquenta" == 50; //false

const comparandoString = "Rodrigo " === "Rodrigo";

const comp12 = true === true; //true

const compFruta = "abacaxi" === "morango"; //false

const compArr = arrayMisturado === listaDeFrutas;

console.log(compArr);

//diferente

const comp10 = 10 !== 20; //true
const comp11 = 10 != "10"; //false

//operadores logicos - tabela verdade (e , ou , inverso)

const comp13 = 10 > 2 && 5 > 10; //false
const comp14 = 10 > 5 || 2 > 0; //true

const comp15 = (2 > 5 || 0 > 10) && 7 < 14; //false

// inversao

const comp16 = !(10 > 2); //false

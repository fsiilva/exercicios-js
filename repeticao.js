// console.log("Rodrigo");
// console.log("Rodrigo");
// console.log("Rodrigo");
// console.log("Rodrigo");
// console.log("Rodrigo");

for (let i = 1; i < 5; i++) {
  console.log("Numero:", i);
}

//crie um função nomeada chamada apresentação que recebe um objeto pessoa com nome, sobrenome e idade, essa função printa no console uma breve apresentação da pessoa. Use o "for" para executar a função 7x

const pessoa = {
  nome: "Ana",
  sobrenome: "Medeiros",
  idade: 15,
};

function apresentacao(obj) {
  console.log(
    `Olá eu me chamo ${obj.nome} ${obj.sobrenome} e tenho ${obj.idade} anos.`
  );
}

for (let i = 0; i <= 6; i++) {
  apresentacao(pessoa);
}

//iterando arrays

const estoque = [
  {
    produto: "Sabão OMO",
    estoque: 10,
    preco: 4.5,
  },
  {
    produto: "Pão Panevita",
    estoque: 20,
    preco: 8.3,
  },
  {
    produto: "Biscoito Amori Chocolate",
    estoque: 40,
    preco: 3.2,
  },
];

// console.log(estoque[0]);
// console.log(estoque[1]);
// console.log(estoque[2]);

// for (let i = 0; i <= 2; i++) {
//   console.log(estoque[i]);
// }

for (let i = 0; i <= estoque.length; i++) {
  console.log(estoque[i]);
}

const nome = "Rodrigo";

console.log(nome);
console.log("Rodrigo");

console.log({
  produto: "Sabão OMO",
  estoque: 10,
  preco: 4.5,
});

const sabao = {
  produto: "Sabão OMO",
  estoque: 10,
  preco: 4.5,
};

console.log(sabao);
console.log(estoque[1].estoque);
console.log({
  produto: "Pão Panevita",
  estoque: 20,
  preco: 8.3,
});

console.log(20);

function meuNome() {
  const qualquerCoisa = 200;
  return {
    prop1: qualquerCoisa,
    prop2: "Rodrigo Medeiros",
  };
}

console.log(meuNome().prop1);
console.log(meuNome().prop2);

//Atividade desafio:

const tenis = [
  {
    marca: "Nike",
    modelo: "Air Max",
    cor: "preto",
    tamanho: [42, 43, 44],
    preco: 499.99,
    estoque: 10,
  },
  {
    marca: "Adidas",
    modelo: "Ultraboost",
    cor: "branco",
    tamanho: [40, 41, 42],
    preco: 599.99,
    estoque: 5,
  },
  {
    marca: "Puma",
    modelo: "RS-X",
    cor: "azul",
    tamanho: [39, 40, 41],
    preco: 399.99,
    estoque: 8,
  },
  {
    marca: "Reebok",
    modelo: "Classic",
    cor: "cinza",
    tamanho: [38, 39, 40],
    preco: 299.99,
    estoque: 12,
  },
];

// ocorreu uma mudança no estoque no qual o estoque de cada um dos tenis foi reduzido em 1
// e o preço do Puma entrou em promoção de 399.99 para 299.99
// e o preço do Reebok aumentou de 299.99 para 399.99
// o tamanho do Nike foi alterado para [42, 43, 44, 45]

console.log("antes:", tenis);

for (let i = 0; i < tenis.length; i++) {
  tenis[i].estoque = tenis[i].estoque - 1;

  if (tenis[i].marca === "Puma") {
    tenis[i].preco = 299.99;
  }

  if (tenis[i].marca === "Reebok") {
    tenis[i].preco = 399.99;
  }

  if (tenis[i].marca === "Nike") {
    tenis[i].tamanho[tenis[i].tamanho.length] = 45;
  }
}

console.log("depois:", tenis);

//funções com JS:

//assuntos:
// Funçoes nomeadas
// função anônimas
// arrow functions
// execução da função (chamando a função)
// parametros de função e argumentos
// escopo global e escopo de bloco

//funcao que soma dois numeros

//parametro da funcao

function somaDoisNumeros(n1, n2) {
  const resultado = n1 + n2;

  console.log(resultado);
}

somaDoisNumeros(30, 20);
somaDoisNumeros(100, 200);
somaDoisNumeros(5, 3);
somaDoisNumeros(2, 2);

console.log("--------------------------");

function multiplicaDoisNumero(n1, n2) {
  const resultado = n1 * n2;

  console.log(resultado);
}

multiplicaDoisNumero(3, 2);
multiplicaDoisNumero(10, 2);
multiplicaDoisNumero(33, 3);
multiplicaDoisNumero(29, 7);

console.log("--------------------------");

//funçoes nao nomeadas

const subtraiDoisNumero = function (n1, n2) {
  const resultado = n1 - n2;
  console.log(resultado);
};

subtraiDoisNumero(10, 3);
subtraiDoisNumero(20, 17);
subtraiDoisNumero(7, 2);

console.log("--------------------------");

const divideDoisNumeros = function (n1, n2) {
  const resultado = n1 / n2;

  console.log(resultado);
};

divideDoisNumeros(10, 2);
divideDoisNumeros(30, 2);
divideDoisNumeros(25, 2);

console.log("--------------------------");

//arrow functions

const restoDaDivisaoDoisNumeros = (n1, n2) => {
  let resultado = 355;

  console.log(resultado);
};

// restoDaDivisaoDoisNumeros(10, 2);

// console.log(resultado);

// restoDaDivisaoDoisNumeros(20, 2);
// restoDaDivisaoDoisNumeros(30, 3.5);
// restoDaDivisaoDoisNumeros(300, 45);

// Crie uma função nomeada que recebe como argumento um objeto pessoa e a função mostra no console uma apresentação dessa pessoa. Exemplo "Olá eu sou Tiago, tenho 20 anos e sou programador fullstack"

const individuo = {
  nome: "Alessandro",
  idade: 25,
  profissao: "Programador Backend",
};

function apresentacao(pessoa) {
  console.log(
    `Olá eu sou ${pessoa.nome}, tenho ${pessoa.idade} anos e sou ${pessoa.profissao}`
  );
}

apresentacao(individuo);

apresentacao({
  nome: "Mariana",
  idade: 33,
  profissao: "Dentista",
});

console.log("--------------------------");

// crie uma função que recebe um array de objetos. Esses objetos possui "nome" e "estoque" de carros no pátio da concessionária. Usando a função, mostre no console o nome dos carros e a quantidade de estoque deles.

// const carros = [
//   {
//     nome: "Corolla",
//     estoque: 4,
//   },
//   {
//     nome: "Civic",
//     estoque: 7,
//   },
//   {
//     nome: "Hr-v",
//     estoque: 3,
//   },
// ];

// function mostraEstoque(carrosLista) {
//   console.log(
//     `Nome do carro: ${carrosLista[0].nome} -  Estoque: ${carrosLista[0].estoque} `
//   );
//   console.log(
//     `Nome do carro: ${carrosLista[1].nome} -  Estoque: ${carrosLista[1].estoque} `
//   );
//   console.log(
//     `Nome do carro: ${carrosLista[2].nome} -  Estoque: ${carrosLista[2].estoque} `
//   );
// }

// mostraEstoque(carros);

// Uma concessionária deseja criar um pequeno sistema de controle de vendas usando JavaScript.
// O objetivo é registrar os carros disponíveis em estoque e permitir registrar cada venda feita por um cliente, atualizando automaticamente o número de unidades restantes.

// Crie o seguinte cenário:
// 	1.	Declare um array de objetos chamado carros, onde cada objeto representa um carro com as propriedades:
// 	•	nome: o modelo do carro (ex: "Corolla", "Civic", "Hr-v");
// 	•	estoque: a quantidade disponível em estoque.
// 	2.	Crie uma função nomeada chamada venda que receba três parâmetros:
// 	•	nomeCliente → nome do cliente que está comprando;
// 	•	index → posição do carro no array (ex: 0, 1, 2);
// 	•	quantidade → quantidade de carros vendidos.
// 	3.	Dentro da função:
// 	•	Subtraia a quantidade vendida do estoque do carro correspondente;
// 	•	Mostre no console a mensagem(usando template string):
// Cliente: Rodrigo - Venda: 3 Civic
// 4.	Após a execução da função, exiba no console o array atualizado, mostrando o novo estoque de cada carro.

const carros = [
  {
    nome: "Corolla",
    estoque: 4,
  },
  {
    nome: "Civic",
    estoque: 7,
  },
  {
    nome: "Hr-v",
    estoque: 3,
  },
];

function venda(nomeCliente, index, quantidade) {
  carros[index].estoque = carros[index].estoque - quantidade;

  console.log(
    `Cliente: ${nomeCliente} - Venda: ${quantidade} ${carros[index].nome}`
  );
}

venda("Ana Maria", 0, 1);
venda("Marcio", 0, 2);
venda("Rodrigo", 2, 2);

console.log(carros);

//tipo PRIMITIVOS de dados

//Javascript, Python -  nós não declaramos o tipo do dado - LINGUAGEM DE TIPAGEM DINÂMICA

// C, C#, Go, Java, Typescript... - nós precisamos declarar o tipo de dado - LINGUAGENS DE FORTE TIPAGEM

//  tipo texto (STRING)

// "Olá mundo!";
// "Rodrigo Medeiros";

// "Eu tenho 1.87 metros";
// "2.10";
// "699.99"//template string
// `Isso também é um texto`;

// // tipo numero
// 100;
// 355; // tipo int
// 1.45; //tipo float
// 1234567.56;

// // tipo booleano (verdadeiro e falso)
// true;
// false;

// // tipo nulo (null)
// null;

// //tipo indefinido (undefined)
// undefined;

// o que é uma variável?

let caraDaCamisaPreta = "Rodrigo";
let idade = 35;
let estaCasado = false;
let estaTrabalhando = true;
let altura = 1.85;

console.log("altura na linha 39:", altura);

let nomePrimeiroFilho = "Tales";
let telefone = 85997384756;
let possuiComputador = true;

const sobrenome = "Medeiros";
const possuiCarro = true;
const profissao = "Programador Full Stack";

//Qual a diferença de let e const - atribuindo novos valores para variáveis

// sobrenome = "Ana";
altura = 2.35;

console.log(altura, caraDaCamisaPreta, idade);

// nome das variáveis use CAMEL CASE
// use bons nomes, que definem bem o que é dado

console.log(caraDaCamisaPreta);

// falando um pouco mais de string - CONCATENAÇÃO

const primeiroNome = "Rodrigo";
const segundoNome = "Anderson";
const primeiroSobrenome = "Medeiros";
const segundoSobrenome = "Bezerra";

const meuNomeCompleto =
  primeiroNome + segundoNome + primeiroSobrenome + segundoSobrenome;

//quantos caracteres tem uma string?
console.log(primeiroNome.length);
console.log(segundoSobrenome.length);

//template string - string com crase

const nomeCompleto = `${primeiroNome} ${primeiroSobrenome}`;

console.log(nomeCompleto);

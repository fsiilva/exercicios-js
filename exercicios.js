// ### 1. Cadastro básico com verificação de `undefined` e `null`
// Crie um objeto `aluno` com as propriedades `nome (string)`, `idade (number)` e `email` (deixe `undefined`). Faça uma **função nomeada** `verificaCadastro(p)` que:
// - Mostra uma apresentação com template string.
// - Se `email` for `undefined` ou `null`, mostre `"E-mail pendente"`.
// - Caso contrário, mostre `"E-mail cadastrado"`.

const aluno = {
  nome: "Rodrigo",
  idade: 25,
  email: undefined,
};

function verificaCadastro(pessoa) {
  console.log(`Olá meu nome é ${pessoa.nome}, tenho ${pessoa.idade}`);
  if (pessoa.email === undefined || pessoa.email === null) {
    console.log("E-mail pendente");
  } else {
    console.log("E-mail cadastrado");
  }
}

verificaCadastro(aluno);

// ### 2. Montar nome completo e checar tamanhos
// Usando **concatenação** e **template string**, monte o nome completo a partir de 4 constantes (`primeiroNome`, `segundoNome`, `primeiroSobrenome`, `segundoSobrenome`).
// Depois, compare (com `if/else`) o `length` de `primeiroNome` e de `segundoNome` e mostre quem tem mais caracteres.

const primeiroNome = "Luis";
const segundoNome = "Alberto";
const primeiroSobrenome = "Silva";
const segundoSobrenome = "Costa";

console.log(
  primeiroNome +
    " " +
    segundoNome +
    " " +
    primeiroSobrenome +
    " " +
    segundoSobrenome
);

console.log(
  `${primeiroNome} ${segundoNome} ${primeiroSobrenome} ${segundoSobrenome}`
);

if (primeiroNome.length > segundoNome.length) {
  console.log(
    `O primeiro nome é maior: contém ${
      primeiroNome.length - segundoNome.length
    } letras a mais`
  );
} else {
  console.log(
    `O segundo nome é maior: contém ${
      segundoNome.length - primeiroNome.length
    } letras a mais`
  );
}

// ### 3. Controle simples de estoque com validação
// Dado um array `estoqueDeFrutas = [["maca", 5], ["manga", 2], ["uva", 7]]`, crie uma **função nomeada** `venderFruta(index, quantidade)` que:
// - Só subtraia do estoque se houver quantidade suficiente.
// - Use `if/else` para bloquear vendas inválidas.
// - Mostre a mensagem `Venda aprovada: X unidades de Y` ou `Estoque insuficiente`.

const estoqueDeFrutas = [
  ["maca", 5],
  ["manga", 2],
  ["uva", 7],
];

function venderFruta(index, quantidade) {
  if (quantidade <= 0) {
    console.log("Digite uma quantidade válida");
  } else if (estoqueDeFrutas[index][1] >= quantidade) {
    console.log(
      `Venda aprovada: ${quantidade} unidades de ${estoqueDeFrutas[index][0]}`
    );
  } else {
    console.log("Estoque insuficiente");
  }
}

venderFruta(0, 3);
venderFruta(1, 2);
venderFruta(2, 6);
venderFruta(0, 1);

// ### 4. Última altura do array com guarda contra array vazio
// Dado `alturas = [1.6, 1.75, 1.85]`, crie uma **função nomeada** `ultimaAltura(arr)` que:
// - Se o array estiver vazio, mostre `"Sem alturas"`.
// - Caso contrário, mostre a última altura usando `arr.length - 1`.
// - Se a última altura for maior que `1.8`, mostre `"Alto"`; senão, `"Padrão"`.

const alturas = [1.6, 1.75, 1.85];
const alturas2 = [];
const alturas3 = [1.65];

function ultimaAltura(arr) {
  if (arr.length === 0) {
    console.log("Sem alturas");
  } else {
    console.log(arr[arr.length - 1]);

    if (arr[arr.length - 1] > 1.8) {
      console.log("Alto");
    } else {
      console.log("Padrão");
    }
  }
}

ultimaAltura(alturas);
ultimaAltura(alturas2);
ultimaAltura(alturas3);

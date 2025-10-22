// Captura o console.log e mostra na página
(function () {
  const oldLog = console.log;
  const output = document.getElementById("output");

  console.log = function (...args) {
    const msg = args
      .map((a) => (typeof a === "object" ? JSON.stringify(a, null, 2) : a))
      .join(" ");
    output.innerHTML += msg + "";
    output.scrollTop = output.scrollHeight;
    oldLog.apply(console, args);
  };
})();

/* function verificarIdade(idade) {
  if (idade >= 18) {
    console.log("Você ja pode votar!");
  } else if (idade >= 16 && idade < 18) {
    console.log("Você pode votar, mas não é obrigatorio!");
  } else {
    console.log("Você não pode votar!");
  }
}
verificarIdade(15);
verificarIdade(17);
verificarIdade(19);
console.log("-----");
function verificarTurno(turno) {
  if (turno == "M") {
    console.log("Bom dia!");
  } else if (turno === "V") {
    console.log("Boa tarde!");
  } else if (turno === "N") {
    console.log("Boa noite!");
  } else {
    console.log("Turno não identificado");
  }
}

verificarTurno("M");
verificarTurno("V");
verificarTurno("N");
verificarTurno("T");
console.log("-----"); */
// function determinarTriangulo(ladoA, ladoB, ladoC) {
//   if (ladoA === ladoB && ladoB === ladoC) {
//     console.log(
//       `Triangulo de lados ${ladoA}, ${ladoB} e ${ladoC} é Equilatero \n`
//     );
//   } else if (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC) {
//     console.log(
//       `Triangulo de lados ${ladoA}, ${ladoB} e ${ladoC} é Escaleno \n`
//     );
//   } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
//     console.log(
//       `Triangulo de lados ${ladoA}, ${ladoB} e ${ladoC} é Isoceles \n`
//     );
//   } else {
//     console.log("Não é um triangulo");
//   }
// }

// determinarTriangulo(2, 2, 2);
// determinarTriangulo(2, 1, 2);
// determinarTriangulo(2, 1, 3);

// const calendario = [
//   {
//     dia: "segunda",
//     tarefas: ["estudar", "academia"],
//   },
//   {
//     dia: "terça",
//     tarefas: ["estudar", "academia"],
//   },
// ];

// console.log(
//   `hoje é ${calendario[0].dia} e eu tenho que ${calendario[1].tarefas[0]}`
// );


// Cadastro básico com verificação de `undefined` e `null`
// Crie um objeto `aluno` com as propriedades `nome (string)`, `idade (number)` e `email` (deixe `undefined`). Faça uma **função nomeada** `verificaCadastro(p)` que:
// - Mostra uma apresentação com template string.
// - Se `email` for `undefined` ou `null`, mostre `"E-mail pendente"`.
// - Caso contrário, mostre `"E-mail cadastrado"`.

const aluno = {
  nome: "João",
  idade: 20,
  email: undefined,
};

function verificaCadastro(p) {
  console.log(`Aluno ${p.nome}\n`)
  if (p.email === undefined || p.email === null){
    console.log(`Seu e-mail esta pendente `)

  }else {
    console.log(`Seu email cadastrado e ${p.email}`)
  }
}

verificaCadastro(aluno)

console.log("\n------------ \n")
// ### 2. Montar nome completo e checar tamanhos
// Usando **concatenação** e **template string**, monte o nome completo a partir de 4 constantes (`primeiroNome`, `segundoNome`, `primeiroSobrenome`, `segundoSobrenome`).  
// Depois, compare (com `if/else`) o `length` de `primeiroNome` e de `segundoNome` e mostre quem tem mais caracteres.

const primeiroNome = "Antonio"
const segundoNome = "Flavio"
const primeiroSobrenome = "da Silva"
const segundoSobrenome = "Patricio"

console.log(`Seu nome completo e ${primeiroNome} ${segundoNome} ${primeiroSobrenome} ${segundoSobrenome}`)


console.log("\n------------ \n")
function compararNome(){
  if(primeiroNome.length > segundoNome.length){
    console.log(`Seu primeiro nome ${primeiroNome} tem mais caracteres que seu segundo nome ${segundoNome}`)

  }else if(primeiroNome.length < segundoNome.length){
    console.log(`Seu segundo nome ${segundoNome} tem mais caracteres que seu primeiro nome ${primeiroNome}`)

  }

}

compararNome()

// ### 3. Controle simples de estoque com validação
// Dado um array `estoqueDeFrutas = [["maca", 5], ["manga", 2], ["uva", 7]]`, crie uma **função nomeada** `venderFruta(index, quantidade)` que:
// - Só subtraia do estoque se houver quantidade suficiente.
// - Use `if/else` para bloquear vendas inválidas.
// - Mostre a mensagem `Venda aprovada: X unidades de Y` ou `Estoque insuficiente`.

console.log("\n------------ \n")

const estoqueDeFrutas = [["maca", 5], ["manga", 2], ["uva", 7]];

function venderFruta(index, quantidade){
  if(estoqueDeFrutas[index][1] >= quantidade){
    estoqueDeFrutas[index][1] -= quantidade
    console.log(`Venda aprovada: ${quantidade} unidades de ${estoqueDeFrutas[index][0]}`)

  }else {
    console.log(`Estoque insuficiente para ${estoqueDeFrutas[index][0]}`)

  }
}

venderFruta(0, 6)
console.log("\n------------ \n")
venderFruta(1, 5)
console.log("\n------------ \n")
venderFruta(2, 4)

// ### 4. Última altura do array com guarda contra array vazio
// Dado `alturas = [1.6, 1.75, 1.85]`, crie uma **função nomeada** `ultimaAltura(arr)` que:
// - Se o array estiver vazio, mostre `"Sem alturas"`.
// - Caso contrário, mostre a última altura usando `arr.length - 1`.
// - Se a última altura for maior que `1.8`, mostre `"Alto"`; senão, `"Padrão"`.

console.log("\n------------ \n")

const alturas = [1.6, 1.75, 1.85]

function ultimaAltura(arr){
  if(arr.length === 0){
    console.log("Sem alturas")

  }else{
    console.log(arr[arr.length - 1])

  }
}

ultimaAltura(alturas)

// ### 5. Apresentação condicional de profissional (objeto + array + `length`)
// Crie um objeto `profissional` com `nome`, `profissao` e `equipamentos` (array de strings).  
// Faça uma **função nomeada** `apresentarProf(p)` que:
// - Imprima `Olá, eu sou X e sou Y`.
// - Se `equipamentos.length > 0`, mostre `Uso: primeiro equipamento`.
// - Caso contrário, `Sem equipamentos`.

console.log("\n------------ \n")

const profissional = {
  nome: "Flavio",
  profissao: "Programador",
  equipamento: ["notebook", "monitor"],
};

function apresentarProf(p){
  console.log(`Olá, eu sou ${p.nome} e sou ${p.profissao}`)

  if(p.equipamento.length > 0){
    console.log(`\nUso: ${p.equipamento[p.equipamento.length - p.equipamento.length]}`)

  }else {
    console.log("Sem equipamentos")
  }
}

apresentarProf(profissional)

// ### 6. Comparador “solto” vs “estrito”
// Crie uma **função nomeada** `compararValores(a, b)` que mostre no console:
// - O resultado de `a == b`
// - O resultado de `a === b`
// - O tipo de `a` e o tipo de `b` com `typeof`  
// Teste com `"50"` e `50`, depois com `"cinquenta"` e `50`.

console.log("\n------------ \n")


// ### 6. Comparador “solto” vs “estrito”
// Crie uma **função nomeada** `compararValores(a, b)` que mostre no console:
// - O resultado de `a == b`
// - O resultado de `a === b`
// - O tipo de `a` e o tipo de `b` com `typeof`  
// Teste com `"50"` e `50`, depois com `"cinquenta"` e `50`.

function compararValores(a, b) {
  if(a == b){
    resultado = a == b;
    console.log(resultado)

  }else if (a === b){
    resultado2 = a === b;
    console.log(resultado2)

  } else {
    console.log(`${a} nao e igual a ${b}`)
  }

  console.log(typeof a);
  console.log(typeof b);

}
compararValores("50", `50`)
console.log("\n------------ \n")
compararValores("cinquenta", `50`)


// ---

// ### 7. Cálculo com strings numéricas (coerção) + `if/else`
// Crie uma **função nomeada** `imc(pesoStr, alturaStr)` que recebe **strings** numéricas, converta usando o **operador unário `+`** e calcule o IMC: `peso / (altura * altura)`.  
// - Se o IMC for maior ou igual a 25, mostre `"Acima do peso"`; senão, `"Peso adequado"`.
// - Use `"85"` e `"1.85"` como exemplo.

// ---

// ### 8. Atualização de objeto: ponto vs colchetes, `delete` e verificação de tipos
// Dado o objeto `lapiseira` abaixo, faça:
// - Troque `cor` para `"verde"`.
// - Troque `modelo` para `"COMP07"` usando **colchetes**.
// - `delete` na propriedade `marca`.
// - Adicione `ponteiro = "cromado"`.
// - Mostre `typeof` de `temBorracha` e `grafite`.

// ---

// ### 9. `switch` para escolher operação com funções
// Implemente quatro funções:  
// - **nomeada** `somar(a, b)`  
// - **anônima** (atribuída a const) `subtrair(a, b)`  
// - **arrow** `multiplicar(a, b)`  
// - **arrow** `dividir(a, b)`  
// Crie a constante `operacao` com um dos valores: `"+"`, `"-"`, `"*"`, `"/"`.  
// Use `switch` para decidir **qual função executar** e mostre o resultado.

// ---

// ### 10. Venda de carros com checagens (sem laços)
// Com o array de objetos abaixo, crie uma **função nomeada** `vender(nomeCliente, index, quantidade)` que:
// - Checa se `index` é válido (com `if`).
// - Checa se existe estoque suficiente.
// - Subtrai e mostra: `Cliente: X - Venda: Y Z`.
// - Se faltar estoque, mostre `"Venda negada"`.


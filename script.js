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

function verificarIdade(idade) {
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
console.log("-----");
function determinarTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA === ladoB && ladoB === ladoC) {
    console.log("Triangulo Equilatero");
  } else if (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC) {
    console.log("Triangulo Escaleno");
  } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
    console.log("Triangulo Isoceles");
  } else {
    console.log("Não é um triangulo");
  }
}

determinarTriangulo(2, 2, 2);
determinarTriangulo(2, 1, 2);
determinarTriangulo(2, 1, 3);
console.log("-----");
const calendario = [
  {
    dia: "segunda",
    tarefas: ["estudar", "academia"],
  },
  {
    dia: "terça",
    tarefas: ["estudar", "academia"],
  },
];

console.log(
  `hoje é ${calendario[1].dia} e eu tenho que ${calendario[1].tarefas[0]}`
);

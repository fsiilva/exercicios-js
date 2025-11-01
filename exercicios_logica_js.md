## Exercícios de Lógica de Programação em JavaScript (Nível Médio)

### 1. Cadastro básico com verificação de `undefined` e `null`
Crie um objeto `aluno` com as propriedades `nome (string)`, `idade (number)` e `email` (deixe `undefined`). Faça uma **função nomeada** `verificaCadastro(p)` que:
- Mostra uma apresentação com template string.
- Se `email` for `undefined` ou `null`, mostre `"E-mail pendente"`.
- Caso contrário, mostre `"E-mail cadastrado"`.

---

### 2. Montar nome completo e checar tamanhos
Usando **concatenação** e **template string**, monte o nome completo a partir de 4 constantes (`primeiroNome`, `segundoNome`, `primeiroSobrenome`, `segundoSobrenome`).  
Depois, compare (com `if/else`) o `length` de `primeiroNome` e de `segundoNome` e mostre quem tem mais caracteres.

---

### 3. Controle simples de estoque com validação
Dado um array `estoqueDeFrutas = [["maca", 5], ["manga", 2], ["uva", 7]]`, crie uma **função nomeada** `venderFruta(index, quantidade)` que:
- Só subtraia do estoque se houver quantidade suficiente.
- Use `if/else` para bloquear vendas inválidas.
- Mostre a mensagem `Venda aprovada: X unidades de Y` ou `Estoque insuficiente`.

---

### 4. Última altura do array com guarda contra array vazio
Dado `alturas = [1.6, 1.75, 1.85]`, crie uma **função nomeada** `ultimaAltura(arr)` que:
- Se o array estiver vazio, mostre `"Sem alturas"`.
- Caso contrário, mostre a última altura usando `arr.length - 1`.
- Se a última altura for maior que `1.8`, mostre `"Alto"`; senão, `"Padrão"`.

---

### 5. Apresentação condicional de profissional (objeto + array + `length`)
Crie um objeto `profissional` com `nome`, `profissao` e `equipamentos` (array de strings).  
Faça uma **função nomeada** `apresentarProf(p)` que:
- Imprima `Olá, eu sou X e sou Y`.
- Se `equipamentos.length > 0`, mostre `Uso: primeiro equipamento`.
- Caso contrário, `Sem equipamentos`.

---

### 6. Comparador “solto” vs “estrito”
Crie uma **função nomeada** `compararValores(a, b)` que mostre no console:
- O resultado de `a == b`
- O resultado de `a === b`
- O tipo de `a` e o tipo de `b` com `typeof`  
Teste com `"50"` e `50`, depois com `"cinquenta"` e `50`.

---

### 7. Cálculo com strings numéricas (coerção) + `if/else`
Crie uma **função nomeada** `imc(pesoStr, alturaStr)` que recebe **strings** numéricas, converta usando o **operador unário `+`** e calcule o IMC: `peso / (altura * altura)`.  
- Se o IMC for maior ou igual a 25, mostre `"Acima do peso"`; senão, `"Peso adequado"`.
- Use `"85"` e `"1.85"` como exemplo.

---

### 8. Atualização de objeto: ponto vs colchetes, `delete` e verificação de tipos
Dado o objeto `lapiseira` abaixo, faça:
- Troque `cor` para `"verde"`.
- Troque `modelo` para `"COMP07"` usando **colchetes**.
- `delete` na propriedade `marca`.
- Adicione `ponteiro = "cromado"`.
- Mostre `typeof` de `temBorracha` e `grafite`.

---

### 9. `switch` para escolher operação com funções
Implemente quatro funções:  
- **nomeada** `somar(a, b)`  
- **anônima** (atribuída a const) `subtrair(a, b)`  
- **arrow** `multiplicar(a, b)`  
- **arrow** `dividir(a, b)`  
Crie a constante `operacao` com um dos valores: `"+"`, `"-"`, `"*"`, `"/"`.  
Use `switch` para decidir **qual função executar** e mostre o resultado.

---

### 10. Venda de carros com checagens (sem laços)
Com o array de objetos abaixo, crie uma **função nomeada** `vender(nomeCliente, index, quantidade)` que:
- Checa se `index` é válido (com `if`).
- Checa se existe estoque suficiente.
- Subtrai e mostra: `Cliente: X - Venda: Y Z`.
- Se faltar estoque, mostre `"Venda negada"`.


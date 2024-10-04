// * Rest Operator
// function listaAlunos(alunos) {
//   console.log("Sejam bem vindos alunos!!");
//   console.log(alunos);
// }
// listaAlunos("Adamastor", "Benevides", "Desidério", "Demerval");
// function listaAlunos(...alunos) {
//   console.log("Sejam bem vindos alunos!!");
//   console.log(alunos);
// }

// listaAlunos("Adamastor", "Benevides", "Desidério", "Demerval");

// * Sortear números em uma lista
// function sorteadorNumero(...numeros) {
//   const numeroSorteado = numeros[Math.floor(Math.random() * numeros.length)];
//   return console.log(`O número sorteado é o ${numeroSorteado}.`);
// }

// sorteadorNumero(2, 3, 5, 7, 11, 13, 17, 19);
const form = document.getElementById("formulario");
const numerosInput = document.getElementById("numeros_input");
let resultado = document.getElementById("resultado")

function sorteadorNumero(...numeros) {
  const numeroSorteado = numeros[Math.floor(Math.random() * numeros.length)];
  return numeroSorteado;
}


form.addEventListener("submit", (e) => {
  e.preventDefault();
  const numeros = numerosInput.value.split(',').map(Number);
  resultado.innerHTML =  `O número sorteado é o ${sorteadorNumero(...numeros)}.`;
});
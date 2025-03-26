const readline = require("readline");

const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout,
});

rl.question("Salário atual: ", (salarioAtual) => {
 const salarioAtualReal = parseFloat(salarioAtual);

 if (isNaN(salarioAtualReal) || salarioAtualReal < 0) {
  console.log("Por favor, insira um número válido.");
  rl.close();
  return;
 }

 rl.question("Percentual do aumento: ", (percentualAumento) => {
  const percentualAumentoReal = parseFloat(percentualAumento);

  if (isNaN(percentualAumentoReal) || percentualAumentoReal < 0) {
   console.log("Insira um percentual válido.");
   rl.close();
   return;
  }

  const aumento = (salarioAtualReal * percentualAumentoReal) / 100;
  const novoSalario = salarioAtualReal + aumento;

  console.log(
   `Seu novo salário é: R$ ${novoSalario.toFixed(
    2
   )} (aumento de R$ ${aumento.toFixed(2)})`
  );

  rl.close();
 });
});

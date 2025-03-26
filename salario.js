const readline = require("readline");

const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout,
});

rl.question("Salário atual: ", (salarioAtual) => {
 if (isNaN(salarioAtual) || salarioAtual === "") {
  console.log("Por favor, insira um número válido.");
  rl.close();
  return;
 }

 rl.question("Percentual do aumento: ", (percentualAumento) => {
  if (isNaN(percentualAumento) || percentualAumento === "") {
   console.log("Insira um número válido");
   rl.close();
   return;
  }
  const salarioAtualNum = parseFloat(salarioAtual);
  const percentualAumentoNum = parseFloat(percentualAumento);
  const aumento = (salarioAtualNum * percentualAumentoNum) / 100;
  let novoSalario = salarioAtualNum + aumento;
  console.log("Seu novo salário é: ", novoSalario + " R$");
 });
});

const readline = require("readline");

const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout,
});

rl.question("Número 1: ", (numeroUm) => {
 if (isNaN(numeroUm) || numeroUm === "") {
  console.log("Digite um número válido: ");
  rl.close();
  return;
 }
 rl.question("Número 2: ", (numeroDois) => {
  if (isNaN(numeroDois) || numeroDois === "") {
   console.log("Digite um número válido!");
   rl.close();
   return;
  }
  const numeroUmReal = parseFloat(numeroUm);
  const numeroDoisReal = parseFloat(numeroDois);
  const produto = numeroUmReal * numeroDoisReal;
  console.log(numeroUmReal + " * " + numeroDoisReal + " = " + produto);
 });
});

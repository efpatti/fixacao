const readline = require("readline");

const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout,
});

rl.question("Número 1: ", (numeroUm) => {
 const numeroUmReal = parseFloat(numeroUm);
 if (isNaN(numeroUmReal)) {
  console.log("Digite um número válido.");
  rl.close();
  return;
 }

 rl.question("Número 2: ", (numeroDois) => {
  const numeroDoisReal = parseFloat(numeroDois);
  if (isNaN(numeroDoisReal)) {
   console.log("Digite um número válido!");
   rl.close();
   return;
  }

  const produto = numeroUmReal * numeroDoisReal;
  console.log(`Resultado: ${numeroUmReal} * ${numeroDoisReal} = ${produto}`);

  rl.close();
 });
});

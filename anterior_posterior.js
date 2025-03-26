const readline = require("readline");

const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout,
});

rl.question("Digite um número: ", (numero) => {
 const numeroReal = parseFloat(numero.trim());

 if (isNaN(numeroReal)) {
  console.log("Digite um número válido!");
  rl.close();
  return;
 }

 const numeroAnterior = numeroReal - 1;
 const numeroPosterior = numeroReal + 1;

 console.log(
  `O número anterior a ${Math.floor(numeroReal)} é ${Math.floor(
   numeroAnterior
  )}`
 );
 console.log(
  `O número posterior a ${Math.floor(numeroReal)} é ${Math.floor(
   numeroPosterior
  )}`
 );
 rl.close();
});

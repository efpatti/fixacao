const readline = require("readline");

const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout,
});

rl.question("Digite um número: ", (numeroDigitado) => {
 const numeroDigitadoReal = parseFloat(numeroDigitado.trim());

 if (isNaN(numeroDigitadoReal)) {
  console.log("Digite um número válido!");
  rl.close();
  return;
 }
 const dobro = numeroDigitadoReal * 2;
 console.log(`O dobro de ${numeroDigitadoReal} é ${dobro}`);
 rl.close();
});

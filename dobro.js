const readline = require("readline");

const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout,
});

rl.question("Digite um número: ", (numeroDigitado) => {
 if (isNaN(numeroDigitado) || numeroDigitado === "") {
  console.log("Digite um número válido!");
  rl.close();
  return;
 }
 const numeroDigitadoNum = parseFloat(numeroDigitado);
 const dobro = numeroDigitadoNum * 2;
 console.log("O dobro de " + numeroDigitadoNum + " é " + dobro);
});

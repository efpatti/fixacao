const readline = require("readline");

const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout,
});

rl.question("Valor do lado do quadrado: ", (lado) => {
 const ladoReal = parseFloat(lado.trim());

 if (isNaN(ladoReal) || ladoReal <= 0) {
  console.log("Por favor, insira um número válido (maior que 0).");
  rl.close();
  return;
 }

 const areaQuadrado = ladoReal ** 2;
 console.log(`A área do quadrado é: ${areaQuadrado.toFixed(2)}`);

 rl.close();
});

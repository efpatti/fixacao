const readline = require("readline");

const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout,
});

rl.question("Valor do lado do quadrado: ", (lado) => {
 if (isNaN(lado) || lado === "") {
  console.log("Por favor, insira um número válido.");
 } else {
  const ladoNumerico = parseFloat(lado);
  let areaQuadrado = ladoNumerico ** 2;
  console.log("A área do quadrado é: " + areaQuadrado);
 }

 rl.close();
});

const readline = require("readline");

const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout,
});

rl.question("Valor do lado da base menor: ", (baseMenor) => {
 if (isNaN(baseMenor) || baseMenor === "") {
  console.log("Por favor, insira um número válido.");
 } else {
    rl.question("Valor do lado da base menor: ", (baseMenor) => {
        if (isNaN(baseMenor) || baseMenor === "") {
         console.log("Por favor, insira um número válido.");
        } }
  const ladoNumerico = parseFloat(lado);
  let areaTrapezio = (baseMaior + baseMenor) * altura;
  console.log("A área do quadrado é: " + areaTrapezio);
 }

 rl.close();
});

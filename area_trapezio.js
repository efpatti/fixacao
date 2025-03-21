const readline = require("readline");

const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout,
});

rl.question("Valor da base maior: ", (baseMaior) => {
 if (isNaN(baseMaior) || baseMaior === "") {
  console.log("Por favor, insira um número válido.");
  rl.close();
  return;
 }

 rl.question("Valor da base menor: ", (baseMenor) => {
  if (isNaN(baseMenor) || baseMenor === "") {
   console.log("Por favor, insira um número válido.");
   rl.close();
   return;
  }

  rl.question("Valor da altura: ", (altura) => {
   if (isNaN(altura) || altura === "") {
    console.log("Por favor, insira um número válido.");
    rl.close();
    return;
   }

   // Convertendo as entradas para números flutuantes
   const baseMaiorNum = parseFloat(baseMaior);
   const baseMenorNum = parseFloat(baseMenor);
   const alturaNum = parseFloat(altura);

   // Calculando a área do trapézio
   let areaTrapezio = ((baseMaiorNum + baseMenorNum) * alturaNum) / 2;
   console.log("A área do trapézio é: " + areaTrapezio);

   rl.close();
  });
 });
});

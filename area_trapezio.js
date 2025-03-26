const readline = require("readline");

const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout,
});

rl.question("Valor da base maior: ", (baseMaior) => {
 const baseMaiorReal = parseFloat(baseMaior.trim());

 if (isNaN(baseMaiorReal) || baseMaiorReal <= 0) {
  console.log("Por favor, insira um número válido maior que 0.");
  rl.close();
  return;
 }

 rl.question("Valor da base menor: ", (baseMenor) => {
  const baseMenorReal = parseFloat(baseMenor.trim());

  if (isNaN(baseMenorReal) || baseMenorReal <= 0) {
   console.log("Por favor, insira um número válido maior que 0.");
   rl.close();
   return;
  }

  rl.question("Valor da altura: ", (altura) => {
   const alturaReal = parseFloat(altura.trim());

   if (isNaN(alturaReal) || alturaReal <= 0) {
    console.log("Por favor, insira um número válido maior que 0.");
    rl.close();
    return;
   }

   const areaTrapezio = ((baseMaiorReal + baseMenorReal) * alturaReal) / 2;
   console.log(`A área do trapézio é: ${areaTrapezio.toFixed(2)}`);

   rl.close();
  });
 });
});

const readline = require("readline");

const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout,
});

rl.question("Nota 1: ", (notaUm) => {
 const notaUmReal = parseFloat(notaUm.trim());
 if (isNaN(notaUmReal) || notaUmReal < 0 || notaUmReal > 10) {
  console.log("Digite uma nota válida, entre 1 e 10!");
  rl.close();
  return;
 }

 rl.question("Nota 2: ", (notaDois) => {
  const notaDoisReal = parseFloat(notaDois.trim());
  if (isNaN(notaDoisReal) || notaDoisReal < 0 || notaDoisReal > 10) {
   console.log("Digite uma nota válida, entre 1 e 10!");
   rl.close();
   return;
  }

  rl.question("Nota 3: ", (notaTres) => {
   const notaTresReal = parseFloat(notaTres.trim());
   if (isNaN(notaTresReal) || notaTresReal < 0 || notaTresReal > 10) {
    console.log("Digite uma nota válida, entre 1 e 10!");
    rl.close();
    return;
   }

   const media = (notaUmReal + notaDoisReal + notaTresReal) / 3;

   console.log(`A média das 3 notas é: ${media.toFixed(1)}`);
   rl.close();
  });
 });
});

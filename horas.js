const readline = require("readline");

const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout,
});

rl.question("Total de horas da atividade: ", (horas) => {
 const horasReal = parseFloat(horas.trim());

 if (isNaN(horasReal) || horasReal <= 0) {
  console.log("Digite um valor válido maior que 0!");
  rl.close();
  return;
 }

 const horasEmMinutos = horasReal * 60;
 const isPlural = horasReal > 1;
 console.log(
  `${Math.floor(horasReal)} ${
   isPlural ? "horas" : "hora"
  } da ${horasEmMinutos} minutos!`
 );

 rl.close();
});

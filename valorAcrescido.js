const readline = require("readline");

const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout,
});

rl.question("Digite o valor de um produto: ", (valorProduto) => {
 const valorProdutoReal = parseFloat(valorProduto);

 if (isNaN(valorProdutoReal) || valorProdutoReal < 0) {
  console.log("Digite um valor válido!");
  rl.close();
  return;
 }

 rl.question("Digite a porcentagem de acréscimo: ", (acrescimoDigitado) => {
  const porcentagem = parseFloat(acrescimoDigitado);

  if (isNaN(porcentagem) || porcentagem < 0) {
   console.log("Digite um acréscimo válido!");
   rl.close();
   return;
  }

  const acrescimo = (valorProdutoReal * porcentagem) / 100;
  const valorProdutoAcrescido = valorProdutoReal + acrescimo;

  console.log(
   `O valor do produto é R$ ${valorProdutoReal.toFixed(
    2
   )}, com acréscimo de ${porcentagem}%.`
  );
  console.log(
   `Acréscimo: R$ ${acrescimo.toFixed(
    2
   )}\nTotal: R$ ${valorProdutoAcrescido.toFixed(2)}`
  );

  rl.close();
 });
});

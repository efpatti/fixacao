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

 rl.question("Digite a porcentagem de desconto: ", (descontoDigitado) => {
  const porcentagem = parseFloat(descontoDigitado);

  if (isNaN(porcentagem) || porcentagem < 0) {
   console.log("Digite um desconto válido!");
   rl.close();
   return;
  }

  const desconto = (valorProdutoReal * porcentagem) / 100;
  const valorProdutoComDesconto = valorProdutoReal - desconto;

  console.log(
   `O valor do produto é R$ ${valorProdutoReal.toFixed(
    2
   )}, com desconto de ${porcentagem}%.`
  );
  console.log(
   `Desconto: R$ ${desconto.toFixed(
    2
   )}\nTotal: R$ ${valorProdutoComDesconto.toFixed(2)}`
  );

  rl.close();
 });
});

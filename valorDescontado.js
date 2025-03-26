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
  const valorProdutoRealFormatado = valorProdutoReal.toLocaleString("pt-BR", {
   style: "currency",
   currency: "BRL",
  });
  const descontoFormatado = desconto.toLocaleString("pt-BR", {
   style: "currency",
   currency: "BRL",
  });
  const valorProdutoComDescontoFormatado =
   valorProdutoComDesconto.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
   });

  console.log(
   `O valor do produto é R$ ${valorProdutoRealFormatado}, com desconto de ${porcentagem}%.`
  );
  console.log(
   `Desconto: R$ ${descontoFormatado}\nTotal: R$ ${valorProdutoComDescontoFormatado}`
  );

  rl.close();
 });
});

const readline = require("readline");

const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout,
});

rl.question("Digite o valor de um produto: ", (valorProduto) => {
 if (isNaN(valorProduto) || valorProduto === "" || valorProduto < 0) {
  console.log("Digite um valor válido!");
  rl.close;
  return;
 }
 const valorProdutoReal = parseFloat(valorProduto);
 const porcentagem = 20;
 const porcentagemReal = porcentagem / 100;
 const acrescimo = valorProdutoReal * porcentagemReal;
 const valorProdutoAcrescido = valorProdutoReal + acrescimo;
 console.log(
  valorProdutoReal,
  " acrescentando ",
  porcentagem,
  "% da ",
  acrescimo,
  " de acréscimo."
 );
 console.log(
  "Logo, " + valorProdutoReal + " + ",
  acrescimo,
  " = ",
  valorProdutoAcrescido
 );
});

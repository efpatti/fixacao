const readline = require("readline");

const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout,
});

rl.question("Valor do produto: ", (valorProduto) => {
 const valorProdutoReal = parseFloat(valorProduto.trim());

 if (isNaN(valorProdutoReal) || valorProdutoReal < 0) {
  console.log("Digite um valor válido!");
  rl.close();
  return;
 }

 rl.question("Número de parcelas: ", (parcelas) => {
  const parcelasReal = parseFloat(parcelas.trim());
  if (isNaN(parcelasReal) || parcelasReal <= 0) {
   console.log("Digite um número válido de parcelas!");
   rl.close();
   return;
  }
  const valorParcelas = valorProdutoReal / parcelasReal;
  const valorParcelasFormatadoReal = valorParcelas.toLocaleString("pt-BR", {
   style: "currency",
   currency: "BRL",
  });
  console.log(`O valor de cada parcela é ${valorParcelasFormatadoReal}!`);
  rl.close();
 });
});

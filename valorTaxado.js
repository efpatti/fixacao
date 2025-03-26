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

 rl.question("Digite a porcentagem de taxa: ", (taxaDigitado) => {
  const porcentagem = parseFloat(taxaDigitado);

  if (isNaN(porcentagem) || porcentagem < 0) {
   console.log("Digite uma taxa válida!");
   rl.close();
   return;
  }

  const taxa = (valorProdutoReal * porcentagem) / 100;
  const valorProdutoComtaxa = valorProdutoReal + taxa;
  const valorProdutoRealFormatado = valorProdutoReal.toLocaleString("pt-BR", {
   style: "currency",
   currency: "BRL",
  });
  const taxaFormatada = taxa.toLocaleString("pt-BR", {
   style: "currency",
   currency: "BRL",
  });
  const valorProdutoComTaxaFormatada = valorProdutoComtaxa.toLocaleString(
   "pt-BR",
   {
    style: "currency",
    currency: "BRL",
   }
  );

  console.log(
   `O valor do produto é R$ ${valorProdutoRealFormatado}, com taxa de ${porcentagem}%.`
  );
  console.log(
   `Taxa: R$ ${taxaFormatada}\nTotal: R$ ${valorProdutoComTaxaFormatada}`
  );

  rl.close();
 });
});

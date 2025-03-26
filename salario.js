const readline = require("readline");

const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout,
});

rl.question("Salário atual: ", (salarioAtual) => {
 const salarioAtualReal = parseFloat(salarioAtual);

 if (isNaN(salarioAtualReal) || salarioAtualReal < 0) {
  console.log("Por favor, insira um número válido.");
  rl.close();
  return;
 }

 rl.question("Percentual do aumento: ", (percentualAumento) => {
  const percentualAumentoReal = parseFloat(percentualAumento);

  if (isNaN(percentualAumentoReal) || percentualAumentoReal < 0) {
   console.log("Insira um percentual válido.");
   rl.close();
   return;
  }

  const aumento = (salarioAtualReal * percentualAumentoReal) / 100;
  const aumentoFormatado = aumento.toLocaleString("pt-BR", {
   style: "currency",
   currency: "BRL",
  });
  const novoSalario = salarioAtualReal + aumento;
  const novoSalarioFormatado = novoSalario.toLocaleString("pt-BR", {
   style: "currency",
   currency: "BRL",
  });

  console.log(
   `Seu novo salário é: R$ ${novoSalarioFormatado} (aumento de R$ ${aumento})`
  );

  rl.close();
 });
});

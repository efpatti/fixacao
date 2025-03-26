const readline = require("readline");

const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout,
});

const validarNota = (nota) => {
 const notaReal = parseFloat(nota.trim());
 return !isNaN(notaReal) && notaReal >= 0 && notaReal <= 10;
};

const obterNota = (pergunta) => {
 return new Promise((resolve) => {
  rl.question(pergunta, (nota) => {
   if (validarNota(nota)) {
    resolve(parseFloat(nota.trim()));
   } else {
    console.log("Digite uma nota válida entre 0 e 10!");
    resolve(null);
   }
  });
 });
};

const calcularMedia = async () => {
 const nota1 = await obterNota("Nota 1: ");
 if (nota1 === null) return rl.close();

 const nota2 = await obterNota("Nota 2: ");
 if (nota2 === null) return rl.close();

 const nota3 = await obterNota("Nota 3: ");
 if (nota3 === null) return rl.close();

 const media = (nota1 + nota2 + nota3) / 3;
 console.log(`A média das 3 notas é: ${media.toFixed(1)}`);
 rl.close();
};

calcularMedia();

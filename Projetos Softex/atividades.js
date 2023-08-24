// 1 - Dado um array de números [3, 7, 2, 9, 5], crie um loop "for" que itere pelo array e exiba cada elemento no console.

// const numeros [3, 7, 2, 9, 5,];
// for (let i = 0; i < numeros.length; i++) {
//     console.log(numeros[i]);
//   }
  

//Suponha que você tenha um objeto com valores numéricos: {a: 10, b: 20, c: 30, d: 40}. 
//Utilize um laço "for...in" para iterar pelas chaves do objeto e calcular a soma de todos os valores.


//   const objeto = {a: 10, b: 20, c: 30, d: 40};
// let soma = 0;

// for (const chave in objeto) {
//    if (objeto.hasOwnProperty(chave)) {
//    soma += objeto[chave];
// }
// }

//console.log("A soma dos valores é:", soma);


//Dado um array de números [12, 5, 8, 21, 16, 7], crie um loop "for" que itere pelo array, verificando se cada número é par. 
//Se for par, adicione-o a um novo array. No final, exiba o novo array com os números pares

// const numeros = [12, 5, 8, 21, 16, 7];
// const numerosPares = [];

// for (let i = 0; i < numeros.length; i++) {
//   if (numeros[i] % 2 === 0) {
//     numerosPares.push(numeros[i]);
//   }
// }

// console.log(numerosPares);

//Considere um objeto com informações de estudantes: const estudantes = { alice: 18, bob: 20, carol: 19, david: 21 }; 
//Utilize um loop "for...in" para verificar se há um estudante com a idade de 19 anos. Se sim, exiba "Nome do estudante: idade" no console.

// const estudantes = { alice: 18, bob: 20, carol: 19, david: 21 };

// for (const nome in estudantes) {
// if (estudantes[nome] === 19) {
// console.log(`${nome}: ${estudantes[nome]} anos`);
//    }
// }

//Imagine que você tem uma matriz bidimensional representando uma grade de pontos: const pontos = [ [2, 5, 8], [3, 9, 12], [4, 6, 10] ]; 
//Utilize dois loops "for" aninhados para calcular a soma de todos os elementos da matriz e exibir o resultado.

//const pontos = [ [2, 5, 8], [3, 9, 12], [4, 6, 10] ];
//let soma = 0;

// for (let i = 0; i < pontos.length; i++) {
//   for (let j = 0; j < pontos[i].length; j++) {
//     soma += pontos[i][j];
//   }
// }

// console.log(`A soma de todos os elementos é: ${soma}`);

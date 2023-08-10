function buscaBinaria(array, target) {
  let inicio = 0;
  let fim = array.length - 1;

  while (inicio <= fim) {
    const meio = Math.floor((inicio + fim) / 2);

    if (array[meio] === target) {
      return meio; // Retorna o índice onde o valor foi encontrado
    } else if (array[meio] < target) {
      inicio = meio + 1;
    } else {
      fim = meio - 1;
    }
  }

  return -1; // Retorna -1 se o valor não for encontrado
}

const array = [5, 7, 8, 10, 12, 15, 18, 20, 25, 30];
const valorProcurado = 20;

const indiceEncontrado = buscaBinaria(array, valorProcurado);

if (indiceEncontrado !== -1) {
  console.log(`O valor ${valorProcurado} foi encontrado no índice ${indiceEncontrado}.`);
} else {
  console.log(`O valor ${valorProcurado} não foi encontrado no array.`);
}

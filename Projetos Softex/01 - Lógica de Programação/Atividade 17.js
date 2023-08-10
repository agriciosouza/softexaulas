// Criação da matriz bidimensional para armazenar informações sobre animais
const animais = [
  ["Leão", "Felino", 5],
  ["Elefante", "Mamífero", 10],
  ["Girafa", "Herbívoro", 7],
  ["Tigre", "Felino", 3],
  ["Urso", "Mamífero", 6]
];

// Função para imprimir as informações dos animais
function imprimirInformacoesAnimais(animais) {
  console.log("Nome | Espécie | Idade");
  console.log("----------------------");
  for (let i = 0; i < animais.length; i++) {
    const [nome, especie, idade] = animais[i];
    console.log(`${nome} | ${especie} | ${idade} anos`);
  }
}

// Chamada da função para imprimir as informações dos animais
imprimirInformacoesAnimais(animais);

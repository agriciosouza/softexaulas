// Função para iniciar a simulação da eleição
function iniciarEleicao() {
  let candidatoX = 0;
  let candidatoY = 0;
  let candidatoZ = 0;
  let brancos = 0;
  let nulos = 0;
  
  while (true) {
    let voto = prompt("Digite o número do candidato (1 para X, 2 para Y, 3 para Z, 0 para branco) ou 'fim' para encerrar a votação:");

    if (voto === 'fim') {
      break;
    }
    
    if (isNaN(voto) || voto === "") {
      console.log("Voto inválido. Por favor, digite um número válido ou 'fim' para encerrar a votação.");
      continue;
    }

    voto = parseInt(voto);
    
    switch (voto) {
      case 1:
        candidatoX++;
        break;
      case 2:
        candidatoY++;
        break;
      case 3:
        candidatoZ++;
        break;
      case 0:
        brancos++;
        break;
      default:
        nulos++;
        break;
    }
  }
  
  console.log("Eleição encerrada!");
  console.log("Resultado da eleição:");
  console.log(`Candidato X: ${candidatoX} votos`);
  console.log(`Candidato Y: ${candidatoY} votos`);
  console.log(`Candidato Z: ${candidatoZ} votos`);
  console.log(`Votos em branco: ${brancos}`);
  console.log(`Votos nulos: ${nulos}`);

  if (candidatoX > candidatoY && candidatoX > candidatoZ) {
    console.log("O vencedor é o Candidato X!");
  } else if (candidatoY > candidatoX && candidatoY > candidatoZ) {
    console.log("O vencedor é o Candidato Y!");
  } else if (candidatoZ > candidatoX && candidatoZ > candidatoY) {
    console.log("O vencedor é o Candidato Z!");
  } else {
    console.log("A eleição terminou em empate.");
  }
}

// Iniciar a simulação da eleição
iniciarEleicao();

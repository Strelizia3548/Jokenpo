function jogar(escolhaDoJogador) {
  // Lógica para o computador escolher aleatoriamente
  var sorteio = Math.floor(Math.random() * 3);

  // Atualize a imagem do computador com base no sorteio
  switch (sorteio) {
    case 0:
      document.getElementById("pc").src = "pcpedra.png";
      break;
    case 1:
      document.getElementById("pc").src = "pcpapel.png";
      break;
    case 2:
      document.getElementById("pc").src = "pctesoura.png";
      break;
  }

  // Verifique o vencedor ou declare um empate
  if (
    (escolhaDoJogador === "pedra" && sorteio === 0) ||
    (escolhaDoJogador === "papel" && sorteio === 1) ||
    (escolhaDoJogador === "tesoura" && sorteio === 2)
  ) {
    document.getElementById("placar").innerHTML = "Empate";
  } else if (
    (escolhaDoJogador === "pedra" && sorteio === 2) ||
    (escolhaDoJogador === "papel" && sorteio === 0) ||
    (escolhaDoJogador === "tesoura" && sorteio === 1)
  ) {
    document.getElementById("placar").innerHTML = "Parabéns, Você venceu!";
  } else {
    document.getElementById("placar").innerHTML = "Você perdeu!";
  }
}





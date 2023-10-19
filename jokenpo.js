function jogar(){
    if(document.getElementById("pedra").checked == false && 
    document.getElementById("papel").checked == false &&
    document.getElementById("tesoura").checked == false)
    {
        alert('Selecione sua jogada!');
    }
    else{
        //Logica Principal
        var sorteio = Math.floor(Math.random() * 3);
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


        //Verificar o Vencedor ou Declarar Empate
        if((document.getElementById("pedra").checked == true && sorteio==0)||
        (document.getElementById("papel").checked == true && sorteio ==1)||
        (document.getElementById("tesoura").checked == true && sorteio ==2))
        {
            document.getElementById("placar").innerHTML="Empate";
        }

        else if((document.getElementById("pedra").checked == true && sorteio ==2)||
        (document.getElementById("papel").checked == true && sorteio ==0)||
        (document.getElementById("tesoura").checked == true && sorteio ==1))
        {
            document.getElementById("placar").innerHTML="Parabéns, Você venceu!";
        }

        else{
            document.getElementById("placar").innerHTML="Parabéns, Você perdeu!";
        }
    }
}

function resetar() {
    document.getElementById("pc").src = "pc.png";
    document.getElementById("pedra").checked = false;
    document.getElementById("papel").checked = false;
    document.getElementById("tesoura").checked = false;
}




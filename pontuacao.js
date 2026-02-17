function contagemPontuacao() {

    const respostaMarcada = document.querySelectorAll('input[type=radio]:checked')
    if (respostaMarcada.length < 10){
        alert("RESPONDA TODAS AS PERGUNTAS!!")
    return;
}

let pontos = 0;
respostaMarcada.forEach(r => {
    pontos += parseInt(r.value);
});

document.getElementById("ponto").textContent =
    `Você fez ${pontos}/10 pontos!`;

   
document.querySelectorAll('input[type=radio]')
    .forEach(r => r.disabled = true);
}
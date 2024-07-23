const escolhas = document.querySelectorAll(".escolhas")
const escolhaMaquina = document.querySelector('.resultado1')
const resultado = document.querySelector('.resultado2')


escolhas.forEach(escolha => {
    escolha.addEventListener('click', () => jogar(escolha.innerText))
})

function jogar(escolha){
    let num = Math.floor(Math.random() * 4) + 1;
    switch(num){
        case(1):
            escolhaMaquina.innerText = "A maquina escolheu Pedra!"
            break;
        case(2):
            escolhaMaquina.innerText = "A maquina escolheu Tesoura!"
            break;
        case(3):
            escolhaMaquina.innerText = "A maquina escolheu Papel!"
            break;
    }
    if(escolha === 'Pedra' && num === 2 || escolha === 'Tesoura' && num === 3 || escolha === "Papel" && num === 1){
        resultado.innerText = "Você Ganhou!"

    } else if(escolha === 'Pedra' && num === 1 || escolha === 'Tesoura' && num === 2 || escolha === "Papel" && num === 3){
        resultado.innerText = "Deu empate"
    } else {
        resultado.innerText = "Você perdeu"
    }
}
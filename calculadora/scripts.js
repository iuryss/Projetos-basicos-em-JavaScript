const display = document.querySelector('#resultado')
const cleanBtn = document.querySelector('#limpar')
const resultBtn = document.querySelector("#igual")

function inserir(valor) {
    display.value += valor
}

function limpar() {
    display.value = ""
}

function calcular() {
    display.value = eval(display.value)
}

cleanBtn.addEventListener('click',() => limpar())

resultBtn.addEventListener('click', () => calcular())

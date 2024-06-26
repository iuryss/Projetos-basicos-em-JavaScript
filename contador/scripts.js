const exibirNumero = document.querySelector("#numero")

let numero = 0
exibirNumero.innerText = numero;

function decrease() {
    if(numero <= 0){
        return
    }
    numero--
    exibirNumero.innerText = `${numero}`;
}

function increase() {
    numero++
    exibirNumero.innerText = `${numero}`;
}

function reset() {
    numero = "0"
    exibirNumero.innerText = `${numero}`;
}

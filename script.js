// import * as ms from "../../meusScripts.js"

function print(a) {
    console.log(a)
}

let dados = [true, { nome: "Alvaro", idade: 36 }, "false"]

function adicionaElemento(array = [], elemento = 0) {
    array.push(elemento)
    print(array)
    return array
}

function removerUltimoElemento(array = []) {
    array.pop()
    print(array)
    return array
}

function removerElementosIntervalo(array = [0], valorInicial = 0, valorFinal = 1) {
    array.splice(valorInicial, valorFinal)
    print(array)
    return array
}

adicionaElemento(dados, "Esse é apenas um teste!!!")
removerUltimoElemento(dados)
removerElementosIntervalo(dados, 1, 2)
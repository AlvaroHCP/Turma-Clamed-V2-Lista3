// import * as ms from "../../meusScripts.js"

function print(a) {
    console.log(a)
}

function soma(a = 0, b = 0) {
    return a + b
}
function subtrai(a = 0, b = 0) {
    return a - b
}
function multiplica(a = 0, b = 0) {
    return a * b
}
function divide(a = 0, b = 1) {
    return a / b
}

function calculadora(funcao, a = 0, b = 1) {
    print(funcao(a, b))
}

calculadora(divide, 5, 2)
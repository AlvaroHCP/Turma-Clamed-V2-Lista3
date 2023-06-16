// import * as ms from "../../meusScripts.js"

function print(a) {
    console.log(a)
}

function Fibonacci(numero = 0) {
    if (numero < 0) {
        print("Digite um número válido!")
    } else {
        let fibonacci = []
        let soma = 0
        let i = 0
        print(`\nA sequência até o número ${numero} é: `)
        while (soma <= numero) {
            fibonacci.push(soma)

            if (i === 0) {
                soma += 1
            } else {
                soma += fibonacci[i - 1]
            }
            i++
        }
        print(fibonacci.join(", ") + "\n")
    }
}

// for (let i = 0; i <= 21; i = i + 3) {
//     Fibonacci(i)
// }

Fibonacci(10)
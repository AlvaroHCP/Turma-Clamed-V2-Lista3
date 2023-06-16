// import * as ms from "../../meusScripts.js"

function print(a) {
    console.log(a)
}

function numeroEPrimo(numero = 0) {
    if (numero < 0) {
        print("Digite um número válido!")
    } else if (numero === 0) {
        print("Digite um número!")
    } else {
        let contador = 0
        let i = 0
        do {
            if (numero % i === 0) {
                contador++
                if (contador > 2) {
                    print(`O número ${numero} não é primo`)
                    return -1
                }
            }
            i++
        } while (i <= numero)
        print(`O número ${numero} é primo`)
        return 1
    }
}

// for (let i = 0; i <= 25; i++) {
//     numeroEPrimo(i)
// }

numeroEPrimo(5)
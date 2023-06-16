// import * as ms from "../../meusScripts.js"

function print(a) {
    console.log(a)
}

function palavrasComMaisDeXLetras(array = [], letras = 5) {
    if (array === []) {
        print("Insira uma lista de palavras!")
    } else {
        let listaResultado = []
        for (const palavra of array) {
            if (palavra.length >= letras) {
                listaResultado.push(palavra)
            }
        }
        print(`\nAs palavras com mais de ${letras} letras são: ${listaResultado.join(", ")}\n`)
    }
}

palavrasComMaisDeXLetras(["Alvaro", "Aline", "Soda", "Marta", "Mar"])
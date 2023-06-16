// import * as ms from "../../meusScripts.js"

// criança (0-12 anos), adolescente (13-17 anos), adulto (18-59 anos) ou idoso (60 anos ou mais)

function print(a) {
    console.log(a)
}

function traduzCor(cor = 0) {
    let corLower = cor.toLowerCase()
    switch (corLower) {
        case 0:
            print("Cor não inserida")
            return 0
        case "red":
            print("A cor " + corLower + " significa: Vermelho.")
            return 1
        case "blue":
            print("A cor " + corLower + " significa: Azul.")
            return 1
        case "green":
            print("A cor " + corLower + " significa: Verde.")
            return 1
        case "yellow":
            print("A cor " + corLower + " significa: Amarelo.")
            return 1
        case "grey":
            print("A cor " + corLower + " significa: Cinza.")
            return 1
        default:
            print("Cor não encontrada.")
            return -1
    }
}

traduzCor("Yellow")

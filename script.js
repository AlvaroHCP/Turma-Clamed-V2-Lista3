// criança (0-12 anos), adolescente (13-17 anos), adulto (18-59 anos) ou idoso (60 anos ou mais)

function print(a) {
    console.log(a)
}

function classificaIdade(idade = 0) {

    if (idade < 0) {
        print("Idade = " + idade + ". Idade incorreta!")
    } else if (idade <= 12) {
        print("Idade = " + idade + ". É criança.")
    } else if (idade <= 17) {
        print("Idade = " + idade + ". É adolescente.")
    } else if (idade <= 59) {
        print("Idade = " + idade + ". É adulto.")
    } else if (idade <= 125) {
        print("Idade = " + idade + ". É idoso.")
    } else if (idade > 125) {
        print("Idade = " + idade + ". É um Matusalém eterno.")
    }
}

// for (i = -1; i <= 130; i++) {
//     classificaIdade(print, i)
// }

classificaIdade(15)
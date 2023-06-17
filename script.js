// import * as ms from "../../meusScripts.js"

function print(a) {
    console.log(a)
}

let dados = [{
    nome: "Coca-Cola",
    preco: 7.20
},
{
    nome: "Guarana Antartica",
    preco: 6.59
},
{
    nome: "farinha de trigo",
    preco: 4.30
},
{
    nome: "fubá",
    preco: 5.50
}]

function nomeEPreco(array) {
    let i = 0
    let precoTotal = 0
    for (const elemento of dados) {
        precoTotal += Number(elemento.preco)
        print(`O produto ${Number(i) + 1} é \"${elemento.nome}\" e custa R$${String(Number(elemento.preco).toFixed(2)).replace(".", ",")}`)
        i++
    }
    print(`\n\nNo total são ${dados.length} produtos cadastrados, e o preço total é R$${String((precoTotal).toFixed(2)).replace(".", ",")}\n`)
}

// function nomeEPreco(array) {
//     let precoTotal = 0
//     for (const elemento in dados) {
//         precoTotal += Number(dados[elemento].preco)
//         print(`O produto ${Number(elemento) + 1} é \"${dados[elemento].nome}\" e custa R$${String((dados[elemento].preco).toFixed(2)).replace(".", ",")}`)
//     }
//     print(`\n\nNo total são ${dados.length} produtos cadastrados, e o preço total é R$${String((precoTotal).toFixed(2)).replace(".", ",")}\n`)
// }

nomeEPreco(dados)


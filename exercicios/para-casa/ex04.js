// 4 - Escreva um programa que pergunte a quantidade de km percorridos por um carro alugado pelo usuário, 
// assim como a quantidade de dias pelos quais o carro foi alugado. Calcule o preço a pagar, 
// sabendo que o carro custa 60,00 reais por dia e 0,15 centavos por km rodado.

let kmPercorridos = 850
let diasAluguelCarro = 15

const valorFinal = (kmPercorridos * 0.15) + (diasAluguelCarro * 60)

console.log(`O valor total a pagar pelo aluguel do carro é de R$ ${valorFinal.toFixed(2)}`)
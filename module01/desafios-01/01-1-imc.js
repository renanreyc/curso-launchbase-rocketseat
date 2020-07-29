//Primerios passos com JS

//  Cálculo de IMC
//      Crie um programa para calcular o IMC e nível de obesidade de uma pessoa.

const nome = "Renan";
const peso = 84;
const altura = 1.87;

const imc = peso / (altura * altura);
if (imc >= 30) {
    console.log(`${nome} você está acima do peso. Seu IMC é ${imc}`)
} else {
    console.log(`${nome} você não está acima do peso. Seu IMC é ${imc}`);
}

// FORMA ALTERNATIVA:

// const nome = 'Carlos'
// const peso = 110
// const altura = 1.88

// const imc = peso / (altura * altura)

// let message = ""

// if (imc >= 30) {
//     message = `${nome} você está acima do peso`
// } else {
//     message = `${nome} você não está acima do peso`
// }

// console.log(message)


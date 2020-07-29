//  Cálculo de aposentadoria
//      Crie um programa para calcular a aposentadoria de uma pessoa:

const nome = "Shely";
const sexo = "F";
const idade = 50;
const contribuicao = 25;

    if (sexo == "M") {
        if ((contribuicao >= 35) || (contribuicao + idade >= 95)) {
        console.log(`${nome}, você pode se aposentar!`)
        } else {
        console.log(`${nome}, você ainda não pode se aposentar!`)
                }
    } else {
        if ((contribuicao >= 30) || (contribuicao + idade >= 85)) {
            console.log(`${nome}, você pode se aposentar!`)
        } else {
            console.log(`${nome}, você ainda não pode se aposentar!`)
                }
    }

// FORMA ALTERNATIVA:

// const nome = 'Silvana'
// const sexo = 'F'
// const idade = 48
// const contribuicao = 23

// const calculoContribuicao = idade + contribuicao

// // essas variáveis irão retornar true ou false
// const homemPodeAposentar = sexo == 'M' && contribuicao >= 35 && calculoContribuicao >= 95
// const mulherPodeAposentar = sexo == 'F' && contribuicao >= 30 && calculoContribuicao >= 85

// if ( homemPodeAposentar || mulherPodeAposentar) {
//     console.log(`${nome}, você pode se aposentar!`)
// } else {
//     console.log(`${nome}, você não pode se aposentar!`)
// }
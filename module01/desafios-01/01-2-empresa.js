//Desafio 1-3: Funções e métodos

//Construção e impressão de objetos
//      Crie um programa que calcula a média:
//      das turmas de alunos e envia
//      mensagem do cálculo da média

const empresa = {
    nome: "Rocketseat",
    cor: "Roxo",
    foco: "Programação",
    endereço: {
        rua: "Rua Vila Nova da Rainha",
        numero: 390
    }
};

console.log(`A empresa ${empresa.nome} está localizada na ${empresa.endereço.rua}, ${empresa.endereço.numero}`)


// //Desafio 1-2: Lidando com objetos e vetores

// //Construção e impressão de objetos
// //      Crie um programa que armazena dados da empresa 
// //      Rocketseat dentro de um objeto chamado empresa. 
// //      Os dados a serem armazenados são:

// const empresa = {
//     nome: "Rocketseat",
//     cor: "Roxo",
//     foco: "Programação",
//     endereço: {
//         rua: "Rua Vila Nova da Rainha",
//         numero: 390
//     }
// };

// console.log(`A empresa ${empresa.nome} está localizada na ${empresa.endereço.rua}, ${empresa.endereço.numero}`)

// FORMA ALTERNATIVA

// const usuario = {
//     nome: 'Diego',
//     empresa: {
//         nome: "Rocketseat",
//         cor: "roxo",
//         foco: "Programação",
//         endereco: {
//             rua: "Rua Guilherme Gembala",
//             numero: 260
//         }
//     }
// }

// console.log(`A empresa ${usuario.empresa.nome} está localizada em ${usuario.empresa.endereco.rua}, ${usuario.empresa.endereco.numero}`)

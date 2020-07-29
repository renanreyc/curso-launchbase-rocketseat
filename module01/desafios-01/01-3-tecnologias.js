//Usuários e tecnologias
    //Crie um programa que armazena um array de usuários (objetos), 
    //cada usuário tem um nome e suas tecnologias (novo array)


const usuarios = [
    { nome: "Renan", tecnologias: ["HTML", "JavaScript"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
];

function informacoes(nome, tecnologias){
    console.log(`${nome} trabalha com ${tecnologias}`)
};

informacoes(usuarios[0].nome, usuarios[0].tecnologias)
informacoes(usuarios[1].nome, usuarios[1].tecnologias)
informacoes(usuarios[2].nome, usuarios[2].tecnologias)

//Busca por tecnologia
    //Crie uma função que recebe os dados de um objeto 
    // de usuário e retorna SE o usuário trabalha com 
    // CSS ou não. Essa função deve retornar um boolean true/false.

function checaSeUsuarioUsaCSS(usuario) {
    // Percorra o array de tecnologias do usuário até encontrar se ele trabalha com CSS
    // SE encontrar, retorne true da função, caso contrário retorne false
    for(let tecnologia of usuario.tecnologias) {
        if (tecnologia == 'CSS') return true
        } return false
    }

    for (let i = 0; i < usuarios.length; i++) {
        const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);
      
        if (usuarioTrabalhaComCSS) {
          console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
        }else {
            console.log(`O usuário ${usuarios[i].nome} não trabalha com CSS`)
        }
    }


/* INDEXOF
function checaSeUsuarioUsaCSS(usuarios) {
    // Percorra o array de tecnologias do usuário até encontrar se ele trabalha com CSS
    // SE encontrar, retorne true da função, caso contrário retorne false
    for(let i = 0; i < usuarios.length; i++){
        const users = usuarios[i].tecnologias

        if(users.indexOf('CSS') >= 0){
            console.log('Achei usuário com CSS')
        } else {
            console.log('Não achei')
        }
    }
}

checaSeUsuarioUsaCSS(usuarios)
*/

//FORMA ALTERNATIVA

// Usuários e tecnologias

// const usuarios = [
//     { nome: 'Carlos', tecnologias: ['HTML', 'CSS'] },
//     { nome: 'Jasmine', tecnologias: ['JavaScript', 'CSS'] },
//     { nome: 'Tuane', tecnologias: ['HTML', 'Node.js'] }
//   ]

// for (let usuario of usuarios) {
//     console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(', ')}`)
// }

// // Busca por tecnologia
// function checaSeUsuarioUsaCSS(usuario) {
//     for (let tecnologia of usuario.tecnologias) {
//         if (tecnologia == 'CSS') return true
//     }

//     return false
// }

// for (let i = 0; i < usuarios.length; i++) {
//     const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i])

//     if(usuarioTrabalhaComCSS) {
//         console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
//     }
// }
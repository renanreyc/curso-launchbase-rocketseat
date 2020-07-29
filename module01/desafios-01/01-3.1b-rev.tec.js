const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
  ];

//  Crie uma função que recebe os dados de um objeto de usuário e retorna 
//  SE o usuário trabalha com CSS ou não. Essa função deve retornar um boolean true/false.


function checaSeUsuarioUsaCSS(usuario) {
    // Percorra o array de tecnologias do usuário até encontrar se ele trabalha com CSS
  // SE encontrar, retorne true da função, caso contrário retorne false
    for (let tecnologia of usuario.tecnologias ) {
        const encontreiTecnologiaCSS = tecnologia == 'CSS'
        if(encontreiTecnologiaCSS) {
            return true;
        }
    }
    return false;
}

for (let i = 0; i < usuarios.length; i++) {
    const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);
  
    if (usuarioTrabalhaComCSS) {
      console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
    } else{
        console.log(`O usuário ${usuarios[i].nome} NÃO trabalha com CSS`);
    }
  }


// for (let usuario of usuarios){
//     const esteUsuarioPossuiCSS = checaSeUsuarioUsaCSS(usuario)  //  executar
//     // esteUsuarioPossuiCSS vai retornar valor de true or false
// }


// 5 coisas que você PRECISA saber sobre funções (iniciantes)
// 1 of 6 - Escrever uma função criar a função 
// 2 of 6 - Saber como enviar um dado para dentro da funcao 
// 3 of 6 - Saber como enviar um para FORA da função 
// 4 of 6 - Saber utilizar a função / executar uma função 
// 5 of 6 - Saber como enviar os dados para dentro da função QUANDO EXECUTAR ELA 
// 6 of 6 - Saber como CAPTURAR o dado enviado de dentro para fora!


// Curiosidade extra que você DEVERIA estar sabendo sobre função
//      Para que serve a função?
//      Para eu não repetir o mesmo código 

//      Qual o seu objetivo?
//      Para eu não repetir o mesmo código

//      Pq eu vou usar função?
//      Para evitar o reuso do mesmo código

//      A função não precisa obrigatóriamente RECEBER ou RETORNAR valores
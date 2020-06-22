const usuarios = [
    { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
    { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
    { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
  ];

//  Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários:

// todo array [] recebe funções e propriedades nativas, eu posso usar a propriedade length para saber quantos elementos eu tenho no meu array
//[].length

for (let usuario of usuarios) { //coloca o let
  console.log(`${usuario.nome} trabalha com ${usuario.tecnologias.join(" e ")}`)
}

/* 1º Forma
for (let i = 0; i < usuarios.length; i++) {
    // console.log(`${usuarios[i].nome} trabalha com `)


  // percorrer a lista de tecnologias
  for(let a = 0; a < usuarios[i].tecnologias.length; a++) {
    if (a == 0) {
      tecnologias = usuarios[i].tecnologias[a]
    } else {
      tecnologias = tecnologias + ", " + usuarios[i].tecnologias[a]
    }

  }
console.log(`${usuarios[i].nome} trabalha com ${tecnologias}`)
  // console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias.join(" e ")}`)
}
*/
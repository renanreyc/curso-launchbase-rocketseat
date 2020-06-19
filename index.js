//Organização, padronização e escrita
const classA = [
    {
        name: "Renan",
        grade: 4
    },
    {
        name: "Italo",
        grade: 2
    },
    {
        name: "Diego",
        grade: 5
    },
    {
        name: "mais um student",
        grade: 7
    }
]

const classB = [
    {
        name: "Raphael",
        grade: 9.8
    },
    {
        name: "Felipy",
        grade: 10
    },
    {
        name: "Siclano",
        grade: 4
    },
    {
        name: 'Novo Aluno',
        grade: 5
    }
]

function calculateAverage(students) {
    let sum = 0

    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade
    }

    const average = sum / students.length

    return average
}

function sendMessage(average, turma) {
    if (average > 5) {
        console.log(`${turma} average: ${average}. Congratulations!`)
    } else {
        console.log(`${turma} average: ${average}. Is not good enough`)
    }
}

function markAsFlunked(student) {
    student.flunked = false

    if (student.grade < 5) {
        student.flunked = true
    }
}

function sendFlunkedMessage(student) {
    if (student.flunked) {
        console.log(`O student ${student.name} está flunked!`)
    }
}

function studentsReprovados(students) {
    for (let student of students) {
        markAsFlunked(student)
        sendFlunkedMessage(student)
    }
}

const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)

sendMessage(average1, 'Class A')
sendMessage(average2, 'Class B')

studentsReprovados(classA)
studentsReprovados(classB)

/* // BOLEANOS
// Criar um programa que calcula a média
// das TURMAS DE ALUNOS students e envia
//mensagem do cálculo da média.

const studentsdaTurmaA = [
    {
        name: "Renan",
        grade: 9
    },
    {
        name: "Italo",
        grade: 2
    },
    {
        name: "Diego",
        grade: 5
    },
    {
        name: "mais um student",
        grade: 2
    }
]

const studentsdaTurmaB = [
    {
        name: "Raphael",
        grade: 9.8
    },
    {
        name: "Felipy",
        grade: 10
    },
    {
        name: "Siclano",
        grade: 4
    },
    {
        name: 'Novo Aluno',
        grade: 5
    }
]


function calculaMedia(students) {
    let sum = 0;
    for (let i = 0; i < students.length; i++) { //i = i + 1 length > número de espaços na array
        sum = sum + students[i].grade
    }
    
    const average = sum / students.length

    return average
}

const average1 = calculaMedia(studentsdaTurmaA)
const average2 = calculaMedia(studentsdaTurmaB)


function enviaMensagem(average, turma) {
    //  Se a média for maior que 5, parabenizar a turma
    if (average > 5) {
        console.log(`A média da turma ${turma} foi de ${average}. Parabéns`)
    } else {
        console.log(`A média da turma ${turma} foi menor que 5`)
    }
}

enviaMensagem(average1, 'A')
enviaMensagem(average2, 'B')

//  Marcar student como flunked se a grade
//  for menor que 5.
//  e, também, enviar uma mensagem

function markAsFlunked(student) {
    student.flunked = false;
    if (student.grade < 5) {
        student.flunked = true;    
    }
}


function sendFlunkedMessage(student) {
    if(student.flunked) {
        console.log(`O student ${student.name} está flunked!`)
    }
}

function studentReprovado(students) {
    for (let student of students) { // para cada 'student' da lista de 'students' faz alguma coisa. Qnd acabar, finaliza o ciclo
        markAsFlunked(student);
        sendFlunkedMessage(student)
    }
}

studentReprovado(studentsdaTurmaA)
studentReprovado(studentsdaTurmaB)
*/

/* ESCOPOS
// Criar um programa que calcula a média
// das TURMAS DE ALUNOS students e envia
//mensagem do cálculo da média.

const studentsdaTurmaA = [
    {
        name: "Renan",
        grade: 8
    },
    {
        name: "Italo",
        grade: 2
    },
    {
        name: "Diego",
        grade: 5
    },
    {
        name: "mais um student",
        grade: 10
    }
]

// const studentsdaTurmaB = [
//     {
//         name: "Raphael",
//         grade: 9.8
//     },
//     {
//         name: "Felipy",
//         grade: 10
//     },
//     {
//         name: "Siclano",
//         grade: 5
//     },
//     {
//         name: 'Novo Aluno',
//         grade: 5
//     }
// ]


function calculaMedia(students) {
    let sum = 0;
    for (let i = 0; i < students.length; i++) { //i = i + 1 length > número de espaços na array
        sum = sum + students[i].grade
    }
    
    const average = sum / students.length

    students[0].bla = "alo"
    return average
}

const average1 = calculaMedia(studentsdaTurmaA)

console.log(studentsdaTurmaA)

// const average2 = calculaMedia(studentsdaTurmaB)


// function enviaMensagem(average, turma) {
//     //  Se a média for maior que 5, parabenizar a turma
//     if (average > 5) {
//         console.log(`A média da turma ${turma} foi de ${average}. Parabéns`)
//     } else {
//         console.log(`A média da turma ${turma} foi menor que 5`)
//     }
// }

// enviaMensagem(average1, 'A')
// enviaMensagem(average2, 'B')
*/

/* Estrutura de repetição
// Criar um programa que calcula a média
// das TURMAS DE ALUNOS students e envia
//mensagem do cálculo da média.

const studentsdaTurmaA = [
    {
        name: "Renan",
        grade: 8
    },
    {
        name: "Italo",
        grade: 2
    },
    {
        name: "Diego",
        grade: 5
    },
    {
        name: "mais um student",
        grade: 10
    }
]

const studentsdaTurmaB = [
    {
        name: "Raphael",
        grade: 9.8
    },
    {
        name: "Felipy",
        grade: 10
    },
    {
        name: "Siclano",
        grade: 5
    },
    {
        name: 'Novo Aluno',
        grade: 5
    }
]

function calculaMedia(students) {
    let sum = 0;
    for (let i = 0; i < students.length; i++) { //i = i + 1 length > número de espaços na array
        sum = sum + students[i].grade
    }
    
    const average = sum / students.length
    return average
}



const average1 = calculaMedia(studentsdaTurmaA)
const average2 = calculaMedia(studentsdaTurmaB)


function enviaMensagem(average, turma) {
    //  Se a média for maior que 5, parabenizar a turma
    if (average > 5) {
        console.log(`A média da turma ${turma} foi de ${average}. Parabéns`)
    } else {
        console.log(`A média da turma ${turma} foi menor que 5`)
    }
}

enviaMensagem(average1, 'A')
enviaMensagem(average2, 'B')
*/

/* Funções e métodos
// Criar um programa que calcula a média
// das TURMAS DE ALUNOS students e envia
//mensagem do cálculo da média.

const studentsdaTurmaA = [
    {
        name: "Renan",
        grade: 8
    },
    {
        name: "Italo",
        grade: 2
    },
    {
        name: "Diego",
        grade: 5
    }
]

const studentsdaTurmaB = [
    {
        name: "Raphael",
        grade: 9.8
    },
    {
        name: "Felipy",
        grade: 10
    },
    {
        name: "Siclano",
        grade: 5
    },
]

function calculaMedia(students) {
    return (students[0].grade + students[1].grade + students[2].grade) / 3 
}

const average1 = calculaMedia(studentsdaTurmaA)
const average2 = calculaMedia(studentsdaTurmaB)


function enviaMensagem(average, turma) {
    //  Se a média for maior que 5, parabenizar a turma
    if (average > 5) {
        console.log(`A média da turma ${turma} foi de ${average}. Parabéns`)
    } else {
        console.log(`A média da turma ${turma} foi menor que 5`)
    }
}

enviaMensagem(average1, 'A')
enviaMensagem(average2, 'B')
*/

/* OBJETOS E VETORES
// Criar um programa que calcula a média
// das grades entre os students e envia
//mensagem do cálculo da média.

const students = [
    {
        name: "Renan",
        grade: 9.8
    },
    {
        name: "Italo",
        grade: 2
    },
    {
        name: "Diego",
        grade: 5
    }
]

const namesdeAlunos = ["Renan", "Italo", "Fulano"]
console.log(namesdeAlunos[1]);

const average = (students[0].grade + students[1].grade + students[2].grade) / 3 
if (average > 5) {
    console.log(`A média foi de ${average}. Parabéns`)
} else {
    console.log('A média é menor que 5')
}
*/

/* OBJETOS

const student1 = {
    name: "Renan",
    grade: 9.8
}

const student2 = {
    name: "Italo",
    grade: 2
}

const student3 = {
    name: "Diego",
    grade: 5
}
const average = (student1.grade + student2.grade + student3.grade) / 3 
*/

// Se a média for maior que 5, parabenizar a turma



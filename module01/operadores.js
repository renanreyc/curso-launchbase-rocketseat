/* =================================================

    OPERADORES DE COMPARAÇÃO

    >   Maior
    <   Menor
    >=  Maior ou igual a
    <=  Menor ou igual a
    ==  igual a
    === Igual e do mesmo tipo
    !=  Diferente de
    !== Diferente, inclusive do tipo

====================================================*/

// console.log( 5 > 4 ) // true;false (boolean)
// console.log( 5 < 4 ) //false
// console.log( 5 >= 4 ) //true
// console.log( 4 <= 4 ) //true

// console.log( 4 == "4" ) // true
// console.log( 5 === "4" ) //false
// console.log( 4 != "5" ) //true
// console.log( 4 !== "4" ) //true

//DESAFIO 1
// const idade = 16

//verificar se a pessoa é maior ou igual a 18 anos
    // console.log(idade >= 18)

//se sim, deixar entrar, se não, bloquear a entrada
// if(idade >= 18) {
    // console.log('Deixar entrar')
// } else {
    // console.log('Bloquear a entrada')
// }

//se a pessoa tiver 17 anos
// const idade2 = 17

//avisar para voltar quando fizer 18 anos
// if (idade2 ===17) {
    // console.log('Volte quando tiver 18')
// }

/* ===============================================
    OPERADORES LÓGICOS

    &&  "E" As duas condições devem ser verdadeiras
        para que a condição final seja verdadeira.
        "OU" Uma das condições deve ser verdadeira 
        para que a condição final eja verdadeira.
        "NÃO" Nega uma condição

==================================================*/

// console.log(5 == 5 && 6 == 6) // true
// console.log(5 == 5 && 6 != 6) // false

// console.log(5 != 5 || 6 == 6) // true
// console.log(5 == 5 || 6 != 6) // true

// console.log(!(5 > 6)) // true ~ negando o false, se torna true
// console.log(!(5 < 6)) // false ~ o que era vdd, transformo em falso

//DESAFIO 2
const idade = 18

//verificar se a pessoa é maior ou igual a 18 anos
//se sim, deixar entrar, se não, bloquear a entrada

if(!(idade >= 18) || idade === 17) { //a primeira parte do & é falso mas tá sendo transformado em verdadeiro
    console.log('Bloquear a entrada')
} else {
    console.log('Deixar entrar')
}

/* ========================================================
    OPERADORES ARITMÉTICOS
    *   Multiplicação
    /   Divisão
    %   Resto da divisão
    +   Adição
    -   Subtração

==========================================================*/

console.log(2 * 2) //4
console.log(2 / 2) //1
console.log(2 % 1.5) //4
console.log(2 + 2) //4
console.log(2 - 2) //0

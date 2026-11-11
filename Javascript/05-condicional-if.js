// Estruturas condicionais permitem que o programa tome decisões com base em determinadas condições/regras

// if - Se
// O if executa um bloco de código se uma condição for verdadeira
// Estrutura de um IF

/* 
if(condição/regra){
    bloco de código que será executado caso a condição/regra seja verdadeira
}
*/

let saldo = 20;

// if simples
if ( saldo > 5.30 ) {
    console.log("Passagem liberada.");
    console.log("Foram debitados R$5.50 do seu saldo.");
}

// if/else
/* 
if(condição/regra){
    bloco de código que será executado caso a condição/regra seja verdadeira
} else {
    bloco de código que será executado caso a condição/regra seja falsa
}
*/
console.log("**** IF/ELSE ****")

saldo = 4.99;

// if composto
if (saldo > 5.30) {
    console.log("Passagem liberada.");
    console.log("Foram debitados R$5.50 do seu saldo.");
} else {
    console.log("Saldo insuficiente.")
}

console.log("**** IF/ELSE - Exe 2: ****")
// Utilizamos essa estrutura quando queremos/precisamos dar uma resposta alternativa caso a condição não seja atendida.

const estaChovendo = true;

if(estaChovendo){
    console.log("Levar o guarda-chuva.");
} else{
    console.log("Pode sair sem o guarda-chuva");
}

console.log("**** IF...ELSE IF ****")
// Utilizamos essa estrutura, quando temos várias possibilidades, ou seja, quando queremos testar condições adicionais.
const nota = 4;

if(nota >= 8){
    console.log("Excelente");
} else if( nota >= 6 ){
    console.log("Aprovad@");
} else if (nota >= 4){
    console.log("Recuperação");
} else{
    console.log("Reprovad@");
}


// APLICANDO OPERADORES LÓGICOS
console.log("**** OPERADORES LÓGICOS ****");

// Operador && - AND (e)
console.log("**** && - AND ****");
const idade = 18;
const temIngresso = true;

if(idade >= 18 && temIngresso){
    console.log("Bem vind@. Entrada permitida!");
} else {
    console.log("Entrada não permitida!");
}


// Operador || - OR(ou)
console.log("**** || - OR ****");

const ehAdmin = false;
const ehModerador = false;

if(ehAdmin || ehModerador){
    console.log("Acesso ao painel permitido.");
} else {
    console.log("Acesso não permitido!");
}

console.log("**** || - OR (Ex: 2)****");

const temCupom = true;
const clienteFiel = false;

if (temCupom || clienteFiel) {
    console.log("Você ganhou um desconto!")
} else {
    console.log("Sem desconto dessa vez!");
}

// Operador ! - NOT(Não)
console.log("**** ! - NOT(não) ****");

const estaLogada = false;

if (!estaLogada) {
    console.log("Faça login para continuar!")
} else{
    console.log("Seja bem vind@ ao Instagram.")
}

const aceitouTermos = true;
if (!aceitouTermos) {
    console.log("Você precisa aceitar os termos!")
}

let menuAberto = false;
if (!menuAberto) {
    console.log("Abrir menu!");
}

// Combinando operadores lógicos
const estaLogado = true;
const contaBloqueada = true;
const ehVisitante = false;

if(estaLogado && !contaBloqueada && !ehVisitante){
    console.log("Bem vind@ ao seu banco!");
}else {
    console.log("Acesso não permitido!");
}
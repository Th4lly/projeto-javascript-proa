// O javascript possui 8 tipos de dados, sendo 7 deles, os tipos primitivos:
// TIPOS PRIMITIVOS - Dados básicos da linguagem

//regras para nomear variaveis 
//nomes válidos 
let sobrenome;
let idadeUsuario;
let nomeCompleto;
let _total;
let $preço;
let quantidade1;

//sempre letras minusculas com exceção de frases compostos

//nomes inválidos

//let 1nome; /*não pode começar com número */
//let nome-completo; /*não pode ter hífen(-)*/
//let var; /*não pode usar palavras reservadas da linguagem*/
//let nome completo; /*não pode ter espaço*/


// 1 - String (cadeia de caracteres) 
// é uma sequência de caracteres, representado entre aspas simples ou duplas.
// OU seja, nomes, mensagens, endereços, emails e textos em geral.

const nome = "Thallyta"; // String
const sobrenome = 'Da Silva'; // String
const cidade = "São Paulo"; // String
const mensagem = "Olá, tudo bem?"; // String

console.log(nome);
console.log(sobrenome);
console.log(cidade);
console.log(mensagem);

// 2 - Number (números)
// o javascript usa o tipo number para números inteiros e decimais, positivos e negativos.

const idade = 30;
const altura = 1.75;
const preço = 19.99;
const temperatura = -5.98;

console.log(idade);
console.log(altura);
console.log(preço);
console.log(temperatura);

// 3 - bigint (números inteiros muito grandes)
// o tipo bigint é usado para representar números inteiros muito grandes com precisão, que ultrapassam o limite do tipo number.

const numeroGrande = 123456789012345678901234567890n;
console.log(numeroGrande);

// não pode usar - para declarar um bigint, apenas n no final do número que serve para indicar que o numero deve ser tratado como bigint
//não posso começar o nome da variavel com número
//como boa prática usan maiusculas para separar palavras no nome da variavel, exemplo: numeroGrandeDemais

// 4 - Boolean (booleano)
//tudo usa boolean 
// O tipo boolean representa apenas dois valores:
// true - verdadeiro (1) 
// false - falso (0)

// É muito utilizado para verificar condições, controlar funcionalidades e representar dados.

const estalogado = true
const temPermissao = false

console.log(estalogado);
console.log(temPermissao);

// 5 - Undefined (indefinido)
// É comum encontrar quando uma variável foi declarada sem receber valor inicial
let fruta; // variável declarada, mas não inicializada, caixa vazia
console.log(fruta); // undefined

// 6 - Null (nulo)
// Representa a ausência intencional de um valor
// No exemplo abaixo, estamos indicando de forma explícita que a variável não possui valor atribuído, ou seja, está vazia.
let fotoPerfil = null; // variável declarada e inicializada com valor nulo
console.log(fotoPerfil); // null

fotoPerfil = "foto-perfil.png"; // variável atualizada com valor
console.log(fotoPerfil); // foto-perfil.png

// 7 - Symbol (símbolo)
// O tipo Symbol é usado para criar identificadores únicos e imutáveis.
// faz sentido prestar atenção no symbol quando se trabalha com framework como react, vue, angular, etc. pois eles usam muito o symbol para criar identificadores únicos para componentes, propriedades e eventos.
const id1 = Symbol("id");
const id2 = Symbol("id");

console.log(id1 === id2); // false, pois cada símbolo é único


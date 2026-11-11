// Variáveis = são identificadores que nos permitem acessar valores durante a execução de um programa.

//pense em uma caixa etiquetada
// a etiqueta é o nome da variavel
// o conteúdo da caixa é o valor que ela representa

// o javascript possui 3 forma de declarar variáveis.
//declaração nomedavariavel = valor da variavel

// 1 - const 
//utilizamos essa declaração de const quando não pretendemos atribuir outro valor a nossa variavel depois de inicializar.

const nome = "Thallyta"; // não pode ser alterada
console.log(nome);


//2 - let
//utilizamos essa declaração quando o valor da variavel precisar ser alterado ao longo do programa.

let pais = "Brasil"; //pode ser alterada
console.log(pais);

// reatribuindo um valor a variavel 
pais = "mexico";
console.log(pais);

pais = "frança";
console.log(pais);

// 3 - var (NÃO RECOMENDADO)
// É a forma antiga de declarar variáveis, e não é recomendada para uso em projetos modernos, pois pode levar a problemas de escopo e manutenção do código.

var cidade = "São Paulo"; //pode ser alterada
var idade = 56; 

cidade = "Rio de Janeiro";
idade = 30;


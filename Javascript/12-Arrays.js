// Os arrays nos permitem agrupar/armazenar vários valores em uma única estrutura, formando uma LISTA. Essa lista é organizada de forma ordenada.

// Arrays e objetos trabalham juntos o tempo todo, pois os arrays são utilizados para armazenar listas de valores, enquanto os objetos são utilizados para armazenar informações relacionadas a um único valor.

// É comum encontrarmos essa combinação em API´s, React, Nodejs, sistemas de cadastro, lojas online, literalmente qualquer aplicação da web.

// Exemplo sem arrays (Elementos)
let aluno1 = "Rafaela";
let aluno2 = "Adrielli";
let aluno3 = "Thomas";
let aluno4 = "Vanessa";
let aluno5 = "Adail";


// Exemplo com arrays
// A sintaxe do array no javascript é com brackets - []
let alunos = ["Rafaela", "Adrielli", "Thomas", "Vanessa", "Adail"];
console.log(alunos);

//Acessando informações de um array 
console.log("--- Acessando valores ---");
console.log(alunos[2]); // Thomas / índices (Posições)
console.log(alunos[3]); // Vanessa / índices (Posições)

// Acessando uma posição vazia do array 
console.log(alunos[7]);

console.log("--- Descobrindo tamanho do array ---");
console.log(alunos.length); //(lenght - tamanho)

// Modificando valores de um array
console.log("--- Modificando valores ---");
alunos[2] = "Giulia Hortelã";
console.log(alunos);

// Métodos para arrays
const frutas = ["Banana", "Maçã",];

// 1 - Push()
// Adiciona um elemento no FINAL da lista
frutas.push("Pêra");
console.log(frutas);

// 2 - inshift()
// Adiciona um elemento no INÍCIO da lista
frutas.unshift("Morango");
frutas.unshift("Manga");

// 3 - pop()
// Remove o ÚLTIMO elemento da lista

frutas.pop();

// 4 - shift()
// Remove o PRIMEIRO elemento da lista
frutas.shift();

// Iterando/Percorrendo arrays

console.log("--- Iterando sobre um arrays ---");
console.log("--- Laço for---");

for (let index = 0; index < frutas.length; index++) {
   const element = frutas[index];
   console.log(element);
}

for (let index = 0; index < alunos.length; index++) {
    const element = alunos[index];
    console.log(element);
}   

// trabalhasse com for quando preciso acessar o elemento e a posição do elemento, mas quando eu só preciso acessar o elemento, eu posso utilizar o for of.


console.log("--- Laço for....of---");
// for of - só usar quando eu só preciso acessar o elemento, e não a posição do elemento

for (let element of frutas){
    console.log(frutas);
}

//includes() - verifica se o elemento existe no array, retornando true ou false
console.log(frutas.includes("banana")); // true
console.log(frutas.includes("Uva")); // false

console.log("--- indexOf() ---");

//indexOf() - retorna a posição do elemento no array, caso não exista, retorna -1
console.log(frutas.indexOf("Maçã")); // 1
console.log(frutas.indexOf("Uva")); // -1

// javascript trata elementos que não existem como -1, e elementos que existem como 0 ou maior que 0. Então, podemos utilizar o indexOf() para verificar se o elemento existe no array, retornando true ou false.

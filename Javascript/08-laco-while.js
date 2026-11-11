// o do...while é uma estrutura de repetição que nos permite executar um bloco de código pelo menos UMA VEZ antes de avaliar a condição.

/* 
    estrutura do laço do...while

    do{
        bloco de código que será executado pelo menos uma vez
    } while( condição );

    do - serve para indicar o inicio do bloco de código que será executado.
    while - serve para verificar a condição e decidir se o bloco de código será executado novamente
*/

// Exemplo simples

// Inicialização
let contador = 1;

do {
    console.log(contador);
    
    // Atualização
    contador++

        // condição
} while (contador <= 10);


// Exemplo prático
let nome;

do {
    nome = prompt("Digite seu nome: ");

    console.log(nome);
} while (nome === null || nome.trim() === "");

alert(` Olá, ${nome}`);

// nome === null - Aqui, estamos verificando se o usuário clicou em cancelar. Geralmente, ao realizar essa ação, o prompt devolve o valor null. Se não tratarmos isso, podemos ter erros inesperados.

// nome.trim() - O trim() é um método do JavaScript que permite remover espaços em branco do texto. Ex: "     Olá     "
// Os espaços serão removidos, preservando apenas o conteúdo em si. 
// Além disso, também garantimos que o usuário não deixou o campo em vazio.
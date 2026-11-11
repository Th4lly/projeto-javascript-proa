// Laços de repetição(loops) são estruturas que nos permitem executar um bloco de código várias vezes, sem precisarmos escrever o mesmo código repetidamente.

// 1 - For
// Utilizamos esse laço de repetição quando sabemos quantas repetições o programa precisa executar, ou, quando precisamos trabalhar com sequencias numericas.

/* 
    for(inicialização; condição; atualização){
        bloco de código que será executado
    }
*/

for(let inicio = 0; inicio <= 10 ; inicio++){
    console.log(inicio);
}

console.log("---- Tabuada ----")
// Exemplo prático
const numeroTabuada = prompt("Digite um número para ver a tabuada: ");

for(let inicio = 1; inicio <= 10; inicio++){
    const resultadoTabuada = numeroTabuada * inicio
    const mensagemResultado = `${numeroTabuada} x ${inicio} = ${resultadoTabuada}`

    console.log(mensagemResultado);
}
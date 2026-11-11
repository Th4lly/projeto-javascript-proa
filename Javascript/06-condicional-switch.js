// o switch/case é uma estrutura condicional usada para comparar o mesmo valor com várias possibilidades diferentes.

const dia = 31;

switch(dia){
    case 29:
        console.log("Tema escuro no site...");
        break;

    case 30:
        console.log("Animação de scroll no site");
        break;

    case 31:
        console.log("Cupons de dia das bruxas liberado no site")
        break;
}

// Exemplo prático
const opcao = prompt("Escolha uma opção abaixo:  \n 1 - Consultar saldo \n 2 - Realizar saque \n 3 - Realizar depósito");

switch(opcao){
    case "1":
        alert("Consultando o saldo...");
        break;
    case "2":
        alert("Realizando o saque...");
        break;
    case "3":
        alert("Depósito em andamento...");
        break;
    default:
        alert("Opção inválida. Tente novamente!");
}
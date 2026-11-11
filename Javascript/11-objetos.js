
// Os objetos são uma estrutura de dado que nos permite armazenar várias informações relacionadas dentro de uma ÚNICA variavel

/*
    const objeto = {
      key: value,
      chave: valor,
      propriedade: valor,
      outraPropriedade: outroValor
    }
*/

// Exemplo de aplicação
let nome = "Vanessa";
let sobrenome = "da Silva";
let idade = 19;
let email = "vanessa@gameplay.com"
let curso = "JavaSctipt";
let matriculada = true;

// ao invês de criar varias e varias variaveis, a gente agrupa dentro de uma unica const variavel chamada de objeto

const aluna = {
    nome: "Vanessa",
    sobrenome: "da Silva",
    idade: 19,
    email: "vanessa@gameplay.com",
    curso: "JavaScript",
    matriculada: true
}

// Acessando informações de um objeto
// 1 - Notação de pomto (dot notation)

console.log(aluna.nome);

console.log("------Acessando Informação----------------------------");

// Acessando informações de um objeto 
// 1 - Notação de ponto "." (dot notation)

console.log(aluna.nome);
console.log(aluna.email);

// 2 - Notação de colchetes [] - (Bracket notation)

console.log(aluna["nome"]);

console.log("------Acessando Informação-------------------------");

// Modificando informações de um objeto

aluna.email = "thomas12@exemplo.com";

console.log(aluna);

console.log("------Acessando Informação------------------------------");

// Adicionando informações a um objeto

// Com o dot notation - Notação de ponto "."

aluna.nota = 8.0;

// Com o bracket notation - Notação de colchetes []

aluna["cidade"] = "São Paulo";

console.log("------Acessando Informação------");

// Removendo informações de um objeto

delete aluna.cidade;

// Objetos com funções (métodos)


console.log("----------- objetos com métodos -----------------------");

const pessoa = {
    nome: "Thomas",
    idade: 19,

    apresentar: function () {
        console.log("skkkkk, léticia né?");
        
    }
}

pessoa.apresentar()

console.log("----------- objetos com aninhados -----------------------");

const aluno = {
    nome: "Maria",
    sobrenome: "da Silva",
    idade: 19,
    
    endereco: {
        cidade: "São paulo",
        estado: "SP",
        bairro: "Carrão",
        cep: "11111-111",
        coordenadas: {
            latitude: "-213.564",
            longitude: "-546.653"
        }
    }
}

console.log(aluno.endereco.cidade);

console.log(aluno.endereco.coordenadas.latitude);

// Exemplos reais (nem tanto)
// Simulando resposta da API

const clima = {
    cidade: "São Paulo",
    temperatura: 19,
    umidade: 80,
    vento: 20
}

console.log(`
    cidade: ${clima.cidade}
    Temperatura atual: ${clima.temperatura}C
    umidade: ${clima.umidade} | vento: ${clima.vento}km/h
`);

// métodos úteis para manipular objetos

console.log("----------- métodos para objetos -----------------------");

const produto = {
    nome: "Notebook",
    preco: 2500,
    estoque: 15,
    marca: "Dell",
    disponivel: true
};

// 1 - objects.keys ()
// Object.keys() - Retorna uma lista(array) com as chaves(propriedades) de um objeto
console.log(Object.keys(produto));

// 2 - object.value()
// retorna uma lista (array) com os valores de um objeto

console.log(Object.values(produto));

// 3 - Object.entries()
// retorna uma lista(array) contendo os pares de chave e valor dentro de uma outra lista para cada par.

console.log(Object.entries(produto));

// Iterando sobre um objeto
console.log("----------- Iterando sobre um objeto com for/in-----------------------");

/*
 for(let propriedade in produto) {
     bloco de codigo que será executado para cada propriedade do objeto
}
*/

for(const propriedade in produto) {
    console.log(propriedade);
}

// for/in com acesso aos valores
for (const propriedade in produto){
    console.log(produto[propriedade]);
}

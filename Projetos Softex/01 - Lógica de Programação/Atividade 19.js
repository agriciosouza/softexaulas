class Pessoa {
    constructor(nome, idade, filho = null) {
        this.nome = nome;
        this.idade = idade;
        this.filho = filho;
    }
}

// Criando as pessoas
const pessoa1 = new Pessoa("João", 40);
const pessoa2 = new Pessoa("Maria", 35);
const pessoa3 = new Pessoa("Pedro", 12);

// Estabelecendo as referências aos filhos
pessoa1.filho = pessoa3;
pessoa2.filho = pessoa3;

// Montando a lista encadeada
pessoa1.filho = pessoa2;

// Exibindo a lista encadeada
let pessoaAtual = pessoa1;
while (pessoaAtual !== null) {
    console.log(`Nome: ${pessoaAtual.nome}, Idade: ${pessoaAtual.idade}`);
    if (pessoaAtual.filho !== null) {
        console.log(`Filho: ${pessoaAtual.filho.nome}`);
    }
    pessoaAtual = pessoaAtual.filho;
}

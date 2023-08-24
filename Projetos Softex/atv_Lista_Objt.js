//1 - Como você cria um objeto vazio em JavaScript?

const objetoVazio = {};

//2 -  Como você adiciona a propriedade "nome" com o valor "João" a um objeto chamado "pessoa"?

const pessoa {} // Cria o objeto vazio
pessoa.nome = "João" //Adiciona a propriedade "nome" com o valor "João" Agora o objeto "pessoa" terá a propriedade "nome" com o valor "João".


//3 - Como você acessa o valor da propriedade "idade" de um objeto chamado "usuario"?


const usuario = {
  idade: 25 // Exemplo de propriedade "idade" com um valor
};
    const idadeUsuario = usuario.idade // Acessa o valor da propriedade "idade"

//Agora a variável idadeDoUsuario contém o valor da propriedade "idade" do objeto "usuario" Nesse exemplo, idadeDoUsuario conterá o valor 25, que é o valor da propriedade "idade" no objeto "usuario".

// 4 - Suponha que você tenha um objeto "produto" com a propriedade "preco" definida como 50. Como você altera o valor dessa propriedade para 75?

const produto = {
   preco: 50
 };
 produto.preco = 75;
 
 console.log("o Valor do produto é 75")

// 5 - Como você remove a propriedade "email" de um objeto chamado "contato"?

const contato = {
   nome: "Fulano",
   email: "fulano@example.com",
   telefone: "123456789"
 };
 
 delete contato.email;

console.log(contato)

//6 - Como você adiciona uma propriedade "endereco" com o valor "Rua A, 123" a um objeto existente chamado "cliente"?

const cliente = {
   nome: "Cliente Exemplo",
   idade: 30
 };
 
 cliente.endereco = "Rua A, 123" // Adiciona a propriedade "endereco" com o valor

 console.log(cliente)

// Agora o objeto "cliente" possui a propriedade "endereco" com o valor "Rua A, 123" Isso adicionará a propriedade "endereco" com o valor "Rua A, 123" ao objeto "cliente", mantendo as propriedades existentes.


// 7 - Se você tem um objeto "empresa" com uma propriedade "departamentos", como você acessa o nome do primeiro departamento?

const empresa = {
   departamentos: [
     { nome: "Recursos Humanos" },
     { nome: "Marketing" },
     { nome: "Vendas" }
   ]
 };
 
 const primeiroDepartamento = empresa.departamentos[0].nome; // A variável "primeiroDepartamento" agora contém o nome do primeiro departamento ("Recursos Humanos")

 //Nesse exemplo, empresa.departamentos[0] acessa o primeiro objeto do array de departamentos, e .nome então recupera o valor da propriedade "nome" desse objeto, que é o nome do primeiro departamento.


// 8 - Suponha que você tenha um objeto "aluno" com a propriedade "notas" contendo [85, 90, 78]. Como você altera a segunda nota para 95?

const aluno = {
  notas: [85, 90, 78]
};

aluno.notas[1] = 95 // Altera a segunda nota (índice 1) para 95

console.log(aluno)
// Agora o array de notas no objeto "aluno" será [85, 95, 78]

// 9 - Se você tem um objeto "dados" com uma propriedade "valores" contendo [10, 20, 30], como você remove o segundo valor (20) desse array?

const dados = {
    valores: [10, 20, 30]
  };
 
dados.valores.splice(1, 1); // Remove o elemento no índice 1 (segundo valor)

console.log(dados)

// 10 - Como você cria um objeto com as propriedades "titulo" (com o valor "Livro") e "autor" (com o valor "Maria")?

const livro = {
   titulo: "Livro",
   autor: "Maria"
 };
 console.log(livro)

//Dessa forma, você cria um objeto chamado "livro" com as propriedades "titulo" e "autor", tendo os valores "Livro" e "Maria", respectivamente.



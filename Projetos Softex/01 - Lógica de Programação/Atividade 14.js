let nomeCompleto ,  anoNascimento , anoAtual  , verAnoNascimento;
anoAtual = new Date().getFullYear();
verAnoNascimento = false ;

function idade(){
    return anoAtual - anoNascimento ; 
}

nomeCompleto = require('readline-sync').question('entre com o seu nome: \n');
while(verAnoNascimento == false){
    try{
        anoNascimento = parseInt(require('readline-sync').question('entre com o ano do seu nascimento: \n'));
        if (isNaN(verAnoNascimento) == false){
            if (anoNascimento >= 1922 && anoNascimento <= 2021){
                verAnoNascimento = true ; 
            } else {
                verAnoNascimento = false ;
                throw new Error('Ano nascimento inválido, deve ser entre 1922 e 2021. Digite novamente!!! \n')
            }
        }
    } catch(error){
        console.log(error);
        
    }
} 

console.log(`Seu nome é: ${nomeCompleto}, e em ${anoAtual} você está ou estará com  ${idade()}`);

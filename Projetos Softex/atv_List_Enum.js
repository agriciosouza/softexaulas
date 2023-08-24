//1 - Suponha que você está desenvolvendo um aplicativo de agendamento e precisa representar os dias da semana. Como você usaria enums para isso e qual seria o benefício?

const diasDaSemana = {
   DOMINGO: "Domingo",
   SEGUNDA: "Segunda-Feira",
   TERCA: "Terça-Feira",
   QUARTA: "Quarta-Feira",
   QUINTA: "Quinta-Quinta",
   SEXTA: "Sexta-Feira",
   SABADO: "Sábado"
 };
 console.log(diasDaSemana.SEXTA) //Saída = Sexta-Feira

// 2 - Você está construindo um jogo e precisa representar os diferentes tipos de inimigos. Como você usaria enums para essa situação?

// Criando inimigos usando os tipos definidos
 class Enemy {
   constructor(type) {
     this.type = type;
     // Outras propriedades e métodos do inimigo...
   }
 }
 
 const goblin = new Enemy(EnemyTypes.GOBLIN);
 const orc = new Enemy(EnemyTypes.ORC);
 const dragon = new Enemy(EnemyTypes.DRAGON);
 
 console.log(goblin.type); // Saída: "Goblin"
 console.log(orc.type);    // Saída: "Orc"
 console.log(dragon.type); // Saída: "Dragon


//3 - Você está criando um aplicativo de reserva de passagens aéreas e precisa representar os diferentes tipos de classe (Econômica, Executiva, Primeira Classe). Como você usaria enums para isso?



const ClasseDePassagem = {
   ECONOMICA: 'Econômica',
   EXECUTIVA: 'Executiva',
   PRIMEIRA_CLASSE: 'Primeira Classe'
 };
// Exemplo de uso
const tipoDeClasse = ClasseDePassagem.EXECUTIVA;
console.log(`Tipo de classe selecionado: ${tipoDeClasse}`)


// 4 - Imagine que você está desenvolvendo um aplicativo de tarefas e deseja categorizar as tarefas em "Trabalho", "Estudo" e "Lazer". Como você usaria enums para esse cenário?

public enum CategoriaTarefa {
   TRABALHO,
   ESTUDO,
   LAZER
}
private String descricao;
    private CategoriaTarefa categoria;

    public Tarefa(String descricao, CategoriaTarefa categoria) {
        this.descricao = descricao;
        this.categoria = categoria;
    }

    // Getters e setters

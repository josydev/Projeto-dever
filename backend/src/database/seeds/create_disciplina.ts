import Knex from 'knex';


export async function seed(knex: Knex) {

    //Colocamos um await  porque o nosso insert demora um pouco e nós queremos que a nossa requisição aguarde ele finalizar

    await knex('disciplinas').insert([

    //Cada um desses objetos é um registro dentro da tabela isso {} significa um objeto
    { nome: 'Algoritmos e Programação de Computadores'}, 
    { nome: 'Banco de Dados'}, 
    { nome: 'Probabilidade e Estatística'}, 
    { nome: 'Inteligência Artificial'},
    { nome: 'Empreendimentos em Informática'},
    { nome: 'Administração e Negócios'}

]);

}


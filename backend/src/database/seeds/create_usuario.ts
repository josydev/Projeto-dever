import Knex from 'knex';


export async function seed(knex: Knex) {

    await knex('usuarios').insert([

    { matricula: 'admin', nome: 'admin', senha: 'admin'}, 
    { matricula: '20171', nome: 'Maria Lopes', senha: '123'}


]);

}

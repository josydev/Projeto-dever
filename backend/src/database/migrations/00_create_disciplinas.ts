import Knex from 'knex';

export async function up(knex: Knex) {
    //CRIAR A TABELA
    return knex.schema.createTable('disciplinas', table => {
        table.increments('id').primary();
        table.string('nome').notNullable();
    });
}

export async function down (knex : Knex) {
    return knex.schema.dropTable('disciplinas');
}

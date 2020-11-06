import Knex from 'knex';

export async function up(knex: Knex) {
    //CRIAR A TABELA
    return knex.schema.createTable('usuarios', table => {
        table.increments('id').primary();
        table.string('matricula').unique().notNullable();
        table.string('nome').notNullable();
        table.string('senha').notNullable();
    });
}

export async function down (knex : Knex) {
    return knex.schema.dropTable('usuarios');
}


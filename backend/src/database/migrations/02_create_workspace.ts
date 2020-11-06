import Knex from 'knex';

export async function up(knex: Knex) {
    //CRIAR A TABELA
    return knex.schema.createTable('workspace', table => {
        table.increments('id').primary();
        table.string('titulo').notNullable();
        table.integer('FkIdUsuarios').references('id').inTable('usuarios');
    });
}

export async function down (knex : Knex) {
    return knex.schema.dropTable('workspace');
}

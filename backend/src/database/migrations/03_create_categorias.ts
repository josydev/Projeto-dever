import Knex from 'knex';

export async function up(knex: Knex) {
    //CRIAR A TABELA
    return knex.schema.createTable('categorias', table => {
        table.increments('id').primary();
        table.string('titulo').notNullable();
        table.integer('FkIWorkspace').references('id').inTable('workspace');
    });
}

export async function down (knex : Knex) {
    return knex.schema.dropTable('categorias');
}


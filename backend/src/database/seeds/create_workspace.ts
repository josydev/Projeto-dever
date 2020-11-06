import Knex from 'knex';


export async function seed(knex: Knex) {

    await knex('workspace').insert([

    { titulo: 'admin', FkIdUsuario: 1}, 
    { titulo: 'Sua Workspace', FkIdUsuario: 2}

]);

}


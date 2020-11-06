import path from 'path';


/** Porque estamos escrevendo com modules.exports , porque ese arquivo, mesmo sendo um arquivo typescript nós não podemos escrever com a sitaxe export default, porque infelizmente o knex não suporta ainda essa sintaxe. */

module.exports = {
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite'),
    },

    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations'),
    },

    seeds: {
        directory: path.resolve(__dirname, 'src', 'database', 'seeds'),
    },

    useNullAsDefault: true,

};
/**
 * PostgreSQL DB Setting
 */
const { Pool, Client } = require("pg"); //PostgreSQL

const pool = new Pool({
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    port: process.env.SQL_PORT,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD
});

/*  Example:
        /client can run
    try {
        await client.connect();
        const result = await client.query(query);
        await client.end();
        .....
    } catch (error) {}
*/
const client = new Client({
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    port: process.env.PGPORT,
    user: process.env.SQL_PORT,
    password: process.env.PGPASSWORD
});


module.exports = {
    pool, client
};
// module.exports = {
//     query: (text, params) => pool.query(text, params),
//     connect: () => client.connect(),
//     end: () => client.end(),
// };
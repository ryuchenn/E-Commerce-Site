//////////////////////////
/// PostgreSQL DB Setting
//////////////////////////

const { Pool } = require("pg"); //PostgreSQL
const pool = new Pool();

module.exports = {
    query: (text, params) => pool.query(text, params),
};
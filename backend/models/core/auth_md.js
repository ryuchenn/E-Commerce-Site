/**
 * Auth Model
 */
const { client, pool} = require('../../config/DB_Setting');

/** 
 * Register
 * @email 'xxxx@xxx.xxx'
 * @username 5~15 characters
 * @returns  - return the data SELECT from AppUser 
 */
const findUserByEmailOrUsername = async (email, username) => {
    const query = 'select * from AppUser where email = $1 or username = $2';
    try{
        const result = await pool.query(query, [email, username]);
        if(result.rowCount === 0 || result == null) return null;
        else return result.rows[0];
    } catch(error){
        console.error('Database error:', error);
        throw error;
    }
};

/**
 * Register
 * @email 'xxxx@xxx.xxx'
 * @username 5~15 characters
 * @hashedPassword Encrypted 60-bit string
 * @returns  - return the data just INSERT INTO from AppUser 
 */
const createUser = async (username, email, hashedPassword) => {
    const query = `
                    insert into AppUser (username, email, password, create_at, update_at, last_login)
                    values ($1, $2, $3, NOW(), NOW(), NOW())
                    returning *;
                  `;
    try{
        const result = await pool.query(query, [username, email, hashedPassword]);
        return result.rows[0];
    } catch(error){
        console.error('Database error:', error);
        throw error;
    }
};

/**
 * Login: Search by Name
 * @username 5~15 characters
 * @returns  - return the data just SELECT from AppUser 
 */
async function findUserByUsername(username) {
    const result = await pool.query('select * from AppUser where username = $1', [username]);
    if(result.rowCount === 0 || result == null) return null;
    else return result.rows[0];
}

/**
 * Login: Search by ID
 * @id AppUser.UID
 * @returns  - return the data just SELECT from AppUser 
 */
async function findUserByID(id) {
    const result = await pool.query('select * from AppUser where UID = $1', [id]);
    if(result.rowCount === 0 || result == null) return null;
    else return result.rows[0];
}

module.exports = { 
    findUserByEmailOrUsername, createUser,
    findUserByUsername, findUserByID
 };
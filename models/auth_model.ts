const bcrypt = require('bcryptjs')

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'clothes_shop_bd',
  password: 'p.ufaf',
  port: 5432,
});


// define a function to register a new user
export async function registerUser(email: string, password: string) {
  
  const salt = await bcrypt.genSalt(10);
  
  const hashedPassword = password;
  const query = {
    text: `INSERT INTO users (email, password) VALUES ($1, $2)`,
    values: [email, hashedPassword]
  };
  
  const result = await pool.query(query);
   
  return result.rows[0].id;
}

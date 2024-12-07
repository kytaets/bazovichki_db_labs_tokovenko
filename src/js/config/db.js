import dotenv from 'dotenv';
import pg from 'pg';

dotenv.config();
const { Pool } = pg;

const pool = new Pool({
  user: process.env.DB_USER, // Database user
  host: process.env.DB_HOST, // Database host
  database: process.env.DB_NAME, // Database name
  password: process.env.DB_PASSWORD, // Database password
  port: process.env.DB_PORT, // Database port (default for PostgreSQL is 5432)
});

export default pool;

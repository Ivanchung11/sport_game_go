import { Client } from "pg";
import dotenv from "dotenv";
dotenv.config();

export const pgClient = new Client({
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
  });
  
  
pgClient.connect();
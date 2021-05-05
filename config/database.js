import dotenv from 'dotenv'
dotenv.config();

export default {
  HOST: process.env.DB_HOST,
  USER: process.env.DB_USER,
  PASS: process.env.DB_PASS,
}
import dotevn from 'dotenv'
import mysql from 'mysql2/promise'

dotevn.config()

const connection = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB
})

export default connection
import mysql from "mysql2/promise";

let pool = undefined;
export async function connect() {

  if(typeof pool !== 'undefined') {
    return pool;
  }

  pool = await mysql.createConnection({
    host: "190.92.217.73",
    user: "root",
    password:"OHM0708!rds",
    database: "dev-day-demo",
  });


  return pool;
}



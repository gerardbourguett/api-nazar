import { config } from "dotenv"; // import dotenv

config(); // load .env file

export const PORT = process.env.PORT || 3000; // set port

export const DB_USER = process.env.DB_USER || "root"; // set database user
export const DB_PASSWORD = process.env.DB_PASSWORD || "root"; // set database password
export const DB_HOST = process.env.DB_HOST || "localhost"; // set database host
export const DB_PORT = process.env.DB_PORT || 3306; // set database port
export const DB_DATABASE = process.env.DB_DATABASE || "baselaboral"; // set database name

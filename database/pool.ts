import { Client } from "../deps.ts";

const host = Deno.env.get("DB_HOST") || "localhost";
const port = Deno.env.get("DB_PORT") || 5432;
const user = Deno.env.get("DB_USER")|| "postgres";
const password = Deno.env.get("DB_PASSWORD") || "password";
const database = Deno.env.get("DB_NAME") || "postgres";

const client = await new Client({
  hostname: host,
  port: Number(port),
  user,
  password,
  database,
});

try {
  await client.connect();
  console.log("Connected to PostgreSQL database");
} catch (error) {
  console.error("Error connecting to PostgreSQL database:", error);
  Deno.exit(1);
}

export default client;
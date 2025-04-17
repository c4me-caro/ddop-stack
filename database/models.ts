import client from "../database/pool.ts";
import User from "../service/types.ts";

const getUsers = async () => {
  const rows = await client.queryArray("SELECT * FROM users");
  if (rows.rowCount == 0) {
    return [];
  }

  const user: User[] = rows.rows.map((row) => {
    return {
      username: row[0] as string,
      password: row[1] as string,
    };
  });

  return user;
}

export default getUsers;

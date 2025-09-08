import {pgClient} from "../database/db";


export class UserModel {
  static async getUserById(id: number) {
    const result = await pgClient.query('SELECT id, email, display_name FROM users WHERE id = $1', [id]);
    return result.rows[0];
  }

  static async createUser(email: string, password: string, displayName: string, gender: string) {
    const result = await pgClient.query(
      'INSERT INTO users (email, password, display_name, gender) VALUES ($1, $2, $3, $4) RETURNING id, email, display_name, gender',
      [email, password, displayName, gender]
    );
    return result.rows[0];
  }

  static async getUserByEmail(email: string) {
    const result = await pgClient.query('SELECT id, email, password, display_name, gender FROM users WHERE email = $1', [email]);
    return result.rows[0];
  }

    static async delUser(id: number) {
        const result = await pgClient.query('DELETE FROM users WHERE id = $1', [id]);
        return result;
    }
}

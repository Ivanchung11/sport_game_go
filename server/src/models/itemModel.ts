import {pgClient} from "../database/db";

export class ItemModel {
  static async getAllItems() {
    const result = await pgClient.query('SELECT * FROM game_sessions');
    return result.rows;
  }
}
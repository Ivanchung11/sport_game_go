import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("favourites").del();

    // Inserts seed entries
    await knex("favourites").insert([
        {
        id: 1,
        user_id: 2,             // must exist in users table
        game_session_id: 1      // must exist in game_sessions table
        },
        {
        id: 2,
        user_id: 3,
        game_session_id: 1
        },
    ]);
};

import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("participations").del();

    // Inserts seed entries
    await knex("participations").insert([
        {
      id: 1,
      quantity: 1,
      status: "pending",
      response_time: null,
      user_id: 2,            // must exist in users table
      game_session_id: 1     // must exist in game_sessions table
    },
    {
      id: 2,
      quantity: 2,
      status: "confirmed",
      response_time: knex.fn.now(),
      user_id: 3,
      game_session_id: 1
    },
    {
      id: 3,
      quantity: 1,
      status: "rejected",
      response_time: knex.fn.now(),
      user_id: 2,
      game_session_id: 2
    },
    {
      id: 4,
      quantity: 3,
      status: "pending",
      response_time: null,
      user_id: 3,
      game_session_id: 3
    }
    ]);
};

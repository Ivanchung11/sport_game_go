import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("blacklists").del();

    // Inserts seed entries
    await knex("blacklists").insert([
        {
      id: 1,
      reason: "Late arrival multiple times",
      user_id: 2,              // user being blacklisted
      blacklist_by_id: 1,      // user who blacklists
      game_session_id: 1       // must exist in game_sessions table
    },
    {
      id: 2,
      reason: "Unsportsmanlike conduct",
      user_id: 3,
      blacklist_by_id: 1,
      game_session_id: 2
    },
    {
      id: 3,
      reason: "No-show without notice",
      user_id: 1,
      blacklist_by_id: 2,
      game_session_id: 3
    },
    {
      id: 4,
      reason: "Verbal argument during match",
      user_id: 1,
      blacklist_by_id: 3,
      game_session_id: 1
    },
    {
      id: 5,
      reason: "Did not pay participation fee",
      user_id: 2,
      blacklist_by_id: 3,
      game_session_id: 2
    }
    ]);
};

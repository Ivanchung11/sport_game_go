import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("game_sessions").del();

    // Inserts seed entries
    await knex('game_sessions').insert([
    {
      id: 1,
      venue: "Victoria Park Tennis Court",
      venue_status: true,
      play_format: "Singles",
      skill_level: 3, // e.g. intermediate
      max_players: 2,
      game_date: "2025-11-25",
      start_time: "09:00",
      end_time: "10:30",
      fee: 50,
      ball_brand: "Wilson",
      remarks: "Bring your own racket",
      is_active: true,
      organizer_id: 1,       // must exist in users table
      sport_id: 1,           // must exist in sports table (e.g. Tennis)
      sub_district_id: 51    // must exist in sub_districts table (e.g. Tsim Sha Tsui)
    },
    {
      id: 2,
      venue: "Sha Tin Sports Ground",
      venue_status: true,
      play_format: "Doubles",
      skill_level: 2, // beginner
      max_players: 4,
      game_date: "2025-11-26",
      start_time: "18:00",
      end_time: "20:00",
      fee: 30,
      ball_brand: "Yonex",
      remarks: "Friendly match, all levels welcome",
      is_active: true,
      organizer_id: 2,       // must exist in users table
      sport_id: 4,           // must exist in sports table (e.g. Badminton)
      sub_district_id: 61    // must exist in sub_districts table (e.g. Sha Tin Town Centre)
    },
    {
      id: 3,
      venue: "Tuen Mun Basketball Court",
      venue_status: true,
      play_format: "5v5",
      skill_level: 4, // advanced
      max_players: 10,
      game_date: "2025-11-27",
      start_time: "15:00",
      end_time: "17:00",
      fee: 20,
      ball_brand: "Spalding",
      remarks: "Competitive game",
      is_active: true,
      organizer_id: 3,       // must exist in users table
      sport_id: 3,           // must exist in sports table (e.g. Basketball)
      sub_district_id: 70    // must exist in sub_districts table (e.g. Tuen Mun Town Centre)
    }
    ]);
};

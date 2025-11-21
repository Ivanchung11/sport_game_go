import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("sport_skill_levels").del();

    // Inserts seed entries
    await knex('sport_skill_levels').insert([
    // Tennis (sport_id: 1)
    { id: 1, level: 1, sport_id: 1 }, // Beginner
    { id: 2, level: 2, sport_id: 1 }, // Intermediate
    { id: 3, level: 3, sport_id: 1 }, // Advanced

    // football (sport_id: 2)
    { id: 4, level: 1, sport_id: 2 },
    { id: 5, level: 2, sport_id: 2 },
    { id: 6, level: 3, sport_id: 2 },

    // Basketball (sport_id: 3)
    { id: 7, level: 1, sport_id: 3 },
    { id: 8, level: 2, sport_id: 3 },
    { id: 9, level: 3, sport_id: 3 },

    // badminton (sport_id: 4)
    { id: 10, level: 1, sport_id: 4 },
    { id: 11, level: 2, sport_id: 4 },
    { id: 12, level: 3, sport_id: 4 },

    // Volleyball (sport_id: 5)
    { id: 13, level: 1, sport_id: 5 },
    { id: 14, level: 2, sport_id: 5 },
    { id: 15, level: 3, sport_id: 5 },

    // Table Tennis (sport_id: 6)
    { id: 16, level: 1, sport_id: 6 },
    { id: 17, level: 2, sport_id: 6 },
    { id: 18, level: 3, sport_id: 6 },

    // Running (sport_id: 7)
    { id: 19, level: 1, sport_id: 7 },
    { id: 20, level: 2, sport_id: 7 },
    { id: 21, level: 3, sport_id: 7 },

    // Fitness (sport_id: 8)
    { id: 22, level: 1, sport_id: 8 },
    { id: 23, level: 2, sport_id: 8 },
    { id: 24, level: 3, sport_id: 8 },

    // Swimming (sport_id: 9)
    { id: 25, level: 1, sport_id: 9 },
    { id: 26, level: 2, sport_id: 9 },
    { id: 27, level: 3, sport_id: 9 },

    // Golf (sport_id: 10)
    { id: 28, level: 1, sport_id: 10 },
    { id: 29, level: 2, sport_id: 10 },
    { id: 30, level: 3, sport_id: 10 },
  ]);
};

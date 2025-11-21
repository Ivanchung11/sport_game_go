import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("user_skill_levels").del();

    // Inserts seed entries
    await knex("user_skill_levels").insert([
        // User 1 plays Tennis (sport_id: 1) at skill level 2
    { id: 1, user_id: 1, sport_skill_level_id: 2 },

    // User 2 plays Badminton (sport_id: 2) at skill level 3
    { id: 2, user_id: 2, sport_skill_level_id: 6 },

    // User 3 plays Basketball (sport_id: 3) at skill level 1
    { id: 3, user_id: 3, sport_skill_level_id: 7 },
    ]);
};

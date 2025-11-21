import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("areas").del();

    // Inserts seed entries
    await knex('areas').insert([
    { id: 1, 
        name_zh: "香港島", 
        name_en: "Hong Kong Island", 
        description: null,
        is_active: true 
    },
    { id: 2, 
        name_zh: "九龍", 
        name_en: "Kowloon", 
        description: null,
        is_active: true 
    },
    { id: 3, 
        name_zh: "新界", 
        name_en: "New Territories", 
        description: null,
        is_active: true 
    }
  ]);
};

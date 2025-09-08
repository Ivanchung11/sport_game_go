import { Knex } from "knex";
import { hashPassword } from "../src/utils/hash";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex("users").del();

    const hashedPassword = await hashPassword('admin');
    // Inserts seed entries
    await knex("users").insert([
        {   id: 1, 
            email: "admin@example.com", 
            password: hashedPassword, 
            display_name: "admin", 
            gender: "male" 
        },
        {   id: 2, 
            email: "organizer@example.com", 
            password: hashedPassword, 
            display_name: "organizer", 
            gender: "female" 
        },
        {   id: 3, 
            email: "player@example.com", 
            password: hashedPassword, 
            display_name: "player", 
            gender: "male" 
        }
    ]);
};

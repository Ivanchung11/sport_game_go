import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("user_sport_skills", (table) => {
        table.increments("id").primary();
        table.integer("user_id").unsigned().notNullable();
        table.foreign("user_id").references("id").inTable("users").onDelete("CASCADE");
        table.integer("sport_id").unsigned().notNullable();
        table.foreign("sport_id").references("id").inTable("sports").onDelete("CASCADE");
        table.integer("sport_skill_level_id").unsigned().notNullable();
        table.foreign("sport_skill_level_id").references("id").inTable("sport_skill_levels").onDelete("CASCADE");
        table.timestamps(true, true);
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists("user_sport_skills");
}


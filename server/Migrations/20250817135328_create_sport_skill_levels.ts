import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("sport_skill_levels", (table) => {
        table.increments("id").primary();
        table.integer("level").notNullable();
        table.integer("sport_id").unsigned().notNullable();
        table.foreign("sport_id").references("id").inTable("sports").onDelete("CASCADE");
        table.timestamps(true, true);
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists("sport_skill_levels");
}


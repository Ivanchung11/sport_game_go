import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("favourites", (table) => {
        table.increments("id").primary();
        table.integer("user_id").unsigned().notNullable();
        table.foreign("user_id").references("id").inTable("users").onDelete("CASCADE");
        table.integer("game_session_id").unsigned().notNullable();
        table.foreign("game_session_id").references("id").inTable("game_sessions").onDelete("CASCADE");
        table.timestamps(true, true);
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists("favourites");
}


import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("game_sessions", (table) => {
        table.increments("id").primary();
        table.string("venue").notNullable();
        table.boolean("venue_status").notNullable();
        table.string("play_format").notNullable();
        table.integer("skill_level");
        table.integer("max_players").notNullable();
        table.date("game_date").notNullable();
        table.time("game_time").notNullable();
        table.time("end_time").notNullable();
        table.integer("fee").notNullable();
        table.string("ball_brand");
        table.string("remarks");
        table.boolean("is_active").defaultTo(true);
        table.integer("organizer_id").unsigned().notNullable();
        table.foreign("organizer_id").references("id").inTable("users").onDelete("CASCADE");
        table.integer("sport_id").unsigned().notNullable();
        table.foreign("sport_id").references("id").inTable("sports").onDelete("CASCADE");
        table.integer("sub_district_id").unsigned().notNullable();
        table.foreign("sub_district_id").references("id").inTable("sub_districts").onDelete("CASCADE");
        table.timestamps(true, true);
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists("game_sessions");
}


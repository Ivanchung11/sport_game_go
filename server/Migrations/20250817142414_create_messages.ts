import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("messages", (table) => {
        table.increments("id").primary();
        table.text("content").notNullable();
        table.integer("game_session_id").unsigned().notNullable();
        table.foreign("game_session_id").references("id").inTable("game_sessions").onDelete("CASCADE");
        table.integer("participation_id").unsigned().notNullable();
        table.foreign("participation_id").references("id").inTable("participations").onDelete("CASCADE");
        table.integer("sender_id").unsigned().notNullable();
        table.foreign("sender_id").references("id").inTable("users").onDelete("CASCADE");
        table.integer("receiver_id").unsigned().notNullable();
        table.foreign("receiver_id").references("id").inTable("users").onDelete("CASCADE");
        table.integer("reply_message_id").unsigned().nullable();
        table.foreign("reply_message_id").references("id").inTable("messages").onDelete("CASCADE");
        table.timestamps(true, true);
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists("messages");
}


import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("sports", (table) => {
        table.increments("id").primary();
        table.string("name_zh").notNullable();
        table.string("name_en").notNullable();
        table.text("icon_url").notNullable();
        table.boolean("is_active").defaultTo(true);
        table.timestamps(true, true);
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists("sports");
}


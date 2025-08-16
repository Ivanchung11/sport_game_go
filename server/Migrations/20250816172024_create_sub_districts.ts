import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("sub_districts", (table) => {
        table.increments("id").primary();
        table.string("name_zh").notNullable();
        table.string("name_en").notNullable();
        table.boolean("is_active").defaultTo(true);
        table.integer("district_id").unsigned().notNullable();
        table.foreign("district_id").references("id").inTable("districts").onDelete("CASCADE");
        table.timestamps(true, true);
    });
}
        

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists("sub_districts");
}


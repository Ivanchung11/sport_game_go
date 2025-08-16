import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('areas', (table) => {
        table.increments('id').primary();
        table.string('name_zh').notNullable();
        table.string('name_en').notNullable();
        table.string('description').nullable();
        table.boolean('is_active').notNullable();
        table.timestamps(true, true);
    });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('areas');
}


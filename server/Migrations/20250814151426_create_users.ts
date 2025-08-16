import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('email').unique().notNullable();
    table.string('password').notNullable();
    table.string('display_name').notNullable();
    table.string('gender').nullable();
    table.integer('rating').defaultTo(100);
    table.string('google_id').unique();
    table.timestamps(true, true);
  });
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('users');
}


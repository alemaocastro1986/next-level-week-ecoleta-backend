import * as Knex from 'knex';

export async function up(knex: Knex): Promise<any> {
  return knex.schema.createTable('point_items', table => {
    table.increments('id').primary();
    table
      .integer('point_id')
      .notNullable()
      .references('id')
      .inTable('points')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
    table
      .integer('item_id')
      .notNullable()
      .references('id')
      .inTable('items')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
}

export async function down(knex: Knex): Promise<any> {
  return knex.schema.dropTable('point_items');
}

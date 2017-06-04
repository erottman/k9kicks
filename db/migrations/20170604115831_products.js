exports.up = (knex => {
  return knex.schema.createTable('products', (table) => {
    table.increments();
    table.string('name').notNullable();
    table.integer('category_id').notNullable();
    table.decimal('price').notNullable();
    table.text('description').notNullable();
    table.integer('review_id').notNullable();
    table.timestamps(true, true);
  });
});

exports.down = (knex => {
  return knex.schema.dropTable('products');
});

exports.up = function(knex) {
  return knex.schema
    .createTable("users", function(table) {
      table.increments("id").primary();
      table
        .string("name")
        .notNullable()
        .unique();
    })
    .createTable("decks", function(table) {
      table.increments("id").primary();
      table.integer("user_id").notNullable();
      table
        .foreign("user_id")
        .onDelete("CASCADE")
        .references("users.id");
      table.string("deckName").notNullable();
    })
    .createTable("cards", function(table) {
      table.increments("id").primary();
      table.integer("deck_id").notNullable();
      table
        .foreign("deck_id")
        .onDelete("CASCADE")
        .references("decks.id");
      table.string("api_id").notNullable();
    });
};

exports.down = function(knex) {
  // Reverse order here to prevent error.
  return knex.schema
    .dropTable("cards")
    .dropTable("decks")
    .dropTable("users");
};

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("decks")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("decks").insert([
        { id: 1, user_id: 1, deckName: "My first deck" },
        { id: 2, user_id: 1, deckName: "Best Deck" },
        { id: 3, user_id: 2, deckName: "YeeHawww" },
        { id: 4, user_id: 3, deckName: "hee hoo" }
      ]);
    });
};

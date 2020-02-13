exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("cards")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("cards").insert([
        { id: 1, deck_id: 1, api_id: "xy2-13" },
        { id: 2, deck_id: 1, api_id: "pop9-17" },
        { id: 3, deck_id: 1, api_id: "det1-4" },
        { id: 4, deck_id: 2, api_id: "dp6-90" },
        { id: 5, deck_id: 2, api_id: "bw1-105" },
        { id: 6, deck_id: 3, api_id: "dp1-2" },
        { id: 7, deck_id: 3, api_id: "xy0-24" },
        { id: 8, deck_id: 3, api_id: "xy7-54" },
        { id: 9, deck_id: 3, api_id: "bw1-105" }
      ]);
    });
};

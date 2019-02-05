
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('adventure_editors').del()
    .then(function () {
      // Inserts seed entries
      return knex('adventure_editors').insert([
        {
          "adventure_id": 1,
          "user_id": 1
        },
        {
          "adventure_id": 2,
          "user_id": 2
        },
        {
          "adventure_id": 3,
          "user_id": 3
        },
        {
          "adventure_id": 4,
          "user_id": 4
        },
        {
          "adventure_id": 5,
          "user_id": 5
        },
        {
          "adventure_id": 6,
          "user_id": 1
        },
        {
          "adventure_id": 7,
          "user_id": 2
        },
        {
          "adventure_id": 8,
          "user_id": 3
        },
        {
          "adventure_id": 9,
          "user_id": 4
        },
        {
          "adventure_id": 10,
          "user_id": 5
        },
        {
          "adventure_id": 11,
          "user_id": 1
        },
        {
          "adventure_id": 12,
          "user_id": 2
        },
        {
          "adventure_id": 13,
          "user_id": 3
        },
        {
          "adventure_id": 14,
          "user_id": 4
        },
        {
          "adventure_id": 15,
          "user_id": 5
        },
        {
          "adventure_id": 16,
          "user_id": 1
        },
        {
          "adventure_id": 1,
          "user_id": 2
        },
        {
          "adventure_id": 1,
          "user_id": 3
        },
        {
          "adventure_id": 2,
          "user_id": 4
        },
        {
          "adventure_id": 4,
          "user_id": 5
        },
        {
          "adventure_id": 5,
          "user_id": 1
        },
        {
          "adventure_id": 6,
          "user_id": 2
        },
        {
          "adventure_id": 6,
          "user_id": 3
        },
        {
          "adventure_id": 9,
          "user_id": 4
        }
      ]);
    });
};

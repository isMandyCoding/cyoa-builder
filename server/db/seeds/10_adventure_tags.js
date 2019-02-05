
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('adventure_tags').del()
    .then(function () {
      // Inserts seed entries
      return knex('adventure_tags').insert([
        {
          "adventure_id": 1,
          "tag_id": 1
        },
        {
          "adventure_id": 1,
          "tag_id": 2
        },
        {
          "adventure_id": 1,
          "tag_id": 3
        },
        {
          "adventure_id": 1,
          "tag_id": 4
        },
        {
          "adventure_id": 1,
          "tag_id": 5
        },
        {
          "adventure_id": 2,
          "tag_id": 6
        },
        {
          "adventure_id": 2,
          "tag_id": 7
        },
        {
          "adventure_id": 2,
          "tag_id": 8
        },
        {
          "adventure_id": 2,
          "tag_id": 9
        },
        {
          "adventure_id": 2,
          "tag_id": 10
        },
        {
          "adventure_id": 2,
          "tag_id": 11
        },
        {
          "adventure_id": 2,
          "tag_id": 12
        },
        {
          "adventure_id": 3,
          "tag_id": 13
        },
        {
          "adventure_id": 3,
          "tag_id": 14
        },
        {
          "adventure_id": 3,
          "tag_id": 15
        },
        {
          "adventure_id": 3,
          "tag_id": 16
        },
        {
          "adventure_id": 3,
          "tag_id": 17
        },
        {
          "adventure_id": 3,
          "tag_id": 18
        },
        {
          "adventure_id": 3,
          "tag_id": 19
        },
        {
          "adventure_id": 4,
          "tag_id": 20
        },
        {
          "adventure_id": 4,
          "tag_id": 21
        },
        {
          "adventure_id": 4,
          "tag_id": 22
        },
        {
          "adventure_id": 4,
          "tag_id": 23
        },
        {
          "adventure_id": 4,
          "tag_id": 24
        },
        {
          "adventure_id": 4,
          "tag_id": 25
        },
        {
          "adventure_id": 4,
          "tag_id": 26
        },
        {
          "adventure_id": 5,
          "tag_id": 27
        },
        {
          "adventure_id": 5,
          "tag_id": 28
        },
        {
          "adventure_id": 5,
          "tag_id": 29
        },
        {
          "adventure_id": 5,
          "tag_id": 30
        },
        {
          "adventure_id": 5,
          "tag_id": 31
        },
        {
          "adventure_id": 5,
          "tag_id": 32
        },
        {
          "adventure_id": 6,
          "tag_id": 33
        },
        {
          "adventure_id": 6,
          "tag_id": 1
        },
        {
          "adventure_id": 6,
          "tag_id": 2
        },
        {
          "adventure_id": 6,
          "tag_id": 3
        },
        {
          "adventure_id": 6,
          "tag_id": 4
        },
        {
          "adventure_id": 6,
          "tag_id": 5
        },
        {
          "adventure_id": 6,
          "tag_id": 6
        },
        {
          "adventure_id": 6,
          "tag_id": 7
        },
        {
          "adventure_id": 6,
          "tag_id": 8
        },
        {
          "adventure_id": 6,
          "tag_id": 9
        },
        {
          "adventure_id": 6,
          "tag_id": 10
        },
        {
          "adventure_id": 6,
          "tag_id": 11
        },
        {
          "adventure_id": 7,
          "tag_id": 12
        },
        {
          "adventure_id": 7,
          "tag_id": 13
        },
        {
          "adventure_id": 7,
          "tag_id": 14
        },
        {
          "adventure_id": 7,
          "tag_id": 15
        },
        {
          "adventure_id": 7,
          "tag_id": 16
        },
        {
          "adventure_id": 7,
          "tag_id": 17
        },
        {
          "adventure_id": 7,
          "tag_id": 18
        },
        {
          "adventure_id": 8,
          "tag_id": 19
        },
        {
          "adventure_id": 8,
          "tag_id": 20
        },
        {
          "adventure_id": 8,
          "tag_id": 21
        },
        {
          "adventure_id": 8,
          "tag_id": 22
        },
        {
          "adventure_id": 8,
          "tag_id": 23
        },
        {
          "adventure_id": 8,
          "tag_id": 24
        },
        {
          "adventure_id": 8,
          "tag_id": 25
        },
        {
          "adventure_id": 8,
          "tag_id": 26
        },
        {
          "adventure_id": 9,
          "tag_id": 27
        },
        {
          "adventure_id": 9,
          "tag_id": 28
        },
        {
          "adventure_id": 10,
          "tag_id": 29
        },
        {
          "adventure_id": 10,
          "tag_id": 30
        },
        {
          "adventure_id": 10,
          "tag_id": 31
        },
        {
          "adventure_id": 10,
          "tag_id": 32
        },
        {
          "adventure_id": 10,
          "tag_id": 33
        },
        {
          "adventure_id": 10,
          "tag_id": 1
        },
        {
          "adventure_id": 11,
          "tag_id": 2
        },
        {
          "adventure_id": 11,
          "tag_id": 3
        },
        {
          "adventure_id": 11,
          "tag_id": 4
        },
        {
          "adventure_id": 11,
          "tag_id": 5
        },
        {
          "adventure_id": 1,
          "tag_id": 6
        },
        {
          "adventure_id": 11,
          "tag_id": 7
        },
        {
          "adventure_id": 12,
          "tag_id": 8
        },
        {
          "adventure_id": 12,
          "tag_id": 9
        },
        {
          "adventure_id": 12,
          "tag_id": 10
        },
        {
          "adventure_id": 12,
          "tag_id": 11
        },
        {
          "adventure_id": 12,
          "tag_id": 12
        },
        {
          "adventure_id": 12,
          "tag_id": 13
        },
        {
          "adventure_id": 12,
          "tag_id": 14
        },
        {
          "adventure_id": 13,
          "tag_id": 15
        },
        {
          "adventure_id": 13,
          "tag_id": 16
        },
        {
          "adventure_id": 13,
          "tag_id": 17
        },
        {
          "adventure_id": 13,
          "tag_id": 18
        },
        {
          "adventure_id": 13,
          "tag_id": 19
        },
        {
          "adventure_id": 13,
          "tag_id": 20
        },
        {
          "adventure_id": 14,
          "tag_id": 21
        },
        {
          "adventure_id": 14,
          "tag_id": 22
        },
        {
          "adventure_id": 14,
          "tag_id": 23
        },
        {
          "adventure_id": 14,
          "tag_id": 24
        },
        {
          "adventure_id": 14,
          "tag_id": 25
        },
        {
          "adventure_id": 14,
          "tag_id": 26
        },
        {
          "adventure_id": 15,
          "tag_id": 27
        },
        {
          "adventure_id": 15,
          "tag_id": 28
        },
        {
          "adventure_id": 15,
          "tag_id": 29
        },
        {
          "adventure_id": 16,
          "tag_id": 30
        },
        {
          "adventure_id": 16,
          "tag_id": 31
        },
        {
          "adventure_id": 16,
          "tag_id": 32
        },
        {
          "adventure_id": 16,
          "tag_id": 33
        },
        {
          "adventure_id": 16,
          "tag_id": 1
        },
        {
          "adventure_id": 16,
          "tag_id": 2
        },
        {
          "adventure_id": 1,
          "tag_id": 3
        }
      ]);
    });
};

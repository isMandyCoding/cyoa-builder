
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('tags').del()
    .then(function () {
      // Inserts seed entries
      return knex('tags').insert([
        {
          "tag_name": "cool"
        },
        {
          "tag_name": "scary"
        },
        {
          "tag_name": "wild"
        },
        {
          "tag_name": "adventure"
        },
        {
          "tag_name": "action"
        },
        {
          "tag_name": "someThing"
        },
        {
          "tag_name": "horror"
        },
        {
          "tag_name": "scary"
        },
        {
          "tag_name": "creepypasta"
        },
        {
          "tag_name": "mystery"
        },
        {
          "tag_name": "spooky"
        },
        {
          "tag_name": "spoopy"
        },
        {
          "tag_name": "drama"
        },
        {
          "tag_name": "dramatic"
        },
        {
          "tag_name": "soap opera"
        },
        {
          "tag_name": "telenovela"
        },
        {
          "tag_name": "wow"
        },
        {
          "tag_name": "romance"
        },
        {
          "tag_name": "scifi"
        },
        {
          "tag_name": "fantasy"
        },
        {
          "tag_name": "dnd"
        },
        {
          "tag_name": "d&d"
        },
        {
          "tag_name": "die hard"
        },
        {
          "tag_name": "action/adventure"
        },
        {
          "tag_name": "superhero"
        },
        {
          "tag_name": "avengers"
        },
        {
          "tag_name": "dc"
        },
        {
          "tag_name": "justice league"
        },
        {
          "tag_name": "general"
        },
        {
          "tag_name": "lgbtq"
        },
        {
          "tag_name": "hetero"
        },
        {
          "tag_name": "chinese"
        },
        {
          "tag_name": "english"
        }
      ]);
    });
};

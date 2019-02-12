
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('route_comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('route_comments').insert([
        {
          "route_id": 1,
          "adventure_id": 1,
          "user_id": 1,
          "content": "OMG This adventure is so good!"
        },
        {
          "route_id": 2,
          "adventure_id": 2,
          "user_id": 2,
          "content": "This adventure bites butts."
        },
        {
          "route_id": 3,
          "adventure_id": 3,
          "user_id": 3,
          "content": "This surprised me. I am surprised"
        },
        {
          "route_id": 4,
          "adventure_id": 4,
          "user_id": 4,
          "content": "Wow!"
        },
        {
          "route_id": 5,
          "adventure_id": 5,
          "user_id": 5,
          "content": "wow. Just…okay then. "
        },
        {
          "route_id": 6,
          "adventure_id": 6,
          "user_id": 1,
          "content": "That was dissapointing. "
        },
        {
          "route_id": 7,
          "adventure_id": 7,
          "user_id": 2,
          "content": "That was the most amazing thing I've ever read!"
        },
        {
          "route_id": 8,
          "adventure_id": 8,
          "user_id": 3,
          "content": "This was just like Goosbumps!"
        },
        {
          "route_id": 9,
          "adventure_id": 9,
          "user_id": 4,
          "content": "WOWOWOW!"
        },
        {
          "route_id": 10,
          "adventure_id": 10,
          "user_id": 5,
          "content": "Wow!"
        },
        {
          "route_id": 11,
          "adventure_id": 11,
          "user_id": 1,
          "content": "Cool!"
        },
        {
          "route_id": 12,
          "adventure_id": 12,
          "user_id": 2,
          "content": "Nice!"
        },
        {
          "route_id": 13,
          "adventure_id": 13,
          "user_id": 3,
          "content": "First!"
        },
        {
          "route_id": 14,
          "adventure_id": 14,
          "user_id": 4,
          "content": "Whatever"
        },
        {
          "route_id": 15,
          "adventure_id": 15,
          "user_id": 5,
          "content": "Just some generic comment. "
        },
        {
          "route_id": 16,
          "adventure_id": 16,
          "user_id": 1,
          "content": "SOMETHING RACIST."
        },
        {
          "route_id": 17,
          "adventure_id": 1,
          "user_id": 2,
          "content": "SOMETHING really nice."
        },
        {
          "route_id": 18,
          "adventure_id": 2,
          "user_id": 3,
          "content": "a;Asiuewh wui awe awefiuh w awefpoihewf oih e. My heart…."
        },
        {
          "route_id": 19,
          "adventure_id": 3,
          "user_id": 4,
          "content": "This is a masterpiece of art and should live on for centuries, celebrated by all. "
        },
        {
          "route_id": 20,
          "adventure_id": 4,
          "user_id": 5,
          "content": "I'm confused. "
        },
        {
          "route_id": 21,
          "adventure_id": 5,
          "user_id": 1,
          "content": "OMG This adventure is so good!"
        },
        {
          "route_id": 22,
          "adventure_id": 6,
          "user_id": 2,
          "content": "This adventure bites butts."
        },
        {
          "route_id": 23,
          "adventure_id": 7,
          "user_id": 3,
          "content": "This surprised me. I am surprised"
        },
        {
          "route_id": 24,
          "adventure_id": 8,
          "user_id": 4,
          "content": "Wow!"
        },
        {
          "route_id": 25,
          "adventure_id": 9,
          "user_id": 5,
          "content": "wow. Just…okay then. "
        },
        {
          "route_id": 26,
          "adventure_id": 10,
          "user_id": 1,
          "content": "That was dissapointing. "
        },
        {
          "route_id": 27,
          "adventure_id": 11,
          "user_id": 2,
          "content": "That was the most amazing thing I've ever read!"
        },
        {
          "route_id": 28,
          "adventure_id": 12,
          "user_id": 3,
          "content": "This was just like Goosbumps!"
        },
        {
          "route_id": 29,
          "adventure_id": 13,
          "user_id": 4,
          "content": "WOWOWOW!"
        },
        {
          "route_id": 30,
          "adventure_id": 14,
          "user_id": 5,
          "content": "Wow!"
        },
        {
          "route_id": 31,
          "adventure_id": 15,
          "user_id": 1,
          "content": "Cool!"
        },
        {
          "route_id": 32,
          "adventure_id": 16,
          "user_id": 2,
          "content": "Nice!"
        },
        {
          "route_id": 33,
          "adventure_id": 1,
          "user_id": 3,
          "content": "First!"
        },
        {
          "route_id": 34,
          "adventure_id": 2,
          "user_id": 4,
          "content": "Whatever"
        },
        {
          "route_id": 35,
          "adventure_id": 3,
          "user_id": 5,
          "content": "Just some generic comment. "
        },
        {
          "route_id": 36,
          "adventure_id": 4,
          "user_id": 1,
          "content": "SOMETHING RACIST."
        },
        {
          "route_id": 37,
          "adventure_id": 5,
          "user_id": 2,
          "content": "SOMETHING really nice."
        },
        {
          "route_id": 38,
          "adventure_id": 6,
          "user_id": 3,
          "content": "a;Asiuewh wui awe awefiuh w awefpoihewf oih e. My heart…."
        },
        {
          "route_id": 39,
          "adventure_id": 7,
          "user_id": 4,
          "content": "This is a masterpiece of art and should live on for centuries, celebrated by all. "
        },
        {
          "route_id": 40,
          "adventure_id": 8,
          "user_id": 5,
          "content": "I'm confused. "
        },
        {
          "route_id": 41,
          "adventure_id": 9,
          "user_id": 1,
          "content": "OMG This adventure is so good!"
        },
        {
          "route_id": 42,
          "adventure_id": 10,
          "user_id": 2,
          "content": "This adventure bites butts."
        },
        {
          "route_id": 43,
          "adventure_id": 11,
          "user_id": 3,
          "content": "This surprised me. I am surprised"
        },
        {
          "route_id": 44,
          "adventure_id": 12,
          "user_id": 4,
          "content": "Wow!"
        },
        {
          "route_id": 45,
          "adventure_id": 13,
          "user_id": 5,
          "content": "wow. Just…okay then. "
        },
        {
          "route_id": 46,
          "adventure_id": 14,
          "user_id": 1,
          "content": "That was dissapointing. "
        },
        {
          "route_id": 47,
          "adventure_id": 15,
          "user_id": 2,
          "content": "That was the most amazing thing I've ever read!"
        },
        {
          "route_id": 48,
          "adventure_id": 16,
          "user_id": 3,
          "content": "This was just like Goosbumps!"
        },
        {
          "route_id": 49,
          "adventure_id": 1,
          "user_id": 4,
          "content": "WOWOWOW!"
        },
        {
          "route_id": 50,
          "adventure_id": 2,
          "user_id": 5,
          "content": "Wow!"
        },
        {
          "route_id": 51,
          "adventure_id": 3,
          "user_id": 1,
          "content": "Cool!"
        },
        {
          "route_id": 52,
          "adventure_id": 4,
          "user_id": 2,
          "content": "Nice!"
        },
        {
          "route_id": 53,
          "adventure_id": 5,
          "user_id": 3,
          "content": "First!"
        },
        {
          "route_id": 54,
          "adventure_id": 6,
          "user_id": 4,
          "content": "Whatever"
        },
        {
          "route_id": 55,
          "adventure_id": 7,
          "user_id": 5,
          "content": "Just some generic comment. "
        },
        {
          "route_id": 56,
          "adventure_id": 8,
          "user_id": 1,
          "content": "SOMETHING RACIST."
        },
        {
          "route_id": 57,
          "adventure_id": 9,
          "user_id": 2,
          "content": "SOMETHING really nice."
        },
        {
          "route_id": 58,
          "adventure_id": 10,
          "user_id": 3,
          "content": "a;Asiuewh wui awe awefiuh w awefpoihewf oih e. My heart…."
        },
        {
          "route_id": 59,
          "adventure_id": 11,
          "user_id": 4,
          "content": "This is a masterpiece of art and should live on for centuries, celebrated by all. "
        },
        {
          "route_id": 60,
          "adventure_id": 12,
          "user_id": 5,
          "content": "I'm confused. "
        },
        {
          "route_id": 61,
          "adventure_id": 13,
          "user_id": 1,
          "content": "OMG This adventure is so good!"
        },
        {
          "route_id": 62,
          "adventure_id": 14,
          "user_id": 2,
          "content": "This adventure bites butts."
        },
        {
          "route_id": 63,
          "adventure_id": 15,
          "user_id": 3,
          "content": "This surprised me. I am surprised"
        },
        {
          "route_id": 64,
          "adventure_id": 16,
          "user_id": 4,
          "content": "Wow!"
        },
        {
          "route_id": 65,
          "adventure_id": 1,
          "user_id": 5,
          "content": "wow. Just…okay then. "
        },
        {
          "route_id": 66,
          "adventure_id": 2,
          "user_id": 1,
          "content": "That was dissapointing. "
        },
        {
          "route_id": 67,
          "adventure_id": 3,
          "user_id": 2,
          "content": "That was the most amazing thing I've ever read!"
        },
        {
          "route_id": 68,
          "adventure_id": 4,
          "user_id": 3,
          "content": "This was just like Goosbumps!"
        },
        {
          "route_id": 69,
          "adventure_id": 5,
          "user_id": 4,
          "content": "WOWOWOW!"
        },
        {
          "route_id": 70,
          "adventure_id": 6,
          "user_id": 5,
          "content": "Wow!"
        },
        {
          "route_id": 71,
          "adventure_id": 7,
          "user_id": 1,
          "content": "Cool!"
        },
        {
          "route_id": 72,
          "adventure_id": 8,
          "user_id": 2,
          "content": "Nice!"
        },
        {
          "route_id": 73,
          "adventure_id": 9,
          "user_id": 3,
          "content": "First!"
        },
        {
          "route_id": 74,
          "adventure_id": 10,
          "user_id": 4,
          "content": "Whatever"
        },
        {
          "route_id": 75,
          "adventure_id": 11,
          "user_id": 5,
          "content": "Just some generic comment. "
        },
        {
          "route_id": 76,
          "adventure_id": 12,
          "user_id": 1,
          "content": "SOMETHING RACIST."
        },
        {
          "route_id": 77,
          "adventure_id": 13,
          "user_id": 2,
          "content": "SOMETHING really nice."
        },
        {
          "route_id": 78,
          "adventure_id": 14,
          "user_id": 3,
          "content": "a;Asiuewh wui awe awefiuh w awefpoihewf oih e. My heart…."
        },
        {
          "route_id": 79,
          "adventure_id": 15,
          "user_id": 4,
          "content": "This is a masterpiece of art and should live on for centuries, celebrated by all. "
        },
        {
          "route_id": 80,
          "adventure_id": 16,
          "user_id": 5,
          "content": "I'm confused. "
        },
        {
          "route_id": 81,
          "adventure_id": 1,
          "user_id": 1,
          "content": "OMG This adventure is so good!"
        },
        {
          "route_id": 82,
          "adventure_id": 2,
          "user_id": 2,
          "content": "This adventure bites butts."
        },
        {
          "route_id": 83,
          "adventure_id": 3,
          "user_id": 3,
          "content": "This surprised me. I am surprised"
        },
        {
          "route_id": 84,
          "adventure_id": 4,
          "user_id": 4,
          "content": "Wow!"
        },
        {
          "route_id": 85,
          "adventure_id": 5,
          "user_id": 5,
          "content": "wow. Just…okay then. "
        },
        {
          "route_id": 86,
          "adventure_id": 6,
          "user_id": 1,
          "content": "That was dissapointing. "
        },
        {
          "route_id": 87,
          "adventure_id": 7,
          "user_id": 2,
          "content": "That was the most amazing thing I've ever read!"
        },
        {
          "route_id": 88,
          "adventure_id": 8,
          "user_id": 3,
          "content": "This was just like Goosbumps!"
        },
        {
          "route_id": 89,
          "adventure_id": 9,
          "user_id": 4,
          "content": "WOWOWOW!"
        },
        {
          "route_id": 90,
          "adventure_id": 10,
          "user_id": 5,
          "content": "Wow!"
        },
        {
          "route_id": 91,
          "adventure_id": 11,
          "user_id": 1,
          "content": "Cool!"
        },
        {
          "route_id": 92,
          "adventure_id": 12,
          "user_id": 2,
          "content": "Nice!"
        },
        {
          "route_id": 93,
          "adventure_id": 13,
          "user_id": 3,
          "content": "First!"
        },
        {
          "route_id": 94,
          "adventure_id": 14,
          "user_id": 4,
          "content": "Whatever"
        },
        {
          "route_id": 95,
          "adventure_id": 15,
          "user_id": 5,
          "content": "Just some generic comment. "
        },
        {
          "route_id": 96,
          "adventure_id": 16,
          "user_id": 1,
          "content": "SOMETHING RACIST."
        },
        {
          "route_id": 97,
          "adventure_id": 1,
          "user_id": 2,
          "content": "SOMETHING really nice."
        },
        {
          "route_id": 98,
          "adventure_id": 2,
          "user_id": 3,
          "content": "a;Asiuewh wui awe awefiuh w awefpoihewf oih e. My heart…."
        },
        {
          "route_id": 99,
          "adventure_id": 3,
          "user_id": 4,
          "content": "This is a masterpiece of art and should live on for centuries, celebrated by all. "
        },
        {
          "route_id": 100,
          "adventure_id": 4,
          "user_id": 5,
          "content": "I'm confused. "
        },
        {
          "route_id": 101,
          "adventure_id": 5,
          "user_id": 1,
          "content": "OMG This adventure is so good!"
        },
        {
          "route_id": 102,
          "adventure_id": 6,
          "user_id": 2,
          "content": "This adventure bites butts."
        },
        {
          "route_id": 103,
          "adventure_id": 7,
          "user_id": 3,
          "content": "This surprised me. I am surprised"
        },
        {
          "route_id": 104,
          "adventure_id": 8,
          "user_id": 4,
          "content": "Wow!"
        },
        {
          "route_id": 105,
          "adventure_id": 9,
          "user_id": 5,
          "content": "wow. Just…okay then. "
        },
        {
          "route_id": 106,
          "adventure_id": 10,
          "user_id": 1,
          "content": "That was dissapointing. "
        },
        {
          "route_id": 1,
          "adventure_id": 11,
          "user_id": 2,
          "content": "That was the most amazing thing I've ever read!"
        },
        {
          "route_id": 2,
          "adventure_id": 12,
          "user_id": 3,
          "content": "This was just like Goosbumps!"
        },
        {
          "route_id": 3,
          "adventure_id": 13,
          "user_id": 4,
          "content": "WOWOWOW!"
        },
        {
          "route_id": 4,
          "adventure_id": 14,
          "user_id": 5,
          "content": "Wow!"
        },
        {
          "route_id": 5,
          "adventure_id": 15,
          "user_id": 1,
          "content": "Cool!"
        },
        {
          "route_id": 6,
          "adventure_id": 16,
          "user_id": 2,
          "content": "Nice!"
        },
        {
          "route_id": 7,
          "adventure_id": 1,
          "user_id": 3,
          "content": "First!"
        },
        {
          "route_id": 8,
          "adventure_id": 2,
          "user_id": 4,
          "content": "Whatever"
        },
        {
          "route_id": 9,
          "adventure_id": 3,
          "user_id": 5,
          "content": "Just some generic comment. "
        },
        {
          "route_id": 10,
          "adventure_id": 4,
          "user_id": 1,
          "content": "SOMETHING RACIST."
        },
        {
          "route_id": 11,
          "adventure_id": 5,
          "user_id": 2,
          "content": "SOMETHING really nice."
        },
        {
          "route_id": 12,
          "adventure_id": 6,
          "user_id": 3,
          "content": "a;Asiuewh wui awe awefiuh w awefpoihewf oih e. My heart…."
        },
        {
          "route_id": 13,
          "adventure_id": 7,
          "user_id": 4,
          "content": "This is a masterpiece of art and should live on for centuries, celebrated by all. "
        },
        {
          "route_id": 14,
          "adventure_id": 8,
          "user_id": 5,
          "content": "I'm confused. "
        },
        {
          "route_id": 15,
          "adventure_id": 9,
          "user_id": 1,
          "content": "OMG This adventure is so good!"
        },
        {
          "route_id": 16,
          "adventure_id": 10,
          "user_id": 2,
          "content": "This adventure bites butts."
        },
        {
          "route_id": 17,
          "adventure_id": 11,
          "user_id": 3,
          "content": "This surprised me. I am surprised"
        },
        {
          "route_id": 18,
          "adventure_id": 12,
          "user_id": 4,
          "content": "Wow!"
        },
        {
          "route_id": 19,
          "adventure_id": 13,
          "user_id": 5,
          "content": "wow. Just…okay then. "
        },
        {
          "route_id": 20,
          "adventure_id": 14,
          "user_id": 1,
          "content": "That was dissapointing. "
        },
        {
          "route_id": 21,
          "adventure_id": 15,
          "user_id": 2,
          "content": "That was the most amazing thing I've ever read!"
        },
        {
          "route_id": 22,
          "adventure_id": 16,
          "user_id": 3,
          "content": "This was just like Goosbumps!"
        },
        {
          "route_id": 23,
          "adventure_id": 1,
          "user_id": 4,
          "content": "WOWOWOW!"
        },
        {
          "route_id": 24,
          "adventure_id": 2,
          "user_id": 5,
          "content": "Wow!"
        },
        {
          "route_id": 25,
          "adventure_id": 3,
          "user_id": 1,
          "content": "Cool!"
        },
        {
          "route_id": 26,
          "adventure_id": 4,
          "user_id": 2,
          "content": "Nice!"
        },
        {
          "route_id": 27,
          "adventure_id": 5,
          "user_id": 3,
          "content": "First!"
        },
        {
          "route_id": 28,
          "adventure_id": 6,
          "user_id": 4,
          "content": "Whatever"
        },
        {
          "route_id": 29,
          "adventure_id": 7,
          "user_id": 5,
          "content": "Just some generic comment. "
        },
        {
          "route_id": 30,
          "adventure_id": 8,
          "user_id": 1,
          "content": "SOMETHING RACIST."
        },
        {
          "route_id": 31,
          "adventure_id": 9,
          "user_id": 2,
          "content": "SOMETHING really nice."
        },
        {
          "route_id": 32,
          "adventure_id": 10,
          "user_id": 3,
          "content": "a;Asiuewh wui awe awefiuh w awefpoihewf oih e. My heart…."
        },
        {
          "route_id": 33,
          "adventure_id": 11,
          "user_id": 4,
          "content": "This is a masterpiece of art and should live on for centuries, celebrated by all. "
        },
        {
          "route_id": 34,
          "adventure_id": 12,
          "user_id": 5,
          "content": "I'm confused. "
        },
        {
          "route_id": 35,
          "adventure_id": 13,
          "user_id": 1,
          "content": "OMG This adventure is so good!"
        },
        {
          "route_id": 36,
          "adventure_id": 14,
          "user_id": 2,
          "content": "This adventure bites butts."
        },
        {
          "route_id": 37,
          "adventure_id": 15,
          "user_id": 3,
          "content": "This surprised me. I am surprised"
        },
        {
          "route_id": 38,
          "adventure_id": 16,
          "user_id": 4,
          "content": "Wow!"
        },
        {
          "route_id": 39,
          "adventure_id": 1,
          "user_id": 5,
          "content": "wow. Just…okay then. "
        },
        {
          "route_id": 40,
          "adventure_id": 2,
          "user_id": 1,
          "content": "That was dissapointing. "
        },
        {
          "route_id": 41,
          "adventure_id": 3,
          "user_id": 2,
          "content": "That was the most amazing thing I've ever read!"
        },
        {
          "route_id": 42,
          "adventure_id": 4,
          "user_id": 3,
          "content": "This was just like Goosbumps!"
        },
        {
          "route_id": 43,
          "adventure_id": 5,
          "user_id": 4,
          "content": "WOWOWOW!"
        },
        {
          "route_id": 44,
          "adventure_id": 6,
          "user_id": 5,
          "content": "Wow!"
        },
        {
          "route_id": 45,
          "adventure_id": 7,
          "user_id": 1,
          "content": "Cool!"
        },
        {
          "route_id": 46,
          "adventure_id": 8,
          "user_id": 2,
          "content": "Nice!"
        },
        {
          "route_id": 47,
          "adventure_id": 9,
          "user_id": 3,
          "content": "First!"
        },
        {
          "route_id": 48,
          "adventure_id": 10,
          "user_id": 4,
          "content": "Whatever"
        },
        {
          "route_id": 49,
          "adventure_id": 11,
          "user_id": 5,
          "content": "Just some generic comment. "
        },
        {
          "route_id": 50,
          "adventure_id": 12,
          "user_id": 1,
          "content": "SOMETHING RACIST."
        },
        {
          "route_id": 51,
          "adventure_id": 13,
          "user_id": 2,
          "content": "SOMETHING really nice."
        },
        {
          "route_id": 52,
          "adventure_id": 14,
          "user_id": 3,
          "content": "a;Asiuewh wui awe awefiuh w awefpoihewf oih e. My heart…."
        },
        {
          "route_id": 53,
          "adventure_id": 15,
          "user_id": 4,
          "content": "This is a masterpiece of art and should live on for centuries, celebrated by all. "
        },
        {
          "route_id": 54,
          "adventure_id": 16,
          "user_id": 5,
          "content": "I'm confused. "
        },
        {
          "route_id": 55,
          "adventure_id": 1,
          "user_id": 1,
          "content": "OMG This adventure is so good!"
        },
        {
          "route_id": 56,
          "adventure_id": 2,
          "user_id": 2,
          "content": "This adventure bites butts."
        },
        {
          "route_id": 57,
          "adventure_id": 3,
          "user_id": 3,
          "content": "This surprised me. I am surprised"
        },
        {
          "route_id": 58,
          "adventure_id": 4,
          "user_id": 4,
          "content": "Wow!"
        },
        {
          "route_id": 59,
          "adventure_id": 5,
          "user_id": 5,
          "content": "wow. Just…okay then. "
        },
        {
          "route_id": 60,
          "adventure_id": 6,
          "user_id": 1,
          "content": "That was dissapointing. "
        },
        {
          "route_id": 61,
          "adventure_id": 7,
          "user_id": 2,
          "content": "That was the most amazing thing I've ever read!"
        },
        {
          "route_id": 62,
          "adventure_id": 8,
          "user_id": 3,
          "content": "This was just like Goosbumps!"
        },
        {
          "route_id": 63,
          "adventure_id": 9,
          "user_id": 4,
          "content": "WOWOWOW!"
        },
        {
          "route_id": 64,
          "adventure_id": 10,
          "user_id": 5,
          "content": "Wow!"
        },
        {
          "route_id": 65,
          "adventure_id": 11,
          "user_id": 1,
          "content": "Cool!"
        },
        {
          "route_id": 66,
          "adventure_id": 12,
          "user_id": 2,
          "content": "Nice!"
        },
        {
          "route_id": 67,
          "adventure_id": 13,
          "user_id": 3,
          "content": "First!"
        },
        {
          "route_id": 68,
          "adventure_id": 14,
          "user_id": 4,
          "content": "Whatever"
        },
        {
          "route_id": 69,
          "adventure_id": 15,
          "user_id": 5,
          "content": "Just some generic comment. "
        },
        {
          "route_id": 70,
          "adventure_id": 16,
          "user_id": 1,
          "content": "SOMETHING RACIST."
        },
        {
          "route_id": 71,
          "adventure_id": 1,
          "user_id": 2,
          "content": "SOMETHING really nice."
        },
        {
          "route_id": 72,
          "adventure_id": 2,
          "user_id": 3,
          "content": "a;Asiuewh wui awe awefiuh w awefpoihewf oih e. My heart…."
        },
        {
          "route_id": 73,
          "adventure_id": 3,
          "user_id": 4,
          "content": "This is a masterpiece of art and should live on for centuries, celebrated by all. "
        },
        {
          "route_id": 74,
          "adventure_id": 4,
          "user_id": 5,
          "content": "I'm confused. "
        },
        {
          "route_id": 75,
          "adventure_id": 5,
          "user_id": 1,
          "content": "OMG This adventure is so good!"
        },
        {
          "route_id": 76,
          "adventure_id": 6,
          "user_id": 2,
          "content": "This adventure bites butts."
        },
        {
          "route_id": 77,
          "adventure_id": 7,
          "user_id": 3,
          "content": "This surprised me. I am surprised"
        },
        {
          "route_id": 78,
          "adventure_id": 8,
          "user_id": 4,
          "content": "Wow!"
        },
        {
          "route_id": 79,
          "adventure_id": 9,
          "user_id": 5,
          "content": "wow. Just…okay then. "
        },
        {
          "route_id": 80,
          "adventure_id": 10,
          "user_id": 1,
          "content": "That was dissapointing. "
        },
        {
          "route_id": 81,
          "adventure_id": 11,
          "user_id": 2,
          "content": "That was the most amazing thing I've ever read!"
        },
        {
          "route_id": 82,
          "adventure_id": 12,
          "user_id": 3,
          "content": "This was just like Goosbumps!"
        },
        {
          "route_id": 83,
          "adventure_id": 13,
          "user_id": 4,
          "content": "WOWOWOW!"
        },
        {
          "route_id": 84,
          "adventure_id": 14,
          "user_id": 5,
          "content": "Wow!"
        },
        {
          "route_id": 85,
          "adventure_id": 15,
          "user_id": 1,
          "content": "Cool!"
        },
        {
          "route_id": 86,
          "adventure_id": 16,
          "user_id": 2,
          "content": "Nice!"
        },
        {
          "route_id": 87,
          "adventure_id": 1,
          "user_id": 3,
          "content": "First!"
        },
        {
          "route_id": 88,
          "adventure_id": 2,
          "user_id": 4,
          "content": "Whatever"
        },
        {
          "route_id": 89,
          "adventure_id": 3,
          "user_id": 5,
          "content": "Just some generic comment. "
        },
        {
          "route_id": 90,
          "adventure_id": 4,
          "user_id": 1,
          "content": "SOMETHING RACIST."
        },
        {
          "route_id": 91,
          "adventure_id": 5,
          "user_id": 2,
          "content": "SOMETHING really nice."
        },
        {
          "route_id": 92,
          "adventure_id": 6,
          "user_id": 3,
          "content": "a;Asiuewh wui awe awefiuh w awefpoihewf oih e. My heart…."
        },
        {
          "route_id": 93,
          "adventure_id": 7,
          "user_id": 4,
          "content": "This is a masterpiece of art and should live on for centuries, celebrated by all. "
        },
        {
          "route_id": 94,
          "adventure_id": 8,
          "user_id": 5,
          "content": "I'm confused. "
        },
        {
          "route_id": 95,
          "adventure_id": 9,
          "user_id": 1,
          "content": "OMG This adventure is so good!"
        },
        {
          "route_id": 96,
          "adventure_id": 10,
          "user_id": 2,
          "content": "This adventure bites butts."
        },
        {
          "route_id": 97,
          "adventure_id": 11,
          "user_id": 3,
          "content": "This surprised me. I am surprised"
        },
        {
          "route_id": 98,
          "adventure_id": 12,
          "user_id": 4,
          "content": "Wow!"
        },
        {
          "route_id": 99,
          "adventure_id": 13,
          "user_id": 5,
          "content": "wow. Just…okay then. "
        },
        {
          "route_id": 100,
          "adventure_id": 14,
          "user_id": 1,
          "content": "That was dissapointing. "
        },
        {
          "route_id": 101,
          "adventure_id": 15,
          "user_id": 2,
          "content": "That was the most amazing thing I've ever read!"
        },
        {
          "route_id": 102,
          "adventure_id": 16,
          "user_id": 3,
          "content": "This was just like Goosbumps!"
        },
        {
          "route_id": 103,
          "adventure_id": 1,
          "user_id": 4,
          "content": "WOWOWOW!"
        },
        {
          "route_id": 104,
          "adventure_id": 2,
          "user_id": 5,
          "content": "Wow!"
        },
        {
          "route_id": 105,
          "adventure_id": 3,
          "user_id": 1,
          "content": "Cool!"
        },
        {
          "route_id": 106,
          "adventure_id": 4,
          "user_id": 2,
          "content": "Nice!"
        },
        {
          "route_id": 1,
          "adventure_id": 5,
          "user_id": 3,
          "content": "First!"
        },
        {
          "route_id": 2,
          "adventure_id": 6,
          "user_id": 4,
          "content": "Whatever"
        },
        {
          "route_id": 3,
          "adventure_id": 7,
          "user_id": 5,
          "content": "Just some generic comment. "
        },
        {
          "route_id": 4,
          "adventure_id": 8,
          "user_id": 1,
          "content": "SOMETHING RACIST."
        },
        {
          "route_id": 5,
          "adventure_id": 9,
          "user_id": 2,
          "content": "SOMETHING really nice."
        },
        {
          "route_id": 6,
          "adventure_id": 10,
          "user_id": 3,
          "content": "a;Asiuewh wui awe awefiuh w awefpoihewf oih e. My heart…."
        },
        {
          "route_id": 7,
          "adventure_id": 11,
          "user_id": 4,
          "content": "This is a masterpiece of art and should live on for centuries, celebrated by all. "
        },
        {
          "route_id": 8,
          "adventure_id": 12,
          "user_id": 5,
          "content": "I'm confused. "
        },
        {
          "route_id": 9,
          "adventure_id": 13,
          "user_id": 1,
          "content": "OMG This adventure is so good!"
        },
        {
          "route_id": 10,
          "adventure_id": 14,
          "user_id": 2,
          "content": "This adventure bites butts."
        },
        {
          "route_id": 11,
          "adventure_id": 15,
          "user_id": 3,
          "content": "This surprised me. I am surprised"
        },
        {
          "route_id": 12,
          "adventure_id": 16,
          "user_id": 4,
          "content": "Wow!"
        },
        {
          "route_id": 13,
          "adventure_id": 1,
          "user_id": 5,
          "content": "wow. Just…okay then. "
        },
        {
          "route_id": 14,
          "adventure_id": 2,
          "user_id": 1,
          "content": "That was dissapointing. "
        },
        {
          "route_id": 15,
          "adventure_id": 3,
          "user_id": 2,
          "content": "That was the most amazing thing I've ever read!"
        },
        {
          "route_id": 16,
          "adventure_id": 4,
          "user_id": 3,
          "content": "This was just like Goosbumps!"
        },
        {
          "route_id": 17,
          "adventure_id": 5,
          "user_id": 4,
          "content": "WOWOWOW!"
        },
        {
          "route_id": 18,
          "adventure_id": 6,
          "user_id": 5,
          "content": "Wow!"
        },
        {
          "route_id": 19,
          "adventure_id": 7,
          "user_id": 1,
          "content": "Cool!"
        },
        {
          "route_id": 20,
          "adventure_id": 8,
          "user_id": 2,
          "content": "Nice!"
        },
        {
          "route_id": 21,
          "adventure_id": 9,
          "user_id": 3,
          "content": "First!"
        },
        {
          "route_id": 22,
          "adventure_id": 10,
          "user_id": 4,
          "content": "Whatever"
        },
        {
          "route_id": 23,
          "adventure_id": 11,
          "user_id": 5,
          "content": "Just some generic comment. "
        },
        {
          "route_id": 24,
          "adventure_id": 12,
          "user_id": 1,
          "content": "SOMETHING RACIST."
        },
        {
          "route_id": 25,
          "adventure_id": 13,
          "user_id": 2,
          "content": "SOMETHING really nice."
        },
        {
          "route_id": 26,
          "adventure_id": 14,
          "user_id": 3,
          "content": "a;Asiuewh wui awe awefiuh w awefpoihewf oih e. My heart…."
        },
        {
          "route_id": 27,
          "adventure_id": 15,
          "user_id": 4,
          "content": "This is a masterpiece of art and should live on for centuries, celebrated by all. "
        },
        {
          "route_id": 28,
          "adventure_id": 16,
          "user_id": 5,
          "content": "I'm confused. "
        },
        {
          "route_id": 29,
          "adventure_id": 1,
          "user_id": 1,
          "content": "OMG This adventure is so good!"
        },
        {
          "route_id": 30,
          "adventure_id": 2,
          "user_id": 2,
          "content": "This adventure bites butts."
        },
        {
          "route_id": 31,
          "adventure_id": 3,
          "user_id": 3,
          "content": "This surprised me. I am surprised"
        },
        {
          "route_id": 32,
          "adventure_id": 4,
          "user_id": 4,
          "content": "Wow!"
        },
        {
          "route_id": 33,
          "adventure_id": 5,
          "user_id": 5,
          "content": "wow. Just…okay then. "
        },
        {
          "route_id": 34,
          "adventure_id": 6,
          "user_id": 1,
          "content": "That was dissapointing. "
        },
        {
          "route_id": 35,
          "adventure_id": 7,
          "user_id": 2,
          "content": "That was the most amazing thing I've ever read!"
        },
        {
          "route_id": 36,
          "adventure_id": 8,
          "user_id": 3,
          "content": "This was just like Goosbumps!"
        },
        {
          "route_id": 37,
          "adventure_id": 9,
          "user_id": 4,
          "content": "WOWOWOW!"
        },
        {
          "route_id": 38,
          "adventure_id": 10,
          "user_id": 5,
          "content": "Wow!"
        },
        {
          "route_id": 39,
          "adventure_id": 11,
          "user_id": 1,
          "content": "Cool!"
        },
        {
          "route_id": 40,
          "adventure_id": 12,
          "user_id": 2,
          "content": "Nice!"
        },
        {
          "route_id": 41,
          "adventure_id": 13,
          "user_id": 3,
          "content": "First!"
        },
        {
          "route_id": 42,
          "adventure_id": 14,
          "user_id": 4,
          "content": "Whatever"
        },
        {
          "route_id": 43,
          "adventure_id": 15,
          "user_id": 5,
          "content": "Just some generic comment. "
        },
        {
          "route_id": 44,
          "adventure_id": 16,
          "user_id": 1,
          "content": "SOMETHING RACIST."
        },
        {
          "route_id": 45,
          "adventure_id": 1,
          "user_id": 2,
          "content": "SOMETHING really nice."
        },
        {
          "route_id": 46,
          "adventure_id": 2,
          "user_id": 3,
          "content": "a;Asiuewh wui awe awefiuh w awefpoihewf oih e. My heart…."
        },
        {
          "route_id": 47,
          "adventure_id": 3,
          "user_id": 4,
          "content": "This is a masterpiece of art and should live on for centuries, celebrated by all. "
        },
        {
          "route_id": 48,
          "adventure_id": 4,
          "user_id": 5,
          "content": "I'm confused. "
        },
        {
          "route_id": 49,
          "adventure_id": 5,
          "user_id": 1,
          "content": "OMG This adventure is so good!"
        },
        {
          "route_id": 50,
          "adventure_id": 6,
          "user_id": 2,
          "content": "This adventure bites butts."
        },
        {
          "route_id": 51,
          "adventure_id": 7,
          "user_id": 3,
          "content": "This surprised me. I am surprised"
        },
        {
          "route_id": 52,
          "adventure_id": 8,
          "user_id": 4,
          "content": "Wow!"
        },
        {
          "route_id": 53,
          "adventure_id": 9,
          "user_id": 5,
          "content": "wow. Just…okay then. "
        },
        {
          "route_id": 54,
          "adventure_id": 10,
          "user_id": 1,
          "content": "That was dissapointing. "
        },
        {
          "route_id": 55,
          "adventure_id": 11,
          "user_id": 2,
          "content": "That was the most amazing thing I've ever read!"
        },
        {
          "route_id": 56,
          "adventure_id": 12,
          "user_id": 3,
          "content": "This was just like Goosbumps!"
        },
        {
          "route_id": 57,
          "adventure_id": 13,
          "user_id": 4,
          "content": "WOWOWOW!"
        },
        {
          "route_id": 58,
          "adventure_id": 14,
          "user_id": 5,
          "content": "Wow!"
        },
        {
          "route_id": 59,
          "adventure_id": 15,
          "user_id": 1,
          "content": "Cool!"
        },
        {
          "route_id": 60,
          "adventure_id": 16,
          "user_id": 2,
          "content": "Nice!"
        },
        {
          "route_id": 61,
          "adventure_id": 1,
          "user_id": 3,
          "content": "First!"
        },
        {
          "route_id": 62,
          "adventure_id": 2,
          "user_id": 4,
          "content": "Whatever"
        },
        {
          "route_id": 63,
          "adventure_id": 3,
          "user_id": 5,
          "content": "Just some generic comment. "
        },
        {
          "route_id": 64,
          "adventure_id": 4,
          "user_id": 1,
          "content": "SOMETHING RACIST."
        },
        {
          "route_id": 65,
          "adventure_id": 5,
          "user_id": 2,
          "content": "SOMETHING really nice."
        },
        {
          "route_id": 66,
          "adventure_id": 6,
          "user_id": 3,
          "content": "a;Asiuewh wui awe awefiuh w awefpoihewf oih e. My heart…."
        },
        {
          "route_id": 67,
          "adventure_id": 7,
          "user_id": 4,
          "content": "This is a masterpiece of art and should live on for centuries, celebrated by all. "
        },
        {
          "route_id": 68,
          "adventure_id": 8,
          "user_id": 5,
          "content": "I'm confused. "
        },
        {
          "route_id": 69,
          "adventure_id": 9,
          "user_id": 1,
          "content": "OMG This adventure is so good!"
        },
        {
          "route_id": 70,
          "adventure_id": 10,
          "user_id": 2,
          "content": "This adventure bites butts."
        },
        {
          "route_id": 71,
          "adventure_id": 11,
          "user_id": 3,
          "content": "This surprised me. I am surprised"
        },
        {
          "route_id": 72,
          "adventure_id": 12,
          "user_id": 4,
          "content": "Wow!"
        },
        {
          "route_id": 73,
          "adventure_id": 13,
          "user_id": 5,
          "content": "wow. Just…okay then. "
        },
        {
          "route_id": 74,
          "adventure_id": 14,
          "user_id": 1,
          "content": "That was dissapointing. "
        },
        {
          "route_id": 75,
          "adventure_id": 15,
          "user_id": 2,
          "content": "That was the most amazing thing I've ever read!"
        },
        {
          "route_id": 76,
          "adventure_id": 16,
          "user_id": 3,
          "content": "This was just like Goosbumps!"
        },
        {
          "route_id": 77,
          "adventure_id": 1,
          "user_id": 4,
          "content": "WOWOWOW!"
        },
        {
          "route_id": 78,
          "adventure_id": 2,
          "user_id": 5,
          "content": "Wow!"
        },
        {
          "route_id": 79,
          "adventure_id": 3,
          "user_id": 1,
          "content": "Cool!"
        },
        {
          "route_id": 80,
          "adventure_id": 4,
          "user_id": 2,
          "content": "Nice!"
        },
        {
          "route_id": 81,
          "adventure_id": 5,
          "user_id": 3,
          "content": "First!"
        },
        {
          "route_id": 82,
          "adventure_id": 6,
          "user_id": 4,
          "content": "Whatever"
        },
        {
          "route_id": 83,
          "adventure_id": 7,
          "user_id": 5,
          "content": "Just some generic comment. "
        },
        {
          "route_id": 84,
          "adventure_id": 8,
          "user_id": 1,
          "content": "SOMETHING RACIST."
        },
        {
          "route_id": 85,
          "adventure_id": 9,
          "user_id": 2,
          "content": "SOMETHING really nice."
        },
        {
          "route_id": 86,
          "adventure_id": 10,
          "user_id": 3,
          "content": "a;Asiuewh wui awe awefiuh w awefpoihewf oih e. My heart…."
        },
        {
          "route_id": 87,
          "adventure_id": 11,
          "user_id": 4,
          "content": "This is a masterpiece of art and should live on for centuries, celebrated by all. "
        },
        {
          "route_id": 88,
          "adventure_id": 12,
          "user_id": 5,
          "content": "I'm confused. "
        },
        {
          "route_id": 89,
          "adventure_id": 13,
          "user_id": 1,
          "content": "OMG This adventure is so good!"
        },
        {
          "route_id": 90,
          "adventure_id": 14,
          "user_id": 2,
          "content": "This adventure bites butts."
        },
        {
          "route_id": 91,
          "adventure_id": 15,
          "user_id": 3,
          "content": "This surprised me. I am surprised"
        },
        {
          "route_id": 92,
          "adventure_id": 16,
          "user_id": 4,
          "content": "Wow!"
        },
        {
          "route_id": 93,
          "adventure_id": 1,
          "user_id": 5,
          "content": "wow. Just…okay then. "
        },
        {
          "route_id": 94,
          "adventure_id": 2,
          "user_id": 1,
          "content": "That was dissapointing. "
        },
        {
          "route_id": 95,
          "adventure_id": 3,
          "user_id": 2,
          "content": "That was the most amazing thing I've ever read!"
        },
        {
          "route_id": 96,
          "adventure_id": 4,
          "user_id": 3,
          "content": "This was just like Goosbumps!"
        },
        {
          "route_id": 97,
          "adventure_id": 5,
          "user_id": 4,
          "content": "WOWOWOW!"
        },
        {
          "route_id": 98,
          "adventure_id": 6,
          "user_id": 5,
          "content": "Wow!"
        },
        {
          "route_id": 99,
          "adventure_id": 7,
          "user_id": 1,
          "content": "Cool!"
        },
        {
          "route_id": 100,
          "adventure_id": 8,
          "user_id": 2,
          "content": "Nice!"
        },
        {
          "route_id": 101,
          "adventure_id": 9,
          "user_id": 3,
          "content": "First!"
        },
        {
          "route_id": 102,
          "adventure_id": 10,
          "user_id": 4,
          "content": "Whatever"
        },
        {
          "route_id": 103,
          "adventure_id": 11,
          "user_id": 5,
          "content": "Just some generic comment. "
        },
        {
          "route_id": 104,
          "adventure_id": 12,
          "user_id": 1,
          "content": "SOMETHING RACIST."
        },
        {
          "route_id": 105,
          "adventure_id": 13,
          "user_id": 2,
          "content": "SOMETHING really nice."
        },
        {
          "route_id": 106,
          "adventure_id": 14,
          "user_id": 3,
          "content": "a;Asiuewh wui awe awefiuh w awefpoihewf oih e. My heart…."
        },
        {
          "route_id": 1,
          "adventure_id": 15,
          "user_id": 4,
          "content": "This is a masterpiece of art and should live on for centuries, celebrated by all. "
        },
        {
          "route_id": 2,
          "adventure_id": 16,
          "user_id": 5,
          "content": "I'm confused. "
        },
        {
          "route_id": 3,
          "adventure_id": 1,
          "user_id": 1,
          "content": "OMG This adventure is so good!"
        },
        {
          "route_id": 4,
          "adventure_id": 2,
          "user_id": 2,
          "content": "This adventure bites butts."
        },
        {
          "route_id": 5,
          "adventure_id": 3,
          "user_id": 3,
          "content": "This surprised me. I am surprised"
        },
        {
          "route_id": 6,
          "adventure_id": 4,
          "user_id": 4,
          "content": "Wow!"
        },
        {
          "route_id": 7,
          "adventure_id": 5,
          "user_id": 5,
          "content": "wow. Just…okay then. "
        },
        {
          "route_id": 8,
          "adventure_id": 6,
          "user_id": 1,
          "content": "That was dissapointing. "
        },
        {
          "route_id": 9,
          "adventure_id": 7,
          "user_id": 2,
          "content": "That was the most amazing thing I've ever read!"
        },
        {
          "route_id": 10,
          "adventure_id": 8,
          "user_id": 3,
          "content": "This was just like Goosbumps!"
        },
        {
          "route_id": 11,
          "adventure_id": 9,
          "user_id": 4,
          "content": "WOWOWOW!"
        },
        {
          "route_id": 12,
          "adventure_id": 10,
          "user_id": 5,
          "content": "Wow!"
        },
        {
          "route_id": 13,
          "adventure_id": 11,
          "user_id": 1,
          "content": "Cool!"
        },
        {
          "route_id": 14,
          "adventure_id": 12,
          "user_id": 2,
          "content": "Nice!"
        },
        {
          "route_id": 15,
          "adventure_id": 13,
          "user_id": 3,
          "content": "First!"
        },
        {
          "route_id": 16,
          "adventure_id": 14,
          "user_id": 4,
          "content": "Whatever"
        },
        {
          "route_id": 17,
          "adventure_id": 15,
          "user_id": 5,
          "content": "Just some generic comment. "
        },
        {
          "route_id": 18,
          "adventure_id": 16,
          "user_id": 1,
          "content": "SOMETHING RACIST."
        },
        {
          "route_id": 19,
          "adventure_id": 1,
          "user_id": 2,
          "content": "SOMETHING really nice."
        },
        {
          "route_id": 20,
          "adventure_id": 2,
          "user_id": 3,
          "content": "a;Asiuewh wui awe awefiuh w awefpoihewf oih e. My heart…."
        },
        {
          "route_id": 21,
          "adventure_id": 3,
          "user_id": 4,
          "content": "This is a masterpiece of art and should live on for centuries, celebrated by all. "
        },
        {
          "route_id": 22,
          "adventure_id": 4,
          "user_id": 5,
          "content": "I'm confused. "
        },
        {
          "route_id": 23,
          "adventure_id": 5,
          "user_id": 1,
          "content": "OMG This adventure is so good!"
        },
        {
          "route_id": 24,
          "adventure_id": 6,
          "user_id": 2,
          "content": "This adventure bites butts."
        },
        {
          "route_id": 25,
          "adventure_id": 7,
          "user_id": 3,
          "content": "This surprised me. I am surprised"
        },
        {
          "route_id": 26,
          "adventure_id": 8,
          "user_id": 4,
          "content": "Wow!"
        },
        {
          "route_id": 27,
          "adventure_id": 9,
          "user_id": 5,
          "content": "wow. Just…okay then. "
        },
        {
          "route_id": 28,
          "adventure_id": 10,
          "user_id": 1,
          "content": "That was dissapointing. "
        },
        {
          "route_id": 29,
          "adventure_id": 11,
          "user_id": 2,
          "content": "That was the most amazing thing I've ever read!"
        },
        {
          "route_id": 30,
          "adventure_id": 12,
          "user_id": 3,
          "content": "This was just like Goosbumps!"
        },
        {
          "route_id": 31,
          "adventure_id": 13,
          "user_id": 4,
          "content": "WOWOWOW!"
        },
        {
          "route_id": 32,
          "adventure_id": 14,
          "user_id": 5,
          "content": "Wow!"
        },
        {
          "route_id": 33,
          "adventure_id": 15,
          "user_id": 1,
          "content": "Cool!"
        },
        {
          "route_id": 34,
          "adventure_id": 16,
          "user_id": 2,
          "content": "Nice!"
        },
        {
          "route_id": 35,
          "adventure_id": 1,
          "user_id": 3,
          "content": "First!"
        },
        {
          "route_id": 36,
          "adventure_id": 2,
          "user_id": 4,
          "content": "Whatever"
        },
        {
          "route_id": 37,
          "adventure_id": 3,
          "user_id": 5,
          "content": "Just some generic comment. "
        },
        {
          "route_id": 38,
          "adventure_id": 4,
          "user_id": 1,
          "content": "SOMETHING RACIST."
        },
        {
          "route_id": 39,
          "adventure_id": 5,
          "user_id": 2,
          "content": "SOMETHING really nice."
        },
        {
          "route_id": 40,
          "adventure_id": 6,
          "user_id": 3,
          "content": "a;Asiuewh wui awe awefiuh w awefpoihewf oih e. My heart…."
        },
        {
          "route_id": 41,
          "adventure_id": 7,
          "user_id": 4,
          "content": "This is a masterpiece of art and should live on for centuries, celebrated by all. "
        },
        {
          "route_id": 42,
          "adventure_id": 8,
          "user_id": 5,
          "content": "I'm confused. "
        },
        {
          "route_id": 43,
          "adventure_id": 9,
          "user_id": 1,
          "content": "OMG This adventure is so good!"
        },
        {
          "route_id": 44,
          "adventure_id": 10,
          "user_id": 2,
          "content": "This adventure bites butts."
        },
        {
          "route_id": 45,
          "adventure_id": 11,
          "user_id": 3,
          "content": "This surprised me. I am surprised"
        },
        {
          "route_id": 46,
          "adventure_id": 12,
          "user_id": 4,
          "content": "Wow!"
        },
        {
          "route_id": 47,
          "adventure_id": 13,
          "user_id": 5,
          "content": "wow. Just…okay then. "
        },
        {
          "route_id": 48,
          "adventure_id": 14,
          "user_id": 1,
          "content": "That was dissapointing. "
        },
        {
          "route_id": 49,
          "adventure_id": 15,
          "user_id": 2,
          "content": "That was the most amazing thing I've ever read!"
        },
        {
          "route_id": 50,
          "adventure_id": 16,
          "user_id": 3,
          "content": "This was just like Goosbumps!"
        },
        {
          "route_id": 51,
          "adventure_id": 1,
          "user_id": 4,
          "content": "WOWOWOW!"
        },
        {
          "route_id": 52,
          "adventure_id": 2,
          "user_id": 5,
          "content": "Wow!"
        },
        {
          "route_id": 53,
          "adventure_id": 3,
          "user_id": 1,
          "content": "Cool!"
        },
        {
          "route_id": 54,
          "adventure_id": 4,
          "user_id": 2,
          "content": "Nice!"
        },
        {
          "route_id": 55,
          "adventure_id": 5,
          "user_id": 3,
          "content": "First!"
        },
        {
          "route_id": 56,
          "adventure_id": 6,
          "user_id": 4,
          "content": "Whatever"
        },
        {
          "route_id": 57,
          "adventure_id": 7,
          "user_id": 5,
          "content": "Just some generic comment. "
        },
        {
          "route_id": 58,
          "adventure_id": 8,
          "user_id": 1,
          "content": "SOMETHING RACIST."
        },
        {
          "route_id": 59,
          "adventure_id": 9,
          "user_id": 2,
          "content": "SOMETHING really nice."
        },
        {
          "route_id": 60,
          "adventure_id": 10,
          "user_id": 3,
          "content": "a;Asiuewh wui awe awefiuh w awefpoihewf oih e. My heart…."
        },
        {
          "route_id": 61,
          "adventure_id": 11,
          "user_id": 4,
          "content": "This is a masterpiece of art and should live on for centuries, celebrated by all. "
        },
        {
          "route_id": 62,
          "adventure_id": 12,
          "user_id": 5,
          "content": "I'm confused. "
        },
        {
          "route_id": 63,
          "adventure_id": 13,
          "user_id": 1,
          "content": "OMG This adventure is so good!"
        },
        {
          "route_id": 64,
          "adventure_id": 14,
          "user_id": 2,
          "content": "This adventure bites butts."
        },
        {
          "route_id": 65,
          "adventure_id": 15,
          "user_id": 3,
          "content": "This surprised me. I am surprised"
        },
        {
          "route_id": 66,
          "adventure_id": 16,
          "user_id": 4,
          "content": "Wow!"
        },
        {
          "route_id": 67,
          "adventure_id": 1,
          "user_id": 5,
          "content": "wow. Just…okay then. "
        },
        {
          "route_id": 68,
          "adventure_id": 2,
          "user_id": 1,
          "content": "That was dissapointing. "
        },
        {
          "route_id": 69,
          "adventure_id": 3,
          "user_id": 2,
          "content": "That was the most amazing thing I've ever read!"
        },
        {
          "route_id": 70,
          "adventure_id": 4,
          "user_id": 3,
          "content": "This was just like Goosbumps!"
        },
        {
          "route_id": 71,
          "adventure_id": 5,
          "user_id": 4,
          "content": "WOWOWOW!"
        },
        {
          "route_id": 72,
          "adventure_id": 6,
          "user_id": 5,
          "content": "Wow!"
        },
        {
          "route_id": 73,
          "adventure_id": 7,
          "user_id": 1,
          "content": "Cool!"
        },
        {
          "route_id": 74,
          "adventure_id": 8,
          "user_id": 2,
          "content": "Nice!"
        },
        {
          "route_id": 75,
          "adventure_id": 9,
          "user_id": 3,
          "content": "First!"
        },
        {
          "route_id": 76,
          "adventure_id": 10,
          "user_id": 4,
          "content": "Whatever"
        },
        {
          "route_id": 77,
          "adventure_id": 11,
          "user_id": 5,
          "content": "Just some generic comment. "
        },
        {
          "route_id": 78,
          "adventure_id": 12,
          "user_id": 1,
          "content": "SOMETHING RACIST."
        },
        {
          "route_id": 79,
          "adventure_id": 13,
          "user_id": 2,
          "content": "SOMETHING really nice."
        },
        {
          "route_id": 80,
          "adventure_id": 14,
          "user_id": 3,
          "content": "a;Asiuewh wui awe awefiuh w awefpoihewf oih e. My heart…."
        },
        {
          "route_id": 81,
          "adventure_id": 15,
          "user_id": 4,
          "content": "This is a masterpiece of art and should live on for centuries, celebrated by all. "
        },
        {
          "route_id": 82,
          "adventure_id": 16,
          "user_id": 5,
          "content": "I'm confused. "
        },
        {
          "route_id": 83,
          "adventure_id": 1,
          "user_id": 1,
          "content": "OMG This adventure is so good!"
        },
        {
          "route_id": 84,
          "adventure_id": 2,
          "user_id": 2,
          "content": "This adventure bites butts."
        },
        {
          "route_id": 85,
          "adventure_id": 3,
          "user_id": 3,
          "content": "This surprised me. I am surprised"
        },
        {
          "route_id": 86,
          "adventure_id": 4,
          "user_id": 4,
          "content": "Wow!"
        },
        {
          "route_id": 87,
          "adventure_id": 5,
          "user_id": 5,
          "content": "wow. Just…okay then. "
        },
        {
          "route_id": 88,
          "adventure_id": 6,
          "user_id": 1,
          "content": "That was dissapointing. "
        },
        {
          "route_id": 89,
          "adventure_id": 7,
          "user_id": 2,
          "content": "That was the most amazing thing I've ever read!"
        },
        {
          "route_id": 90,
          "adventure_id": 8,
          "user_id": 3,
          "content": "This was just like Goosbumps!"
        },
        {
          "route_id": 91,
          "adventure_id": 9,
          "user_id": 4,
          "content": "WOWOWOW!"
        },
        {
          "route_id": 92,
          "adventure_id": 10,
          "user_id": 5,
          "content": "Wow!"
        },
        {
          "route_id": 93,
          "adventure_id": 11,
          "user_id": 1,
          "content": "Cool!"
        },
        {
          "route_id": 94,
          "adventure_id": 12,
          "user_id": 2,
          "content": "Nice!"
        },
        {
          "route_id": 95,
          "adventure_id": 13,
          "user_id": 3,
          "content": "First!"
        },
        {
          "route_id": 96,
          "adventure_id": 14,
          "user_id": 4,
          "content": "Whatever"
        },
        {
          "route_id": 97,
          "adventure_id": 15,
          "user_id": 5,
          "content": "Just some generic comment. "
        },
        {
          "route_id": 98,
          "adventure_id": 16,
          "user_id": 1,
          "content": "SOMETHING RACIST."
        },
        {
          "route_id": 99,
          "adventure_id": 1,
          "user_id": 2,
          "content": "SOMETHING really nice."
        },
        {
          "route_id": 100,
          "adventure_id": 2,
          "user_id": 3,
          "content": "a;Asiuewh wui awe awefiuh w awefpoihewf oih e. My heart…."
        },
        {
          "route_id": 101,
          "adventure_id": 3,
          "user_id": 4,
          "content": "This is a masterpiece of art and should live on for centuries, celebrated by all. "
        },
        {
          "route_id": 102,
          "adventure_id": 4,
          "user_id": 5,
          "content": "I'm confused. "
        },
        {
          "route_id": 103,
          "adventure_id": 5,
          "user_id": 1,
          "content": "OMG This adventure is so good!"
        },
        {
          "route_id": 104,
          "adventure_id": 6,
          "user_id": 2,
          "content": "This adventure bites butts."
        },
        {
          "route_id": 105,
          "adventure_id": 7,
          "user_id": 3,
          "content": "This surprised me. I am surprised"
        },
        {
          "route_id": 106,
          "adventure_id": 8,
          "user_id": 4,
          "content": "Wow!"
        },
        {
          "route_id": 1,
          "adventure_id": 9,
          "user_id": 5,
          "content": "wow. Just…okay then. "
        },
        {
          "route_id": 2,
          "adventure_id": 10,
          "user_id": 1,
          "content": "That was dissapointing. "
        },
        {
          "route_id": 3,
          "adventure_id": 11,
          "user_id": 2,
          "content": "That was the most amazing thing I've ever read!"
        },
        {
          "route_id": 4,
          "adventure_id": 12,
          "user_id": 3,
          "content": "This was just like Goosbumps!"
        },
        {
          "route_id": 5,
          "adventure_id": 13,
          "user_id": 4,
          "content": "WOWOWOW!"
        },
        {
          "route_id": 6,
          "adventure_id": 14,
          "user_id": 5,
          "content": "Wow!"
        },
        {
          "route_id": 7,
          "adventure_id": 15,
          "user_id": 1,
          "content": "Cool!"
        },
        {
          "route_id": 8,
          "adventure_id": 16,
          "user_id": 2,
          "content": "Nice!"
        },
        {
          "route_id": 9,
          "adventure_id": 1,
          "user_id": 3,
          "content": "First!"
        },
        {
          "route_id": 10,
          "adventure_id": 2,
          "user_id": 4,
          "content": "Whatever"
        },
        {
          "route_id": 11,
          "adventure_id": 3,
          "user_id": 5,
          "content": "Just some generic comment. "
        },
        {
          "route_id": 12,
          "adventure_id": 4,
          "user_id": 1,
          "content": "SOMETHING RACIST."
        },
        {
          "route_id": 13,
          "adventure_id": 5,
          "user_id": 2,
          "content": "SOMETHING really nice."
        },
        {
          "route_id": 14,
          "adventure_id": 6,
          "user_id": 3,
          "content": "a;Asiuewh wui awe awefiuh w awefpoihewf oih e. My heart…."
        },
        {
          "route_id": 15,
          "adventure_id": 7,
          "user_id": 4,
          "content": "This is a masterpiece of art and should live on for centuries, celebrated by all. "
        },
        {
          "route_id": 16,
          "adventure_id": 8,
          "user_id": 5,
          "content": "I'm confused. "
        },
        {
          "route_id": 17,
          "adventure_id": 9,
          "user_id": 1,
          "content": "OMG This adventure is so good!"
        },
        {
          "route_id": 18,
          "adventure_id": 10,
          "user_id": 2,
          "content": "This adventure bites butts."
        },
        {
          "route_id": 19,
          "adventure_id": 11,
          "user_id": 3,
          "content": "This surprised me. I am surprised"
        },
        {
          "route_id": 20,
          "adventure_id": 12,
          "user_id": 4,
          "content": "Wow!"
        },
        {
          "route_id": 21,
          "adventure_id": 13,
          "user_id": 5,
          "content": "wow. Just…okay then. "
        },
        {
          "route_id": 22,
          "adventure_id": 14,
          "user_id": 1,
          "content": "That was dissapointing. "
        },
        {
          "route_id": 23,
          "adventure_id": 15,
          "user_id": 2,
          "content": "That was the most amazing thing I've ever read!"
        },
        {
          "route_id": 24,
          "adventure_id": 16,
          "user_id": 3,
          "content": "This was just like Goosbumps!"
        },
        {
          "route_id": 25,
          "adventure_id": 1,
          "user_id": 4,
          "content": "WOWOWOW!"
        },
        {
          "route_id": 26,
          "adventure_id": 2,
          "user_id": 5,
          "content": "Wow!"
        },
        {
          "route_id": 27,
          "adventure_id": 3,
          "user_id": 1,
          "content": "Cool!"
        },
        {
          "route_id": 28,
          "adventure_id": 4,
          "user_id": 2,
          "content": "Nice!"
        },
        {
          "route_id": 29,
          "adventure_id": 5,
          "user_id": 3,
          "content": "First!"
        },
        {
          "route_id": 30,
          "adventure_id": 6,
          "user_id": 4,
          "content": "Whatever"
        },
        {
          "route_id": 31,
          "adventure_id": 7,
          "user_id": 5,
          "content": "Just some generic comment. "
        },
        {
          "route_id": 32,
          "adventure_id": 8,
          "user_id": 1,
          "content": "SOMETHING RACIST."
        },
        {
          "route_id": 33,
          "adventure_id": 9,
          "user_id": 2,
          "content": "SOMETHING really nice."
        },
        {
          "route_id": 34,
          "adventure_id": 10,
          "user_id": 3,
          "content": "a;Asiuewh wui awe awefiuh w awefpoihewf oih e. My heart…."
        },
        {
          "route_id": 35,
          "adventure_id": 11,
          "user_id": 4,
          "content": "This is a masterpiece of art and should live on for centuries, celebrated by all. "
        },
        {
          "route_id": 36,
          "adventure_id": 12,
          "user_id": 5,
          "content": "I'm confused. "
        },
        {
          "route_id": 37,
          "adventure_id": 13,
          "user_id": 1,
          "content": "OMG This adventure is so good!"
        },
        {
          "route_id": 38,
          "adventure_id": 14,
          "user_id": 2,
          "content": "This adventure bites butts."
        },
        {
          "route_id": 39,
          "adventure_id": 15,
          "user_id": 3,
          "content": "This surprised me. I am surprised"
        },
        {
          "route_id": 40,
          "adventure_id": 16,
          "user_id": 4,
          "content": "Wow!"
        },
        {
          "route_id": 41,
          "adventure_id": 1,
          "user_id": 5,
          "content": "wow. Just…okay then. "
        },
        {
          "route_id": 42,
          "adventure_id": 2,
          "user_id": 1,
          "content": "That was dissapointing. "
        },
        {
          "route_id": 43,
          "adventure_id": 3,
          "user_id": 2,
          "content": "That was the most amazing thing I've ever read!"
        },
        {
          "route_id": 44,
          "adventure_id": 4,
          "user_id": 3,
          "content": "This was just like Goosbumps!"
        },
        {
          "route_id": 45,
          "adventure_id": 5,
          "user_id": 4,
          "content": "WOWOWOW!"
        },
        {
          "route_id": 46,
          "adventure_id": 6,
          "user_id": 5,
          "content": "Wow!"
        },
        {
          "route_id": 47,
          "adventure_id": 7,
          "user_id": 1,
          "content": "Cool!"
        },
        {
          "route_id": 48,
          "adventure_id": 8,
          "user_id": 2,
          "content": "Nice!"
        },
        {
          "route_id": 49,
          "adventure_id": 9,
          "user_id": 3,
          "content": "First!"
        },
        {
          "route_id": 50,
          "adventure_id": 10,
          "user_id": 4,
          "content": "Whatever"
        },
        {
          "route_id": 51,
          "adventure_id": 11,
          "user_id": 5,
          "content": "Just some generic comment. "
        },
        {
          "route_id": 52,
          "adventure_id": 12,
          "user_id": 1,
          "content": "SOMETHING RACIST."
        },
        {
          "route_id": 53,
          "adventure_id": 13,
          "user_id": 2,
          "content": "SOMETHING really nice."
        },
        {
          "route_id": 54,
          "adventure_id": 14,
          "user_id": 3,
          "content": "a;Asiuewh wui awe awefiuh w awefpoihewf oih e. My heart…."
        },
        {
          "route_id": 55,
          "adventure_id": 15,
          "user_id": 4,
          "content": "This is a masterpiece of art and should live on for centuries, celebrated by all. "
        },
        {
          "route_id": 56,
          "adventure_id": 16,
          "user_id": 5,
          "content": "I'm confused. "
        },
        {
          "route_id": 57,
          "adventure_id": 1,
          "user_id": 1,
          "content": "OMG This adventure is so good!"
        },
        {
          "route_id": 58,
          "adventure_id": 2,
          "user_id": 2,
          "content": "This adventure bites butts."
        },
        {
          "route_id": 59,
          "adventure_id": 3,
          "user_id": 3,
          "content": "This surprised me. I am surprised"
        },
        {
          "route_id": 60,
          "adventure_id": 4,
          "user_id": 4,
          "content": "Wow!"
        },
        {
          "route_id": 61,
          "adventure_id": 5,
          "user_id": 5,
          "content": "wow. Just…okay then. "
        },
        {
          "route_id": 62,
          "adventure_id": 6,
          "user_id": 1,
          "content": "That was dissapointing. "
        },
        {
          "route_id": 63,
          "adventure_id": 7,
          "user_id": 2,
          "content": "That was the most amazing thing I've ever read!"
        },
        {
          "route_id": 64,
          "adventure_id": 8,
          "user_id": 3,
          "content": "This was just like Goosbumps!"
        },
        {
          "route_id": 65,
          "adventure_id": 9,
          "user_id": 4,
          "content": "WOWOWOW!"
        },
        {
          "route_id": 66,
          "adventure_id": 10,
          "user_id": 5,
          "content": "Wow!"
        },
        {
          "route_id": 67,
          "adventure_id": 11,
          "user_id": 1,
          "content": "Cool!"
        },
        {
          "route_id": 68,
          "adventure_id": 12,
          "user_id": 2,
          "content": "Nice!"
        },
        {
          "route_id": 69,
          "adventure_id": 13,
          "user_id": 3,
          "content": "First!"
        },
        {
          "route_id": 70,
          "adventure_id": 14,
          "user_id": 4,
          "content": "Whatever"
        },
        {
          "route_id": 71,
          "adventure_id": 15,
          "user_id": 5,
          "content": "Just some generic comment. "
        },
        {
          "route_id": 72,
          "adventure_id": 16,
          "user_id": 1,
          "content": "SOMETHING RACIST."
        },
        {
          "route_id": 73,
          "adventure_id": 1,
          "user_id": 2,
          "content": "SOMETHING really nice."
        },
        {
          "route_id": 74,
          "adventure_id": 2,
          "user_id": 3,
          "content": "a;Asiuewh wui awe awefiuh w awefpoihewf oih e. My heart…."
        },
        {
          "route_id": 75,
          "adventure_id": 3,
          "user_id": 4,
          "content": "This is a masterpiece of art and should live on for centuries, celebrated by all. "
        },
        {
          "route_id": 76,
          "adventure_id": 4,
          "user_id": 5,
          "content": "I'm confused. "
        },
        {
          "route_id": 77,
          "adventure_id": 5,
          "user_id": 1,
          "content": "OMG This adventure is so good!"
        },
        {
          "route_id": 78,
          "adventure_id": 6,
          "user_id": 2,
          "content": "This adventure bites butts."
        },
        {
          "route_id": 79,
          "adventure_id": 7,
          "user_id": 3,
          "content": "This surprised me. I am surprised"
        },
        {
          "route_id": 80,
          "adventure_id": 8,
          "user_id": 4,
          "content": "Wow!"
        },
        {
          "route_id": 81,
          "adventure_id": 9,
          "user_id": 5,
          "content": "wow. Just…okay then. "
        },
        {
          "route_id": 82,
          "adventure_id": 10,
          "user_id": 1,
          "content": "That was dissapointing. "
        },
        {
          "route_id": 83,
          "adventure_id": 11,
          "user_id": 2,
          "content": "That was the most amazing thing I've ever read!"
        },
        {
          "route_id": 84,
          "adventure_id": 12,
          "user_id": 3,
          "content": "This was just like Goosbumps!"
        },
        {
          "route_id": 85,
          "adventure_id": 13,
          "user_id": 4,
          "content": "WOWOWOW!"
        },
        {
          "route_id": 86,
          "adventure_id": 14,
          "user_id": 5,
          "content": "Wow!"
        },
        {
          "route_id": 87,
          "adventure_id": 15,
          "user_id": 1,
          "content": "Cool!"
        },
        {
          "route_id": 88,
          "adventure_id": 16,
          "user_id": 2,
          "content": "Nice!"
        },
        {
          "route_id": 89,
          "adventure_id": 1,
          "user_id": 3,
          "content": "First!"
        },
        {
          "route_id": 90,
          "adventure_id": 2,
          "user_id": 4,
          "content": "Whatever"
        },
        {
          "route_id": 91,
          "adventure_id": 3,
          "user_id": 5,
          "content": "Just some generic comment. "
        },
        {
          "route_id": 92,
          "adventure_id": 4,
          "user_id": 1,
          "content": "SOMETHING RACIST."
        },
        {
          "route_id": 93,
          "adventure_id": 5,
          "user_id": 2,
          "content": "SOMETHING really nice."
        },
        {
          "route_id": 94,
          "adventure_id": 6,
          "user_id": 3,
          "content": "a;Asiuewh wui awe awefiuh w awefpoihewf oih e. My heart…."
        },
        {
          "route_id": 95,
          "adventure_id": 7,
          "user_id": 4,
          "content": "This is a masterpiece of art and should live on for centuries, celebrated by all. "
        },
        {
          "route_id": 96,
          "adventure_id": 8,
          "user_id": 5,
          "content": "I'm confused. "
        },
        {
          "route_id": 97,
          "adventure_id": 9,
          "user_id": 1,
          "content": "OMG This adventure is so good!"
        },
        {
          "route_id": 98,
          "adventure_id": 10,
          "user_id": 2,
          "content": "This adventure bites butts."
        },
        {
          "route_id": 99,
          "adventure_id": 11,
          "user_id": 3,
          "content": "This surprised me. I am surprised"
        },
        {
          "route_id": 100,
          "adventure_id": 12,
          "user_id": 4,
          "content": "Wow!"
        },
        {
          "route_id": 101,
          "adventure_id": 13,
          "user_id": 5,
          "content": "wow. Just…okay then. "
        },
        {
          "route_id": 102,
          "adventure_id": 14,
          "user_id": 1,
          "content": "That was dissapointing. "
        },
        {
          "route_id": 103,
          "adventure_id": 15,
          "user_id": 2,
          "content": "That was the most amazing thing I've ever read!"
        },
        {
          "route_id": 104,
          "adventure_id": 16,
          "user_id": 3,
          "content": "This was just like Goosbumps!"
        },
        {
          "route_id": 105,
          "adventure_id": 6,
          "user_id": 4,
          "content": "WOWOWOW!"
        },
        {
          "route_id": 106,
          "adventure_id": 6,
          "user_id": 5,
          "content": "Wow!"
        },
        {
          "route_id": 1,
          "adventure_id": 6,
          "user_id": 1,
          "content": "Cool!"
        },
        {
          "route_id": 2,
          "adventure_id": 6,
          "user_id": 2,
          "content": "Nice!"
        },
        {
          "route_id": 3,
          "adventure_id": 7,
          "user_id": 3,
          "content": "First!"
        },
        {
          "route_id": 4,
          "adventure_id": 7,
          "user_id": 4,
          "content": "Whatever"
        },
        {
          "route_id": 5,
          "adventure_id": 7,
          "user_id": 5,
          "content": "Just some generic comment. "
        },
        {
          "route_id": 6,
          "adventure_id": 7,
          "user_id": 1,
          "content": "SOMETHING RACIST."
        },
        {
          "route_id": 7,
          "adventure_id": 7,
          "user_id": 2,
          "content": "SOMETHING really nice."
        },
        {
          "route_id": 8,
          "adventure_id": 8,
          "user_id": 3,
          "content": "a;Asiuewh wui awe awefiuh w awefpoihewf oih e. My heart…."
        },
        {
          "route_id": 9,
          "adventure_id": 8,
          "user_id": 4,
          "content": "This is a masterpiece of art and should live on for centuries, celebrated by all. "
        },
        {
          "route_id": 10,
          "adventure_id": 8,
          "user_id": 5,
          "content": "I'm confused. "
        }
      ]);
    });
};

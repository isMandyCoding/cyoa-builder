
const bcrypt = require('bcrypt-nodejs')
exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          "email": "email1@email.com",
          "firstName": "Mandy",
          "lastName": "Everett",
          "password": "password", //bcrypt.hashSync("password"),
          "username": "mandyme"
        },
        {
          "email": "email2@email.com",
          "firstName": "Nancy",
          "lastName": "Butler",
          "password": "password", //bcrypt.hashSync("password"),
          "username": "nancyb"
        },
        {
          "email": "email3@email.com",
          "firstName": "David",
          "lastName": "Murcek",
          "password": "password", //bcrypt.hashSync("password"),
          "username": "davidm"
        },
        {
          "email": "email4@email.com",
          "firstName": "Rico",
          "lastName": "Woods",
          "password": "password", //bcrypt.hashSync("password"),
          "username": "ricow"
        },
        {
          "email": "email5@email.com",
          "firstName": "Greg",
          "lastName": "Olivas",
          "password": "password", //bcrypt.hashSync("password"),
          "username": "grego"
        },
      ]);
    });
};

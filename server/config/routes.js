//Update the name of the controller below and rename the file.
// const auth = require("../controllers/auth.js")
//to be implemented later
// const jwt = require('jsonwebtoken')

const adventures = require('../controllers/adventures')

module.exports = function (app) {
    //route to get all adventures sorted by votes
    app.get('/', adventures.getAllAdventures)
}
//Update the name of the controller below and rename the file.
// const auth = require("../controllers/auth.js")
//to be implemented later
// const jwt = require('jsonwebtoken')

const adventures = require('../controllers/adventures')

module.exports = function (app) {
    //ROUTE TO GET ALL ADVENTURES SORTED BY VOTES
    app.get('/', adventures.getAllAdventures)

    //LOGGED IN USERS ONLY
    //ROUTE TO GET JUST ONE ADVENTURE
    app.get('/adventures/:adventure_id', adventures.getOneAdventure)
    //ROUTE TO ADD NEW ADVENTURE
    app.post('/adventures/new', adventures.addNewAdventure)
}
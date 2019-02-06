//Update the name of the controller below and rename the file.
// const auth = require("../controllers/auth.js")
//to be implemented later
// const jwt = require('jsonwebtoken')

const adventures = require('../controllers/adventures')
const adventure_routes = require('../controllers/adventure_routes')

module.exports = function (app) {
    //ROUTE TO GET ALL ADVENTURES SORTED BY VOTES
    app.get('/', adventures.getAllAdventures)

    //LOGGED IN USERS ONLY
    //ROUTE TO GET JUST ONE ADVENTURE
    app.get('/adventures/:adventure_id', adventures.getOneAdventure)
    //ROUTE TO ADD NEW ADVENTURE
    app.post('/adventures/new', adventures.addNewAdventure)
    //ROUTE  TO DELETE AN ADVENTURE
    app.delete('/adventures/delete/:adventure_id', adventures.deleteAdventure)

    //ROUTE TO GET ALL ROUTES ASSOCIATED WITH AN ADVENTURE
    app.get('/adventures/routes/:adventure_id', adventure_routes.getAllRoutes)
    //ROUTE TO GET SINGLE ROUTE AND ALL ASSOCIATED SCENES
    app.get('/adventures/routes/one/:route_id', adventure_routes.getRoute)

}
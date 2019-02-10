//Update the name of the controller below and rename the file.
// const auth = require("../controllers/auth.js")
//to be implemented later
// const jwt = require('jsonwebtoken')

const adventures = require('../controllers/adventures')
const adventure_routes = require('../controllers/adventure_routes')
const route_scenes = require('../controllers/scenes')
const dialogue_decisions = require('../controllers/dialogue_decisions')


module.exports = function (app) {
    //ROUTE TO GET ALL ADVENTURES SORTED BY VOTES
    app.get('/index', adventures.getAllAdventures)

    //LOGGED IN USERS ONLY
    //ROUTE TO GET JUST ONE ADVENTURE AND ASSOCIATED TAGS, EDITORS, AND ROUTES
    app.get('/adventures/:adventure_id', adventures.getOneAdventure)
    //ROUTE TO ADD NEW ADVENTURE
    app.post('/adventures/new', adventures.addNewAdventure)
    //ROUTE  TO DELETE AN ADVENTURE
    app.delete('/adventures/delete/:adventure_id', adventures.deleteAdventure)

    //ROUTE TO GET SINGLE ROUTE AND ALL ASSOCIATED SCENES
    app.get('/adventures/routes/one/:route_id', adventure_routes.getRoute)
    //route to add upvote to adventure
    app.patch('/adventures/upvote/:adventure_id', adventures.upVoteAdventure)
    //route to add downvote to adventure
    app.patch('/adventures/downvote/:adventure_id', adventures.downVoteAdventure)
    //route to create a new adventure route
    app.post('/adventures/routes/new', adventure_routes.createRoute)
    //ROUTE TO DELETE A ROUTE
    app.delete('/adventures/routes/delete/:route_id', adventure_routes.deleteRoute)

    //ROUTE TO GET SINGLE SCENE AND ALL ASSOCIATED DIALOGUE
    app.get('/adventures/scenes/:scene_id', route_scenes.getScene)
    //ROUTE TO ADD A NEW SCENE
    app.post('/adventures/scenes/new', route_scenes.addScene)
    //route to delete scene
    app.get('/adventures/scenes/delete/:scene_id', route_scenes.deleteScene)
    //route to delete scene dialogue
    app.delete('/adventures/scenes/dialogue/delete/:dialogue_id', route_scenes.deleteDialogue)

    //route to delete a scene comment
    app.delete('/adventures/scenes/comments/delete/:comment_id', route_scenes.deleteComment)

    //route to get a single piece of dialogue and their associated decisions
    app.get('/adventures/dialogue/:dialogue_id', dialogue_decisions.getDecisions)

}
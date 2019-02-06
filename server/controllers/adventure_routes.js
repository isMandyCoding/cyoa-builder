const knex = require("../db/knex.js");

module.exports = {

    createRoute: (req, res) => {
        knex('adventure_routes')
            .insert({
                route_title: req.body.route_title,
                adventure_id: req.body.adventure_id,
            })
            .returning('id')
            .then(newRoute => {
                res.send(newRoute)
            })
            .catch(err => res.json(err))
    },

    getAllRoutes: (req, res) => {
        knex('adventures')
            .select(
                'adventures.id as adventure_id',
                'adventures.title',
                'adventures.description',
                'adventures.adv_img_url',
                'adventure_routes.id as route_id',
                'adventure_routes.route_title',
                'adventure_routes.route_votes'
            )
            .where('adventures.id', req.params.adventure_id)
            .join('adventure_routes', 'adventure_routes.adventure_id', 'adventures.id')
            .then(results => {
                let structuredRoutes = results.reduce((acc, currRoute) => {
                    acc = {
                        ...acc,
                        routes: acc.routes ?
                            acc.routes.concat({
                                route_id: currRoute.route_id, route_title: currRoute.route_title,
                                route_votes: currRoute.route_votes
                            }) :
                            [{
                                route_id: currRoute.route_id, route_title: currRoute.route_title,
                                route_votes: currRoute.route_votes
                            }]
                    }
                    return acc
                }, { ...results[0] })
                res.send(structuredRoutes)
            })
            .catch(err => {
                res.send(err)
            })
    },

    getRoute: (req, res) => {
        knex('adventure_routes')
            .select(
                'adventure_routes.id as route_id',
                'adventure_routes.route_title',
                'adventure_routes.route_votes',
                'route_scenes.id as scene_id',
                'route_scenes.scene_img_url'
            )
            .where('adventure_routes.id', req.params.route_id)
            .join('route_scenes', 'route_scenes.route_id', 'adventure_routes.id')
            .then(scenes => {
                let structuredScenes = scenes.reduce((acc, currScene) => {
                    acc = {
                        ...acc,
                        scenes: acc.scenes ?
                            acc.scenes.concat({ scene_id: currScene.scene_id, scene_img_url: currScene.scene_img_url }) :
                            [{ scene_id: currScene.scene_id, scene_img_url: currScene.scene_img_url }]
                    }
                    return acc
                }, { ...scenes[0] })

                res.send(structuredScenes)
            })
            .catch(err => res.send(err))
    },
    deleteRoute: (req, res) => {
        knex('adventure_routes')
            .where('id', req.params.route_id)
            .del()
            .returning('id')
            .then(deletedId => {
                res.send(deletedId)
            })
    }


}
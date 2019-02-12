const knex = require("../db/knex.js");

module.exports = {

    createRoute: (req, res) => {
        knex('adventure_routes')
            .insert({
                route_title: req.body.route_title,
                adventure_id: req.body.adventure_id,
            })
            .returning('id    ')
            .then(newRoute => {
                res.send(newRoute)
            })
            .catch(err => res.json(err))
    },
    getRoute: (req, res) => {
        knex('adventure_routes')
            .select(
                'adventure_routes.id as route_id',
                'adventure_routes.route_title',
                'adventure_routes.route_votes',
                'adventure_routes.route_downvotes',
                'adventure_routes.route_img_url',
                'route_dialogue.id as dialogue_id',
                'route_dialogue.sequence_number',
                'route_dialogue.content',
                'route_dialogue.isDecisionPoint'
            )
            .where('adventure_routes.id', req.params.route_id)
            .join('route_dialogue', 'route_dialogue.route_id', 'adventure_routes.id')
            .then(dialogue => {
                console.log(dialogue)
                let structuredDialogue = dialogue.reduce((acc, currDialogue) => {
                    acc = {
                        ...acc,
                        dialogue: acc.dialogue ?
                            acc.dialogue.concat({ dialogue_id: currDialogue.dialogue_id, sequence_number: currDialogue.sequence_number, content: currDialogue.content, isDecisionPoint: currDialogue.isDecisionPoint }) :
                            [{ dialogue_id: currDialogue.scene_id, sequence_number: currDialogue.sequence_number, content: currDialogue.content, isDecisionPoint: currDialogue.isDecisionPoint }]
                    }
                    return acc
                }, {
                        route_id: dialogue[0].route_id,
                        route_title: dialogue[0].route_title,
                        route_votes: dialogue[0].route_votes,
                        route_downvotes: dialogue[0].route_downvotes,
                        route_img_url: dialogue[0].route_img_url
                    })

                res.send(structuredDialogue)
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
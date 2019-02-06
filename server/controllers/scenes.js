const knex = require("../db/knex.js");

module.exports = {
    getScene: (req, res) => {
        knex('route_scenes')
            .select(
                'route_scenes.id as route_scene_id',
                'route_scenes.route_id',
                'route_scenes.scene_img_url',
                'scene_dialogue.id as dialogue_id',
                'scene_dialogue.content',
                'scene_dialogue.sequence_number',
                'scene_comments.id as scene_comment_id',
                'scene_comments.user_id',
                'scene_comments.content',
                'scene_comments.votes'
            )
            .where('route_scenes.id', req.params.scene_id)
            .join('scene_dialogue', 'scene_dialogue.scene_id', 'route_scenes.id')
            .join('scene_comments', 'scene_comments.scene_id', 'route_scenes.id')
            .then(results => {
                let structuredScene = results.reduce((acc, currScene) => {
                    acc = {
                        ...acc,
                        dialogue: acc.dialogue ?
                            acc.dialogue.concat({
                                dialogue_id: currScene.dialogue_id, content: currScene.content, sequence_number: currScene.sequence_number
                            }) :
                            [{
                                dialogue_id: currScene.dialogue_id, content: currScene.content, sequence_number: currScene.sequence_number
                            }],
                        comments: acc.comments ?
                            acc.comments.concat({ coment_id: currScene.comment_id, user_id: currScene.user_id, content: currScene.content, votes: currScene.votes }) :
                            [{ coment_id: currScene.comment_id, user_id: currScene.user_id, content: currScene.content, votes: currScene.votes }]

                    }
                    return acc
                }, { ...results[0] })
                res.send(structuredScene)
            })
            .catch(err => res.send(err))

    },
    addScene: (req, res) => {
        knex('route_scenes')
            .insert({
                route_id: Number(req.body.route_id),
                scene_img_url: req.body.scene_img_url
            })
            .returning('route_scenes.*')
            .then(result => {
                res.send(result)
            })
            .catch(err => res.json(err))
    },
    deleteScene: (req, res) => {
        knex('route_scenes')
            .where('id', req.params.scene_id)
            .del()
            .returning('id')
            .then(deletedId => {
                res.send(deletedId)
            })
    },
    deleteDialogue: (req, res) => {
        knex('scene_dialogue')
            .where('id', req.params.dialogue_id)
            .del()
            .returning('id')
            .then(deletedId => {
                res.send(deletedId)
            })
            .catch(err => res.json(err))
    },
    deleteComment: (req, res) => {
        knex('scene_comments')
            .where('id', req.params.comment_id)
            .del()
            .returning('id')
            .then(deletedId => {
                res.send(deletedId)
            })
            .catch(err => res.json(err))
    }
}
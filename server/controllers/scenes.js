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
                'scene_dialogue.sequence_number'
            )
            .where('route_scenes.id', req.params.scene_id)
            .join('scene_dialogue', 'scene_dialogue.scene_id', 'route_scenes.id')
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
                            }]
                    }
                    return acc
                }, { ...results[0] })
                res.send(structuredScene)
            })
            .catch(err => res.send(err))

    }
}
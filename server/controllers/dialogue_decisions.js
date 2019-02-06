const knex = require("../db/knex.js");

module.exports = {
    getDecisions: (req, res) => {
        knex('scene_dialogue')
            .where('scene_dialogue.id', req.params.dialogue_id)
            .join('dialogue_decisions', 'dialogue_decisions.dialogue_id', 'scene_dialogue.id')
            .then(results => {
                const structuredDialogue = results.reduce((acc, currDiologue) => {
                    console.log(acc)
                    acc = {
                        ...acc,
                        decisions: acc.results ?
                            acc.results.concat({
                                label: currDiologue.label, route_id: currDiologue.route_id, dialogue_id: currDiologue.dialogue_id,
                                decision_id: currDiologue.id
                            }) :
                            [{
                                label: currDiologue.label, route_id: currDiologue.route_id, dialogue_id: currDiologue.dialogue_id,
                                decision_id: currDiologue.id
                            }]
                    }
                    return acc
                }, { ...results[0] })

                res.send(structuredDialogue)
            })
            .catch(err => {
                res.send(err)
            })
    }
}
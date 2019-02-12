const knex = require("../db/knex.js");

module.exports = {
    getDecisions: (req, res) => {
        knex('route_dialogue')
            .where('route_dialogue.id', req.params.dialogue_id)
            .join('dialogue_decisions', 'dialogue_decisions.dialogue_id', 'route_dialogue.id')
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
                }, {
                        route_id: results[0].route_id,
                        sequence_number: results[0].sequence_number,
                        content: results[0].content,
                        isDecisionPoint: results[0].isDecisionPoint,
                        dialogue_id: results[0].dialogue_id
                    })

                res.send(structuredDialogue)
            })
            .catch(err => {
                res.send(err)
            })
    }
}
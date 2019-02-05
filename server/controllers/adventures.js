const knex = require("../db/knex.js");

module.exports = {

    getAllAdventures: function (req, res) {
        knex('adventures')
            .orderBy('adv_votes')
            .then(results => {
                if (res.ok) {
                    throw err
                }
                res.send(results)
            })
            .catch(err => {
                res.send(err)
            })
    },
}

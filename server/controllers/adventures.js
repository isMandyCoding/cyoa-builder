const knex = require("../db/knex.js");

module.exports = {

    getAllAdventures: function (req, res) {

        let allAdventures = knex('adventures')
            .select('adventures.id as adventure_id',
                'adventures.title',
                'adventures.description',
            )
            .orderBy('adv_votes')

        let adventureTags = knex('adventures')
            .select('adventures.id as adventure_id',
                'adventure_tags.id as tag_id',
                'tags.tag_name')
            .join('adventure_tags',
                'adventure_tags.adventure_id',
                'adventures.id')
            .join('tags',
                'tags.id',
                'adventure_tags.tag_id')

        let adventureEditors = knex('adventures')
            .select('adventures.id as adventure_id',
                'users.id as user_id',
                'adventure_editors.id as editor_id',
                'users.username',
            )
            .join('adventure_editors',
                'adventures.id',
                'adventure_editors.adventure_id')
            .join('users',
                'users.id',
                'adventure_editors.user_id')

        Promise.all([allAdventures, adventureTags, adventureEditors])
            .then(results => {
                console.log(results[2])
                data = {
                    adventures: results[0],
                }
                data.adventures.map(adventure => adventure.tags = results[1].filter(tag => tag.adventure_id === adventure.adventure_id))
                data.adventures.map(adventure => adventure.editors = results[2].filter(editor => editor.adventure_id === adventure.adventure_id))
                res.send(data)
            })
            .catch(err => {
                res.send(err)
            })
    },
}

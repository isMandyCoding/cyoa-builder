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

    getOneAdventure: (req, res) => {
        knex('adventures')
            .select('adventures.id as adventure_id',
                'adventures.title',
                'adventures.description',
                'adventure_tags.tag_id as tag_id',
                'tags.tag_name',
                'adventure_editors.id as editor_id',
                'users.username',
                'adventure_editors.user_id'
            )
            .where('adventures.id', req.params.adventure_id)
            .join('adventure_tags', 'adventure_tags.adventure_id', 'adventures.id')
            .join('tags', 'tags.id', 'adventure_tags.tag_id')
            .join('adventure_editors', 'adventure_editors.adventure_id', 'adventures.id')
            .join('users', 'users.id', 'adventure_editors.user_id')
            .then(adventure => {

                let structuredAdv = adventure.reduce((acc, currAdv) => {
                    acc = {
                        ...acc,
                        tags: acc.tags ?
                            acc.tags.concat({ tag_name: currAdv.tag_name, tag_id: currAdv.tag_id }) :
                            [{ tag_name: currAdv.tag_name, tag_id: currAdv.tag_id }],
                        editors: acc.editors ?
                            acc.editors.concat({ username: currAdv.username, user_id: currAdv.user_id }) :
                            [{ username: currAdv.username, user_id: currAdv.user_id }]
                    }
                    return acc
                }, { ...adventure[0] })

                const uniqueTags = [];
                const map = new Map();
                for (const item of structuredAdv.tags) {
                    if (!map.has(item.tag_id)) {
                        map.set(item.tag_id, true);
                        uniqueTags.push({
                            tag_id: item.tag_id,
                            tag_name: item.tag_name
                        })
                    }
                }

                structuredAdv.tags = uniqueTags

                const uniqueEditors = [];
                const editorMap = new Map();
                for (const item of structuredAdv.editors) {
                    if (!editorMap.has(item.user_id)) {
                        editorMap.set(item.user_id, true);
                        uniqueEditors.push({
                            user_id: item.user_id,
                            username: item.username
                        })
                    }
                }
                structuredAdv.editors = uniqueEditors

                res.send(structuredAdv)
            })
            .catch(err => res.send("What?"))

    },
    addNewAdventure: (req, res) => {
        let inserIntoAdventures = knex('adventures')
            .insert({
                title: req.body.title,
                description: req.body.description,
                adv_img_url: req.body.adv_img_url,
            })
            .returning('id as adventure_id')

        let tags = knex('tags')
            .whereIn('tag_name', req.body.tags) //req.body.tags is an array of strings

        Promise.all([inserIntoAdventures, tags])

            .then(results => {
                if (results[1].length < req.body.tags.length) {
                    let newAdventure = results[0][0]
                    let tagsToInsert = req.body.tags
                        .map(tag => { return { tag_name: tag } })

                    knex('tags')
                        .insert(tagsToInsert)
                        .returning('id')
                        .then(result => {
                            let tags = result.map(tag => { return { adventure_id: newAdventure, tag_id: tag } })
                            knex('adventure_tags')
                                .insert(tags)
                                .returning('adventure_id')
                                .then(result => {
                                    let newAdventureID = result[0]

                                    knex('adventure_editors')
                                        .insert({
                                            adventure_id: result[0],
                                            user_id: req.body.user_id
                                        })
                                        .returning('adventure_id')
                                        .then(result => {
                                            knex('adventures')
                                                .select('id as adventure_id', 'adventures.*')
                                                .where('id', result[0])
                                                .then(result => {
                                                    res.send(result)
                                                })
                                        })
                                        .catch(err => res.send("There was an error with finding the newly created Adventure"))

                                })
                                .catch(() => res.send("there was an error with adding to the adventure tags table"))
                        })
                        .catch(err => res.send("Guess what, there was an error in our insert into tags"))
                } else {
                    let newAdventure = results[0][0];
                    let tags = results[1].map(tag => { return { adventure_id: newAdventure, tag_id: tag.id } })
                    knex('adventure_tags')
                        .insert(tags)
                        .returning('adventure_id')
                        .then(result => {
                            knex('adventure_editors')
                                .insert({
                                    adventure_id: result[0],
                                    user_id: req.body.user_id
                                })
                                .returning('adventure_id')
                                .then(result => {
                                    knex('adventures')
                                        .select('id as adventure_id', 'adventures.*')
                                        .where('id', result[0])
                                        .then(newAdventure => {
                                            res.send(newAdventure)
                                        })
                                })
                                .catch(err => res.send("There was an error with finding the newly created Adventure"))
                        })
                        .catch(err => res.json("there was an error with adding to the adventure_editors table"))
                }
            })
            .catch(err => res.json("Houston, we have a problem: "))
    }
}

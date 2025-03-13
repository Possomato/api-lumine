const knex = require('../database/knex');

class NotesController {
  async create(req, res) {
    const { title, description, tags, links } = req.body;
    const { user_id } = req.params;

    const insertedIds = await knex('notes').insert({
      title,
      description,
      user_id
    });

    const note_id = insertedIds[0]; // Pegando o ID inserido corretamente

    const linksInsert = links.map(link => ({
      note_id,
      url: link
    }));

    await knex('links').insert(linksInsert);

    // Inserindo tags
    const tagsInsert = tags.map(name => ({
      note_id,
      name,
      user_id
    }));

    await knex('tags').insert(tagsInsert);

    res.json();
  }

  async show(req, res){
    const {id} = req.params

    const note = await knex('notes').where({id}).first()
    const tags = await knex('tags').where({note_id: id}).orderBy('name')
    const links = await knex('links').where({note_id: id}).orderBy('created_at')

    return res.json({
      ...note,
      tags,
      links
    })
  }

  async index(req, res){
    const {user_id} = req.query

    const notes = await knex('notes')
      .where({user_id})
      .orderBy('title')

    return res.json(notes)
  }

  async delete(req, res){
    const {id} = req.params

    await knex('notes').where({id}).delete()

    return res.json('nota apagada')
  }
}

module.exports = NotesController;
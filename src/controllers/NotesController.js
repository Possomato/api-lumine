const knex = require('../database/knex');

class NotesController {
  async create(req, res) {
    const { title, description, tags, links } = req.body;
    const user_id = req.user.id;

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
    const { title, tags} = req.query
    const user_id = req.user.id
 
    let notes

    if (tags){
      const filterTags = tags.split(',').map(tag => tag.trim())

      notes = await knex('tags')
        .select([
          'notes.id',
          'notes.title',
          'notes.description',
          'notes.updated_at',
          'notes.user_id'
        ])
        .where('notes.user_id', user_id)
        .whereLike('notes.title', `%${title}%`)
        .whereIn('name', filterTags)
        .innerJoin('notes', 'notes.id', 'tags.note_id')
        .orderBy('notes.title')
    }else{
      notes = await knex('notes')
      .where({user_id})
      .whereLike('title', `%${title}%`)
      .orderBy('title')
    }

    const userTags = await knex('tags').where({user_id})

    const notesWithTags = notes.map(note => {
      const noteTags = userTags.filter(tag => tag.note_id === note.id)

      return{
        ...note,
        tags: noteTags
      }
    })

    return res.json(notesWithTags)
  }

  async delete(req, res){
    const {id} = req.params

    await knex('notes').where({id}).delete()

    return res.json('nota apagada')
  }
}

module.exports = NotesController;
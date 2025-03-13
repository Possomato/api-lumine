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
}

module.exports = NotesController;
const Note = require("../../db/models/note");

class NoteActions {
  async saveNote(req, res) {
    const title = req.body.title;
    const description = req.body.description;

    let note;
    try {
      note = new Note({ title, description });
      await note.save();
    } catch (err) {
      return res.status(422).json({ message: err.message });
    }

    res.status(201).json(note);
  }

  async getAllNotes(req, res) {
    // pobieranie notatek
    let doc;

    try {
      doc = await Note.find({});
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
    res.status(200).json(doc);
  }

  async getNote(req, res) {
    // pobieranie jednej notatki
    const id = req.params.id;
    const note = await Note.findOne({ _id: id });

    res.status(200).json(note);
  }

  async updateNote(req, res) {
    // aktualizownaie notatki
    const id = req.params.id;
    const title = req.body.title;
    const description = req.body.description;

    const note = await Note.findOne({ _id: id });
    note.title = title;
    note.description = description;
    await note.save();

    res.status(201).json(note);
  }

  async deleteNote(req, res) {
    // usuwanie notatki
    const id = req.params.id;

    await Note.deleteOne({ _id: id });

    res.sendStatus(204);
  }

  async deleteAllNotes(req, res) {
    await Note.deleteMany({});

    res.sendStatus(204);
  }
}

module.exports = new NoteActions();

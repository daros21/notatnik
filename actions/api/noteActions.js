const Note = require("../../db/models/note");

class NoteActions {
  saveNote(req, res) {
    // const newNote = new Note({
    //   title: "tytul testowy",
    //   body: "tekst notatki",
    // });

    // newNote.save().then(() => {
    //   console.log("notatka zostala zapisana");
    // });

    const title = req.body.title;
    const description = req.body.description;
    res.send(
      `notatka zostala stworzona. Tytul: ${title}, tresc: ${description}`
    );
  }

  getAllNotes(req, res) {
    // pobieranie notatek
    res.send("API dziala");
  }

  getNote(req, res) {
    // pobieranie jednej notatki
    res.send("info o notatce");
  }

  updateNote(req, res) {
    // aktualizownaie notatki
    res.send("notatka zaktualizowana");
  }

  deleteNote(req, res) {
    // usuwanie notatki
    const id = req.params.id;
    res.send(`notatka nr ${id} usunięta`);
  }
}

module.exports = new NoteActions();

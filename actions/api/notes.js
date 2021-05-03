const Note = require("../../db/models/note");

module.exports = {
  saveNote(req, res) {
    const newNote = new Note({
      title: "tytul testowy",
      body: "tekst notatki",
    });

    newNote.save().then(() => {
      console.log("notatka zostala zapisana");
    });
  },
};

const express = require("express");
const router = express.Router();

const { homepage } = require("../actions/api/test");
const {
  saveNote,
  updateNote,
  getAllNotes,
  getNote,
  deleteNote,
  deleteAllNotes,
} = require("../actions/api/noteActions");

router.get("/test", homepage);
router.get("/", saveNote);

// pobieranie notatek
router.get("/notes", getAllNotes);
// pobieranie konkretnej notatki
router.get("/notes/:id", getNote);
// zapisywanie notatki
router.post("/notes", saveNote);
// edytowanie notatki
router.put("/notes/:id", updateNote);
// usuwanie konkretnej notatki
router.delete("/notes/:id", deleteNote);
// usuwanie wszystkich notatek
router.delete("/notes", deleteAllNotes);

module.exports = router;

const express = require("express");
const router = express.Router();

const { homepage } = require("../actions/api/test");
const { saveNote } = require("../actions/api/notes");

router.get("/test", homepage);
router.get("/", saveNote);

module.exports = router;

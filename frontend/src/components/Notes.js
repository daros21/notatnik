import React from "react";
import Note from "./Note";
import "./notes.css";
import NewNote from "./NewNote";
import Modal from "react-modal";
import EditNote from "./EditNote";
import axios from "../axios";

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editNote: {},
      showEditModal: false,
      notes: [],
    };
  }

  componentDidMount() {
    this.fetchNotes();
  }

  async fetchNotes() {
    const res = await axios.get("/notes");
    const notes = res.data;
    this.setState({ notes });
  }

  async deleteNote(_id) {
    console.log("usuwanie notatki " + _id);
    const notes = [...this.state.notes].filter((note) => note._id !== _id);
    await axios.delete("/notes/" + _id);
    this.setState({ notes });
  }

  async addNote(note) {
    const notes = [...this.state.notes];
    const res = await axios.post("/notes", note);
    const newNote = res.data;
    notes.push(newNote);
    this.setState({ notes });
  }

  async editNote(note) {
    await axios.put("/notes/" + note._id, note);
    const notes = [...this.state.notes];
    const index = notes.findIndex((x) => x._id === note._id);
    if (index >= 0) {
      notes[index] = note;
      this.setState({ notes });
    }
    this.toggleModal();
  }

  toggleModal() {
    this.setState({ showEditModal: !this.state.showEditModal });
  }

  editNoteHandler(note) {
    this.toggleModal();
    this.setState({ editNote: note });
  }

  render() {
    return (
      <>
        <p>Moje notatki</p>

        <NewNote onAdd={(note) => this.addNote(note)} />

        <Modal isOpen={this.state.showEditModal} contentLabel="Edytuj notatke">
          {/* //formularz edycji  */}
          <EditNote
            onEdit={(note) => this.editNote(note)}
            title={this.state.editNote.title}
            description={this.state.editNote.description}
            _id={this.state.editNote._id}
          />
          <button onClick={() => this.toggleModal()}>Anuluj</button>
        </Modal>

        {this.state.notes.map((note) => (
          <Note
            key={note._id}
            title={note.title}
            description={note.description}
            _id={note._id}
            onDelete={(_id) => this.deleteNote(_id)}
            onEdit={(note) => this.editNoteHandler(note)}
          />
        ))}
      </>
    );
  }
}

export default Notes;

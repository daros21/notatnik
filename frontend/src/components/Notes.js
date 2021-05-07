import React from "react";
import Note from "./Note";
import "./notes.css";
import NewNote from "./NewNote";
import Modal from "react-modal";
import EditNote from "./EditNote";

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editNote: {},
      showEditModal: false,
      notes: [
        {
          id: "123154",
          title: "wykąpać psa",
          description: "jutro ywkalakdl",
        },
        {
          id: "4648",
          title: "umyc auto",
          description: "786946 ywkalakdl",
        },
      ],
    };
  }

  deleteNote(id) {
    console.log("usuwanie notatki " + id);
    const notes = [...this.state.notes].filter((note) => note.id !== id);
    this.setState({ notes });
  }

  addNote(note) {
    const notes = [...this.state.notes];
    notes.push(note);
    this.setState({ notes });
  }

  editNote(note) {
    const notes = [...this.state.notes];
    const index = notes.findIndex((x) => x.id === note.id);
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
            id={this.state.editNote.id}
          />
          <button onClick={() => this.toggleModal()}>Anuluj</button>
        </Modal>

        {this.state.notes.map((note) => (
          <Note
            key={note.id}
            title={note.title}
            description={note.description}
            id={note.id}
            onDelete={(id) => this.deleteNote(id)}
            onEdit={(note) => this.editNoteHandler(note)}
          />
        ))}
      </>
    );
  }
}

export default Notes;

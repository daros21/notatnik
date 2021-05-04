import React from "react";
import Note from "./Note";
import "./notes.css";

class Notes extends React.Component {
  constructor(props) {
    super(props);
    this.notes = [
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
    ];
  }
  render() {
    return (
      <>
        <p>Moje notatki</p>

        {this.notes.map((note) => (
          <Note
            title={note.title}
            description={note.description}
            id={note.id}
          />
        ))}
      </>
    );
  }
}

export default Notes;

import React, { useState } from "react";

function NewNote(props) {
  const [showForm, setShowForm] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const changeTitleHandler = (event) => {
    const value = event.target.value;
    setTitle(value);
  };

  const changeDescriptionHandler = (event) => {
    const value = event.target.value;
    setDescription(value);
  };

  const addNote = () => {
    const note = {
      title: title,
      description: description,
    };
    props.onAdd(note);
    setTitle("");
    setDescription("");
    setShowForm(false);
  };

  return showForm ? (
    <div className="note">
      <label>Tytul notatki: </label>
      <input type="text" value={title} onChange={changeTitleHandler} />
      <br />
      <label>tresc notatki: </label>
      <input
        type="text"
        value={description}
        onChange={changeDescriptionHandler}
      />
      <br />
      <button onClick={() => addNote()}>Dodaj</button>
    </div>
  ) : (
    <button onClick={() => setShowForm(true)}>Nowa notatka</button>
  );
}

export default NewNote;

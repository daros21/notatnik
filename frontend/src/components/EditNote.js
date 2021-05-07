import React, { useState } from "react";

export default function EditNote(props) {
  const [title, setTitle] = useState(props.title);
  const [description, setDescription] = useState(props.description);

  const changeTitleHandler = (event) => {
    const value = event.target.value;
    setTitle(value);
  };

  const changeDescriptionHandler = (event) => {
    const value = event.target.value;
    setDescription(value);
  };

  const editNote = () => {
    const note = {
      title: title,
      description: description,
      _id: props._id,
    };
    props.onEdit(note);
  };

  return (
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
      <button onClick={() => editNote()}>Zapisz</button>
    </div>
  );
}

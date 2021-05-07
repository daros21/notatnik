import React, { useState } from "react";

function Note(props) {
  const [showDescrib, setShowDescrib] = useState(false);

  const toggleDescrib = () => {
    setShowDescrib(!showDescrib);
  };

  const editHandler = () => {
    props.onEdit({
      title: props.title,
      description: props.description,
      _id: props._id,
    });
  };

  return (
    <div className="note">
      <p onClick={() => toggleDescrib()}>{props.title}</p>
      {showDescrib && <div className="description">{props.description}</div>}

      <button onClick={editHandler}>edytuj</button>
      <button className="delete" onClick={() => props.onDelete(props._id)}>
        usuń
      </button>
    </div>
  );
}

export default Note;

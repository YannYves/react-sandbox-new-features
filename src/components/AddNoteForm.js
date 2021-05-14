import React, { useState, useContext } from "react";
import NotesContext from "../context/notes-context";

const AddNoteForm = () => {
  const { dispatch } = useContext(NotesContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_NOTES",
      title,
      body,
    });

    // setNotes([
    //   ...notes,
    //   {
    //     title,
    //     body,
    //   },
    // ]);
    setTitle("");
    setBody("");
  };

  return (
    <>
      <p>Add note</p>
      <form onSubmit={handleSubmit}>
        <label>
          Title
          <input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </label>
        <label>
          Body
          <textarea
            value={body}
            onChange={(e) => {
              setBody(e.target.value);
            }}
          />
        </label>
        <button>Add note</button>
      </form>
    </>
  );
};

export { AddNoteForm as default };

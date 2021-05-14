import React, { useEffect, useReducer } from "react";
import notesReducer from "../reducers/notes";
import NoteList from "../components/NoteList";
import AddNoteForm from "../components/AddNoteForm";
import NotesContext from "../context/notes-context";

const NoteApp = () => {
  const [notes, dispatch] = useReducer(notesReducer, []);
  //const [notes, setNotes] = useState([]);

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem("notes"));
    if (notes) {
      dispatch({ type: "POPULATE_NOTES", notes });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <NotesContext.Provider value={{ notes, dispatch }}>
      <h1>Note app</h1>
      <AddNoteForm />
      <NoteList />
    </NotesContext.Provider>
  );
};

export { NoteApp as default };

//useState examples

// const App = (props) => {
//   const [count, setCount] = useState(props.count);
//   const [text, setText] = useState("");

//   useEffect(() => {
//     console.log("this should only ran once");
//   }, []);

//   useEffect(() => {
//     console.log("useEffect ran");
//   }, [count]);

//   return (
//     <div>
//       <p>
//         The current {text || "count"} is {count}
//       </p>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//         }}
//       >
//         +1
//       </button>
//       <button
//         onClick={() => {
//           setCount(count - 1);
//         }}
//       >
//         -1
//       </button>
//       <button
//         onClick={() => {
//           setCount(0);
//         }}
//       >
//         reset
//       </button>
//       <input
//         value={text}
//         onChange={(e) => {
//           setText(e.target.value);
//         }}
//       />
//     </div>
//   );
// };

// App.defaultProps = {
//   count: 0,
// };

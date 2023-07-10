import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNote, updateNote } from "./redux/TodoSlice";
import NoteForm from "./components/Todo";
const App = () => {
  const dispatch = useDispatch();
  const notes = useSelector((state) => state.notes)

  const handleAddNote = (note) => {
    dispatch(addNote(note))
  };
  const handleUpdateNote = (note) => {
    dispatch(updateNote({
      id: note.id,
      completed: !note.completed
    }));
  };
   
  return (
    <div>
      <h1>Notes</h1>
      <NoteForm addNote={handleAddNote} />
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <span>{note.text}</span>
            <button onClick={() => handleUpdateNote(note)}>
              {note.completed ? 'Incomplete' : 'Completed'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default App
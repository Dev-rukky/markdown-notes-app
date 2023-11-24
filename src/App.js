import SideBar from './components/SideBar';
import Editor from './components/Editor';
import {data} from './data';
import Split from "react-split";
import { nanoid } from 'nanoid';
import { useState } from 'react';

import './styles/App.css';

function App() {

  const [notes, setNotes] = useState([])
  const [currentNoteId, setCurrentNoteId] = useState(
    (notes[0] && notes[0].id) || ""
  )

const createNewNote = () => {
  const newNote = {
    id: nanoid(),
    title: "New Note",
    body: "# Type your markdown note's title here"
  }
  setNotes( prevNotes => [...notes, newNote])
  setCurrentNoteId(newNote.id)
}

  return (
    <div>

    </div>
  );
}

export default App;

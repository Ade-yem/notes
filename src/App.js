import "./App.css";
import React from "react";
import NotesList from "./components/NotesList";
import { useState } from "react";
import { nanoid } from "nanoid";
import Search from "./components/search";

const App = () => {
  const [notes, setNotes] = useState([
    {
      title: "new Title placeholder",
      text: "this is a new text placeholder",
      date: "mm/dd/yyyy",
      id: nanoid(),
    },
    {
      title: "Title placesholder",
      text: "this is a text placeholder",
      date: "mm/dd/yyyy",
      id: nanoid(),
    },
    {
      title: "new Title placeholder",
      text: "this is a new note",
      date: "mm/dd/yyyy",
      id: nanoid(),
    },
  ]);

  const addNote = (text, title) => {
    const date = new Date();
    const newNote = {
      title: title,
      text: text,
      date: date.toLocaleDateString(),
      id: nanoid(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };
  const deleteNote = (id) => {
    const newN = notes.filter((note) => note.id !== id);
    setNotes(newN);
  };

  const [searchText, setSearchText] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Search handleSearchText={setSearchText} />
      <NotesList
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(searchText)
        )}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
};

export default App;

const Header = () => {
  return <h1>ToluwaN'ose Diaries</h1>;
};

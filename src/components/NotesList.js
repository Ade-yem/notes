import React, {useState} from "react";

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <div className="noteList">
      {notes.map((note) => (
        <Note
          id={note.id}
          title={note.title}
          text={note.text}
          date={note.date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
      <AddNote handleAddNote={handleAddNote} />
    </div>
  );
};

export default NotesList;

const Note = ({ id, title, text, date , handleDeleteNote}) => {
  return (
    <div className="note">
      <h3 className="note-header"> {title} </h3>

      <div className="note-body">
        <p>{text}</p>
      </div>
      <div className="note-footer">
        <span className="date">{date}</span>
        <span onClick={() => handleDeleteNote(id)}>
          <i className="fa fa-trash" aria-hidden="true" ></i>
        </span>
      </div>
    </div>
  );
};



const AddNote = ({handleAddNote}) => {
    const [noteTitle, setNoteTitle] = useState("")
    const [noteText, setNoteText] = useState("");
    const characterLimit = 300;

    const handleChange = (e) => {
        if (e.target.value.length <= characterLimit) {
          setNoteText(e.target.value);  
        }  
    }
    const handleTitle = (event) => {
        setNoteTitle(event.target.value);
    }
    const handleSave = ()=> {
        if (noteText.trim().length > 0 || noteTitle.trim().length > 0) {
            handleAddNote(noteText, noteTitle);
            setNoteText("");
            setNoteTitle("");
        }   
    }
  return (
    <div className="note new">
      <textarea
        placeholder="title"
        className="note-header"
        onChange={handleTitle}
        value={noteTitle}
      />
      <textarea
        rows="8"
        cols="10"
        placeholder="Type to add note..."
        className="note-body"
        value={noteText}
        onChange={handleChange}
      />
      <div className="note-footer">
        <span>{noteText.length}/{characterLimit}</span>
        <button className="save" onClick={handleSave}>
          <i className="fa fa-save" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};

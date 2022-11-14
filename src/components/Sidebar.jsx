import { useState, useEffect } from "react";
import Search from "./Search";

const Sidebar = ({
    notes,
    onAddNote,
    onDeleteNote,
    activeNote,
    setActiveNote,
  }) => {
    const [sortedNotes, setSortedNotes] = useState();
  
    const handelChange = (event) => {
      console.log(event.target.value);
      const filterData = notes.filter((el) => el.title.includes(event.target.value));
      setSortedNotes(filterData);
    }
    useEffect(() => {
      setSortedNotes(notes.sort((a, b) => b.lastModified - a.lastModified));
    }, [notes])
    return (
      <div className="app-sidebar">
        <div className="app-sidebar-header">
          <h1>Notes</h1>
          <button onClick={onAddNote}>Add</button>
        </div>
        <Search  handelChange={handelChange} />
        <div className="app-sidebar-notes">
          {sortedNotes?.map(({ id, title, body, lastModified }) => (
            
            <div
              className={`app-sidebar-note ${id === activeNote && "active"}`}
              onClick={() => setActiveNote(id)}
              key={id}
            >
            
              <div className="sidebar-note-title">
                <strong>{title}</strong>
                <button onClick={(e) => onDeleteNote(id)}>Delete</button>
              </div>
  
              <p>{body && body.substr(0, 100) + "..."}</p>
              <small className="note-meta">
                Last Modified{" "}
                {new Date(lastModified).toLocaleDateString("en-GB", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </small>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Sidebar;
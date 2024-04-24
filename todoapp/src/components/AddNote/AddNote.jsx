import React from "react";
import styles from './AddNote.module.css';

export default function AddNote ({ newNote, setNewNote, addNote}) {
        const handleInputChange = (e) => {
            setNewNote(e.target.value);
        }
        const handleSubmit = (e) => {
            e.preventDefault();
            addNote();
            setNewNote("");
        };

    return (
        <form onSubmit={handleSubmit}>
<input
    className={styles.noteInput}
    type="text"
    required
    value={newNote}
    onChange={handleInputChange}>
</input>
<button className={styles.buttonAdd}
    type="submit"
    onClick={addNote}
    >
    Добавить
</button>
<p className={styles.newNote}>{newNote}</p>
        </form>
        
    );
    
}
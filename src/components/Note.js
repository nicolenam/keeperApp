import app from "../firebase";
import { getDatabase, onValue, ref, remove } from "firebase/database";
import { useEffect, useState } from "react"; 

const Note = () =>{

    const database = getDatabase(app);
    const notesRef = ref(database, "/notes");

    const [ notesArray, setNotesArray ] = useState([]);

    useEffect(() => {
        const getNotes = () => {

            onValue(notesRef, (snapshot) => {
            const data = snapshot.val();
            if(data) {
                const notes = Object.values(data);
                setNotesArray(notes);
            }else{
                setNotesArray([])
            }
            });

        };
        getNotes();
    }, []);

    return (
        <div>
          {notesArray.map((note) => (
            <div className="note" key={note.id}>
              <h2>{note.title}</h2>
              <p>{note.content}</p>
              <button>Delete</button>
            </div>
          ))}
        </div>
      );
    };

export default Note;
import app from "../firebase";
import { getDatabase, onValue, ref } from "firebase/database";
import { useEffect, useState } from "react"; 

const Note = () =>{

    const database = getDatabase(app);
    const notesRef = ref(database, "/notes");

    const [ notesArray, setNotesArray ] = useState([]);

    useEffect(() => {
        const getNotes = () => {
            const notesListener = onValue(notesRef, (snapshot) => {
            const data = snapshot.val();
            if(data) {
                const notes = Object.values(data);
                setNotesArray(notes);
            }else{
                setNotesArray([])
            }
            });
    
          // Cleanup function to detach the listener
            return () => {
                if (notesListener) {
                    notesListener();
                }
            };
        };
        getNotes();
    }, []);

    return (
        <div>
          {notesArray.map((note) => (
            <div className="note" key={}>
              <h2>{note.title}</h2>
              <p>{note.content}</p>
            </div>
          ))}
        </div>
      );
    };

export default Note;
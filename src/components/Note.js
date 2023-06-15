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
                const newNotes = Object.keys(data).map((key) => ({
                  id: key, 
                  ...data[key],
                }));
                setNotesArray(newNotes);

              }else{
                setNotesArray([])
              }
            });

        };
        getNotes();
    }, []);

    const handleDelete = (id) =>{

      const singleNotesRef = ref(database, `/notes/${id}`);
      remove(singleNotesRef);
    }

    return (
        <div>
          {notesArray.map((note) => (
            <div className="note" key={note.id}>
              <h2>{note.title}</h2>
              <p>{note.content}</p>
              <button onClick={()=>{handleDelete(note.id)}}>Delete</button>
            </div>
          ))}
        </div>
      );
    };

export default Note;
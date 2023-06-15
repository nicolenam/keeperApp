import app from "../firebase";
import { getDatabase, onValue, ref, remove } from "firebase/database";
import { useEffect, useState } from "react"; 

const Note = () =>{

    const database = getDatabase(app);
    const notesRef = ref(database, "/notes");

    const [ notesArray, setNotesArray ] = useState([]);

    // useEffect hook is a React hook that allows you to perform side effects in functional components. It runs after the component has rendered or when certain dependencies change
    useEffect(() => {

      // 'getNotes' that fetches the notes from the database
        const getNotes = () => {

            onValue(notesRef, (snapshot) => {

              // function is used to listen for changes in the notesRef location in the database. Whenever there is a change, the provided callback function is executed
              const data = snapshot.val();
              console.log(data)

              if(data) {
                // maps over the keys of the data object using Object.keys(data). For each key, it creates a new note object with the key as the id property and spreads the remaining properties from data[key]
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
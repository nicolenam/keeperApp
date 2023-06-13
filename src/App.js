import './App.css';
import app from "./firebase";
import { getDatabase, ref,push  } from "firebase/database";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";
import Form from "./components/Form"
import { useState, useEffect } from 'react';

function App() {

  const database = getDatabase(app);
  const noteRef = ref(database, "/notes");

  const [object, setObject] = useState({});

  useEffect(()=>{

    const addNote = () =>{

      push(noteRef, object);

    }

    addNote();

  });

  return (
    <div className="App"> 
      <Header />
      <Form setObject={setObject}/>
      <Note />
      <Footer />
    </div>
  );
}

export default App;

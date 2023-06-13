import './App.css';
import app from "./firebase";
import { getDatabase, ref, set } from "firebase/database";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";
import Form from "./components/Form"
import { useState, useEffect } from 'react';

function App() {

  const database = getDatabase(app);
  const noteRef = ref(database, "/notes");

  const [array, setArray] = useState([]);

  useEffect(()=>{

    const addNote = () =>{

      set(noteRef, array);

    }

    addNote();

  });

  return (
    <div className="App"> 
      <Header />
      <Form setArray={setArray}/>
      <Note array={array}/>
      <Footer />
    </div>
  );
}

export default App;

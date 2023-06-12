import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";
import Form from "./components/Form"
import { useState } from 'react';

function App() {

  const [array, setArray] = useState([]);

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

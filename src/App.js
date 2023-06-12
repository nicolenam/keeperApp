import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";
import Form from "./components/Form"

function App() {

  return (
    <div className="App"> 
      <Header />
      <Form />
      <Note />
      <Footer />
    </div>
  );
}

export default App;

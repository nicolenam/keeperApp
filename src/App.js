import './App.css';
import Footer from "./components/Footer";
import Header from "./components/Header";
import Note from "./components/Note";
import notes from "./notes";

function App() {

  return (
    <div className="App"> 
      <Header />
      <Note notes={notes} />
      <Footer />
    </div>
  );
}

export default App;

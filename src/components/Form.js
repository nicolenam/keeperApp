import { useState } from 'react';

const Form = ({setArray}) =>{

  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

    const handleChange = (e) =>{

        if(e.target.name === "title"){
            setTitle(e.target.value);
        }else{
            setNote(e.target.value);
        }
        
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        const noteObject = {
            title: title,
            content: note
        }

        setObject(noteObject);
        handleReset();
    }

    const handleReset = () =>{
        setTitle("");
        setNote("");
    }

    return(
        <form onSubmit={handleSubmit}>
            <label className="sr-only">title</label>
            <input name="title" type="text" placeholder="Title" value={title} onChange={handleChange} required></input>
            <label className="sr-only"></label>
            <textarea name="content" type="text" placeholder="Take a note..." value={note} onChange={handleChange} required></textarea>
            <button>Add</button>
        </form>
    )
}

export default Form;
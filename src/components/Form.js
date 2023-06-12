import { useState } from 'react'; 

const Form = () =>{

    const [title, setTitle] = useState("");

    const handleChange = (e) =>{
        setTitle(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(title)
    }

    return(
        <form onSubmit={handleSubmit}>
            <label className="sr-only">title</label>
            <input name="title" type="text" placeholder="Title" onChange={handleChange}></input>
            <label className="sr-only"></label>
            <textarea name="content" type="text" placeholder="Take a note..."></textarea>
            <button>Add</button>
        </form>
    )
}

export default Form;
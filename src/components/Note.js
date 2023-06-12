const Note = ({notes}) =>{
    
    return(
        <div>
        {
            notes.map((note)=>{
                return(
                    <div className="note" key={note.key}>
                        <h2>{note.title}</h2>
                        <p>{note.content}</p>
                    </div>
                )
            })
        }
        </div>
    )


}

export default Note;
const Note = ({array}) =>{

    return(

            array.map((item) => {

                return(
                    <div className="note">
                        <h2>{item.title}</h2>
                        <p>{item.content}</p>
                    </div>
                )
            })

        
       
    )
}

export default Note;
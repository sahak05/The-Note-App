import React from 'react'
import notes from '../assets/data'


//we distructure the match object at the place of props
const NotePage = (props) => {
    let noteId = props.match.params.id;

    let note =notes.find(note => note.id===Number(noteId))
    
    return (
        <div>
            <p>{note?.body}</p>
        </div>
    )
}

export default NotePage

//Don't really know what the question mark meaning but it help to
//avoid error
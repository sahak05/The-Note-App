import React from 'react'
import notes from '../assets/data'
import {Link} from 'react-router-dom'
import {ReactComponent as ArrowLeft} from '../assets/arrow-left.svg'

//we distructure the match object at the place of props
const NotePage = (props) => {
    let noteId = props.match.params.id;

    let note =notes.find(note => note.id===Number(noteId))
    
    return (
        <div className='note'>
            <div className='note-header'>
                <h3>
                    <Link to="/">
                        <ArrowLeft/>
                    </Link>
                </h3>
            </div>
            <textarea value={note?.body}>

            </textarea>
        </div>
    )
}

export default NotePage

//Don't really know what the question mark meaning but it help to
//avoid error
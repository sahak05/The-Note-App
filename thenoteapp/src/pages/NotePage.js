import React, {useState, useEffect} from 'react'
//import notes from '../assets/data'
import {Link} from 'react-router-dom'
import {ReactComponent as ArrowLeft} from '../assets/arrow-left.svg'

//we distructure the match object at the place of props
const NotePage = (props) => {
    let noteId = props.match.params.id
    let history = props.history

    //let note =notes.find(note => note.id===Number(noteId))
    let [note, setNote] = useState(null)
        
    useEffect(()=>{
        getNote()
    },[noteId]) // une dependance ajoutee ou a chaque fois que l'id change la methode se lance 

    let getNote = async ()=>{
        if(noteId==='new') return
        let response = await fetch(`http://localhost:8000/notes/${noteId}`)
        let data = await response.json()
        setNote(data)
    }

    let createNote = async()=>{//pour update le base de donnees 
    
        await fetch(`http://localhost:8000/notes/`, {
            method:'POST', 
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify({...note, 'updated':new Date()})
        })
    }

    let updateNote = async()=>{//pour update le base de donnees 
    
        await fetch(`http://localhost:8000/notes/${noteId}`, {
            method:'PUT', 
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify({...note, 'updated':new Date()})
        })
    }


    let deleteNote = async ()=>{
        await fetch(`http://localhost:8000/notes/${noteId}`, {
            method:'DELETE', 
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify(note)

        })
        props.history.push('/')
    }

    let handleSubmit = ()=>{ //lorsque on appuie retour 

        if(noteId !== 'new' && !note.body){
            deleteNote()
        } else if(noteId !== 'new'){
            updateNote()
        }
        else if(noteId==='new' && note!==null){
            createNote()
        }
        
        props.history.push('/')
    }
    return (
        <div className='note'>
            <div className='note-header'>
                <h3>
                    <Link to="/">
                        <ArrowLeft onClick={handleSubmit} />
                    </Link>
                </h3>
                {noteId !== 'new' ?(
                    <button onClick={deleteNote}>Delete</button>
                ):(
                    <button onClick={handleSubmit}>Done</button>
                )}

            </div>
            <textarea onChange={(e)=>{setNote({...note, 'body':e.target.value})}} value={note?.body}>

            </textarea>
        </div>
    )
}

export default NotePage

//Don't really know what the question mark meaning but it help to
//avoid error
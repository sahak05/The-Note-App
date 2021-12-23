import React, {useState, useEffect} from 'react'
//import notes from '../assets/data'
import ListItem from '../components/ListItem'
import AddButton from '../components/AddButton'


const NotesListPage = () => {

    let [notes, setNotes] = useState([])

   useEffect(() => { //useEffect m'aide a lancer la methode ci-dessous qui me 
    //ramene mon json en tableau
        getNotes()
    }, [])


    let getNotes = async() => {
        let reponse = await fetch('http://localhost:8000/notes/');
        let data = await reponse.json()
        setNotes(data)
    }

    return (
        <div className='notes'>
            <div className='notes-header'>
                <h2 className='notes-title'>&#9782; Notes</h2>
                <p className='note-count'>{notes.length}</p>
            </div>
            <div className="notes-list">
                {notes.map((note, index) => (
                    <ListItem  key={index} note={note}/>
                )
                    )}
            </div>
            <AddButton/>
        </div>
    )
}

export default NotesListPage

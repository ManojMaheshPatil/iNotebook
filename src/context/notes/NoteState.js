// // This is context api , by heart NoteState and NoteContext
// import NoteContext from "./NoteContext";
// import { useState } from "react";

// const NoteState = (props) => {
//     const notesInitial = [

//         {
//             "_id": {
//                 "$oid": "63c033c388986d3b98998494"
//             },
//             "user": {
//                 "$oid": "63c0306d88986d3b98998478"
//             },
//             "title": " ka ",
//             "description": "Please wake up early",
//             "tag": "personal",
//             "date": {
//                 "$date": {
//                     "$numberLong": "1673540547811"
//                 }
//             },
//             "__v": 0
//         }
//         ,
//         {
//             "_id": {
//                 "$oid": "63c033c388a986d3b98998494"
//             },
//             "user": {
//                 "$oid": "63c0306d88986d3b98998478"
//             },
//             "title": "Ganesh ka note 3 ",
//             "description": "Please wake up early",
//             "tag": "personal",
//             "date": {
//                 "$date": {
//                     "$numberLong": "1673540547811"
//                 }
//             },
//             "__v": 0
//         },
//         {
//             "_id": {
//                 "$oid": "63c033ac388986d3b98998494"
//             },
//             "user": {
//                 "$oid": "63c0306d88986d3b98998478"
//             },
//             "title": "Ganesh ka note 3 ",
//             "description": "Please wake up early",
//             "tag": "personal",
//             "date": {
//                 "$date": {
//                     "$numberLong": "1673540547811"
//                 }
//             },
//             "__v": 0
//         }
//         ,
//         {
//             "_id": {
//                 "$oid": "63c033c388986d3b9899a8494"
//             },
//             "user": {
//                 "$oid": "63c0306d88986d3b98998478"
//             },
//             "title": "Ganesh ka note 3 ",
//             "description": "Please wake up early",
//             "tag": "personal",
//             "date": {
//                 "$date": {
//                     "$numberLong": "1673540547811"
//                 }
//             },
//             "__v": 0
//         },
//         {
//             "_id": {
//                 "$oid": "6a3c033c388986d3b98998494"
//             },
//             "user": {
//                 "$oid": "63c0306d88986d3b98998478"
//             },
//             "title": "Ganesh ka note 3 ",
//             "description": "Please wake up early",
//             "tag": "personal",
//             "date": {
//                 "$date": {
//                     "$numberLong": "1673540547811"
//                 }
//             },
//             "__v": 0
//         }
        
//     ]

//     const [notes,setNotes] = useState(notesInitial)

//     // Add a note

//     const addNote = (title,description,tag) => {
//         const note = {
//             "_id": "63c033c388986d3b989a98494",
//             "user": "63c0306d88986d3b98998478",
//             "title": title,
//             "description": description,
//             "tag": tag,
//             "date": "2021-09-03T14:20:09.668Z",
//             "__v": 0
//         };
//         setNotes(notes.concat(note))
//     }

//     // Delete a note
//     const deleteNote = () => {

//     }

//     // Update a note
//     const updateNote = () => {

//     }

//     return (
//         <NoteContext.Provider value={{notes,addNote,deleteNote,updateNote}}>
//             {props.children}
//         </NoteContext.Provider>
//     )
// }

// export default NoteState;   

import noteContext from "./NoteContext";
import { useState } from "react";


const NoteState = (props)=>{
    const notesInitial = [
        {
          "_id": "61322f195153781a8ca8d0e06",
          "user": "6131dc5e3e4037cd4734a066",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2021-09-03T14:20:09.509Z",
          "__v": 0
        },
        {
          "_id": "61322f195531781a8ca8d0e08",
          "user": "6131dc5e3e4037cd4734a066",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2021-09-03T14:20:09.668Z",
          "__v": 0
        },
        {
          "_id": "61322f19553781a8ca8d0e081",
          "user": "6131dc5e3e4037cd4734a066",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2021-09-03T14:20:09.668Z",
          "__v": 0
        },
        {
          "_id": "61322f19553781a8ca8d0e082",
          "user": "6131dc5e3e4037cd4734a066",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2021-09-03T14:20:09.668Z",
          "__v": 0
        },
        {
          "_id": "61322f195537812a8ca8d0e08",
          "user": "6131dc5e3e4037cd4734a066",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2021-09-03T14:20:09.668Z",
          "__v": 0
        },
        {
          "_id": "613222f19553781a8ca8d0e08",
          "user": "6131dc5e3e4037cd4734a066",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2021-09-03T14:20:09.668Z",
          "__v": 0
        },
        {
          "_id": "61322f119553781a8ca8d0e08",
          "user": "6131dc5e3e4037cd4734a066",
          "title": "My Title",
          "description": "Please wake up early",
          "tag": "personal",
          "date": "2021-09-03T14:20:09.668Z",
          "__v": 0
        },
      ]
      const [notes, setNotes] = useState(notesInitial)


      // Add a Note
      const addNote = (title, description, tag)=>{
        // TODO: API Call
        console.log("Adding a new note")
        const note = {
          "_id": "61322f119553781a8ca8d0e08",
          "user": "6131dc5e3e4037cd4734a0664",
          "title": title,
          "description": description,
          "tag": tag,
          "date": "2021-09-03T14:20:09.668Z",
          "__v": 0
        };
        setNotes(notes.concat(note)) 
      }

      // Delete a Note
      const deleteNote = (id)=>{
        console.log("Deleting note with id"+id);
        const newNotes = notes.filter((note)=>{return note._id!==id})
        setNotes(newNotes)

      }
      // Edit a Note
      const editNote = ()=>{

      }
    
    return (
        <noteContext.Provider  value={{notes, addNote,deleteNote, editNote }}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;
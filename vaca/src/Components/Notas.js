import React from 'react'


const Nota =()=>{
    const notes = [
        {
          id: 1,
          content: "HTML es muy fácil",
          date: "2020-01-01",
          important: true
        },
        {
          id: 2,
          content: "Los navagadores solo pueden ejecutar Javascript, HTML y CSS.",
          date: "2020-01-20",
          important: false
        }];
    
    return(
        <div>
        <h1>notas</h1>
        <ul>
           {notes.map(note=>{
               return<li key={note.id}>{note.content}</li>
            })} 
        </ul>
        </div>
    )
};
export default Nota;

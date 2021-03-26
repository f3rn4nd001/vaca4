import React, { useState, useEffect } from "react";

const Nota = (props) => {
  const { noteNote } = props;

  return <li>{noteNote.content}</li>;
};

const Notes = (props) => {
  const { notes } = props;
  const [notas, setNotas] = useState(notes);
  const [nuevaNota, setNuevaNota] = useState("");
  const [showImportant, setsShowImportant] = useState(false);
  console.log("nuevaNota", nuevaNota);
  
  useEffect(() => {
    console.log("Notas", notas);
  }, [notas]);

  const addNote = (e) => {
    e.preventDefault();
    console.log(e);

    const noteObject = {
      content: nuevaNota,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
      id: notas.length + 1
    };
    setNotas(notas.concat(noteObject));
  };

  const handleNoteChange = (e) => {
    const { target } = e;
    const { value } = target;
    setNuevaNota(value);
    console.log("Mi nota es: ", value);
  };

  const handleButton = () => {
    setsShowImportant(!showImportant);
  };

  console.log("ShowImportant", showImportant);

  const notasAMostrar = showImportant
    ? notas.filter((note) => note.important === true)
    : notas;

  console.log("Notas a mostrar", notasAMostrar);
  
  return (
    <div className="contenedorNotas">
      <h1>Notas</h1>
      <button onClick={handleButton}>
        Mostrar
        {showImportant ? "todos" : " notas"}
      </button>
      <ul>
        {notasAMostrar.map((noteArray) => (
          <Nota key={noteArray.id} noteNote={noteArray} />
        ))}
      </ul>

      <form onSubmit={addNote}>
        <input value={nuevaNota} onChange={handleNoteChange} />
        <button type="submit">Guardar nota </button>
      </form>
    </div>
  );
};
export default Notes;

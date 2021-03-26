import React, { useState, Fragment } from 'react';
import swal from 'sweetalert';

const GiaTelefonica = () => {
  const [ personas, setpersonas ] = useState([ 
]); 

const [ newName, setNewName ] = useState('');
const [ newTele, setNewTele ] = useState('');

const handleChangeName = e =>{setNewName(e.target.value );}

const handleChangeTele = e => {setNewTele(e.target.value );}

const addPerson = e => {
    e.preventDefault();
    if(! !/^[0-9_.]+$/i.test(newTele)){
        if(newTele.length < 10){
            swal({icon: "info",timer:3000,text:'"El número debe ser 10 dijitos"'});
        }
        if(newTele.length > 10){
            swal({icon: "info",timer:3000,text:'"El número debe ser 10 dijitos"'});
        }
        if(newTele.length === 10){
            let count = 0;
            for(let item of personas){
                personas[0].number.includes() 
                if(item.number == newTele){
                    swal({icon: "info",timer:3000,text:'"Ya existe este numero, favor de colocar otro"'});
                count = 1;
                }
            }
            if(count == 0){
                const NewPersonObjet = {
                    name: newName,
                    number: newTele
                }
                setpersonas(personas.concat(NewPersonObjet));
                setNewName('');
                setNewTele('');
            }     
        }
    }
    else{
        swal({icon: "info",timer:3000,text:'"El Numero telefonico no puede contar con letras"'});
    }
}

  return (
      
    <Fragment>
        <form onSubmit={addPerson}>
            <div>
                Nombre: <input value={newName} onChange={handleChangeName} />
            </div>
            <div>
                Teléfono: <input value={newTele} onChange={handleChangeTele} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
      <h2>Numbers</h2>
      <table class="listado">
            <thead> 
                <tr>
                    <th><h1>Nombre</h1></th>
                    <th><h1>Teléfono</h1></th>
                </tr>
                </thead>
                {personas.map((personas, index) => {
       
                   return (
                <tbody key={index}>
                    
              <td> {personas.name}</td>
              <td> {personas.number}</td>
            </tbody>
                   )
        })}
        </table>
    </Fragment>
  )
}
export default GiaTelefonica;
import React, {  useState ,useEffect} from 'react'
import axios from 'axios';
import './css/notas.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import swal from 'sweetalert';
const NotasT4 = () =>{
const [todos,setTodos] = useState([]);
const [ Titulo, setTitulo ] = useState('');
const [ Nota, setNota ] = useState('');
const [ FechaLim, setFechaLim ] = useState('');

const onChangeTitulo = e =>{setTitulo(e.target.value );}
const onChangeNota= e =>{setNota(e.target.value );}
const onChangefechaLimite = e =>{setFechaLim(e.target.value );}
  useEffect(async () =>{
  
      
    const todos = await axios.get('http://localhost:3001/api/Notas',{headers:{'token':localStorage.getItem('token')}});   
      setTodos(todos.data)
  }, [])
  const onsubNotastodos= async () =>{
  const todos = await axios.get('http://localhost:3001/api/Notastodos',{headers:{'token':localStorage.getItem('token')}});   
    setTodos(todos.data)
  }
  const onSubmitCrearNotas = async e => {
      e.preventDefault();
      const res = await fetch('http://localhost:3001/api/Notas/Crear',{
        method:'POST', headers:{
          'token':localStorage.getItem('token'),
          'Accept':'application/json',
          'Content-Type':'application/json',
        
        }, 
        body: JSON.stringify({
          titulo:Titulo,
          nota:Nota,
          fecha:FechaLim,
        })
      }).then((response)=>response.json()).then((res,req,next)=>{   
        if(res.success===true){
          swal({icon: "success", closeOnClickOutside: false,text:res.message}).then(willDelete => {
            if (willDelete) {
              window.location.href="/T4notas";
            }
          });
        }
        else{
          swal({ closeOnClickOutside: false,text:res.message,icon: "info" });
        }
      })
    }
   const onSubmitEliminar =async _id =>{
           
      const res = await fetch('http://localhost:3001/api/Notas/eliminar/',{
        method:'DELETE', headers:{
          'token':localStorage.getItem('token'),
          'Accept':'application/json',
          'Content-Type':'application/json',
         
        },
        body: JSON.stringify({
          eliminar:_id,
        })
      }).then((response)=>response.json()).then((res,req,next)=>{   
        if(res.success===true){
          alert(res.message);
          window.location.href="/T4notas";
        }
        else{
          alert(res.message);
         }
      })
  }
  const onSubmitCompreto =async _id =>{
           
    const res = await fetch('http://localhost:3001/api/Notas/Compreto/',{
      method:'PUT', headers:{
        'token':localStorage.getItem('token'),
        'Accept':'application/json',
        'Content-Type':'application/json',
       
      },
      body: JSON.stringify({
        comp:_id,
      })
    }).then((response)=>response.json()).then((res,req,next)=>{   
      if(res.success===true){
        alert(res.message);
        window.location.href="/T4notas";
      }
      else{
        alert(res.message);
       }
    })
}
  return(
    
    <div style={{minHeight:"670px"}} >

<div className="col-md-12">
                    <ol style={{background:"rgb(92 90 90)",borderRadius:"10px"}}  className="col-md-1 breadcrumb">
                    
                    <li style={{color: "white"}}> <i style={{color: "white"}} class="fa fa-2x"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-text" viewBox="0 0 16 16">
               <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
               <path d="M3 5.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 8a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 8zm0 2.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/>
             </svg> Notas</i></li>
                    </ol>
                </div>  
                <Button onClick={() =>onsubNotastodos()}  type='submit'><span class="boton">Montrar notas</span></Button>
   
            <form  onSubmit={onSubmitCrearNotas}>
             <Card className='col-md-4' variant="outlined">
      <CardContent>
        <Typography  color="textSecondary" gutterBottom>
        <label style={{color:"rgb(0, 0, 0)"}}  className="label"><h3>Titulo</h3></label>
        
        <input  style={{borderColor:"black"}} id="Titulo" name="Titulo" onChange={onChangeTitulo} type="text" className="input"/>
        </Typography>
      
        
        <Typography variant="body2" component="p">
        <label style={{color:"rgb(0, 0, 0)"}} className="label"><h3>Nota</h3></label>
        
        <textarea style={{borderColor:"black"}}  id="Nota" name="Nota" onChange={onChangeNota} type="text" className="input"/>
        <Typography>
        <label style={{color:"rgb(0, 0, 0)"}} className="label"><h3>Fecha límite </h3></label>
       
        <input type="datetime-local" id="fechaLimite" name="fechaLimite" onChange={onChangefechaLimite} className="input"   max="2025-12-31"/>
               
        </Typography>
          <br />
         
        </Typography>
      </CardContent>
      <CardActions>
        <Button type='submit'><span class="boton">Guardar nota</span></Button>
       </CardActions>
    </Card> 
   
    </form>
    {todos.length ===0 ? <div>No cuenta con notas registradas</div>:<div>

    {todos.map(todos => (
      <Card key={todos._id} className='col-md-4' variant="outlined">
        <CardContent>
          <Typography  color="textSecondary" gutterBottom>
          <label style={{color:"rgb(0, 0, 0)"}}  className="label"><h2>{todos.titulo}</h2></label>
          </Typography>
          <Typography  color="textSecondary">
          <label style={{color:"rgb(0, 0, 0)"}} ><h4>{todos.nota}</h4></label>
          </Typography>
          <Typography  color="textSecondary">
         
          <label style={{color:"rgb(0, 0, 0)"}} className="label"><h4>{todos.fecha}</h4></label>
          </Typography>
        </CardContent>
        <CardActions style={{transform: " matrix(1, 0, 0, 1, 0, 0)"}}>
            
          <Button onClick={() =>onSubmitEliminar(todos._id)}  type='submit'><span class="boton">Eliminar</span></Button>
          <Button onClick={() =>onSubmitCompreto(todos._id)}  type='submit'><span class="boton">Compretada</span></Button>
          
          
        </CardActions>
      </Card>
      ))}
      </div>}
      </div>
  )
}

export default NotasT4;
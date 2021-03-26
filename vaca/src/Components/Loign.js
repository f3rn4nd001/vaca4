import React, { Component } from 'react'
import './css/Login.css';
import Notas from './Notas';
import PropTypes from 'prop-types';
import axios from 'axios';
import {  Redirect, Route } from 'react-router-dom';
import {Link} from 'react-router-dom';
import { Modal,Button } from 'rsuite';
import swal from 'sweetalert';
export default class Login extends Component  {
  constructor(props) {
    super(props);
    this.state = {
      users:[], 
      backdrop:false, 
      showlogin:true, 
      showRegistro:false, 
      Nombre:'', 
      Apellido:'',
      file:'', 
      email:'', 
      password:'', 
      password_conf:'', 
      imagen:{}, 
      Sexo:'', 
      Edad:'', 
      Telefono:''
    };
    this.closeRegis = this.closeRegis.bind(this);
    this.openRegis = this.openRegis.bind(this);
    this.closeLogin= this.closeLogin.bind(this);
    this.openLogin = this.openLogin.bind(this);
  }

  _handleImageChange(e) {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({    
        imagePreviewUrl: reader.result
      });
    }      
    reader.readAsDataURL(file)
  }
          
  closeLogin() {
    this.setState({ showlogin:false });
    this.setState({ showRegistro:true });
  }
  openLogin() {
    this.setState({ showRegistro:false });
    this.setState({ showlogin:true });
  }
  closeRegis() {
    this.setState({ showRegistro:false });
    this.setState({ showlogin:true });
  }
  openRegis() {
    this.setState({ showlogin:false });
    this.setState({ showRegistro:true });
  }
  
  onChangeNombre = (e) => {this.setState({Nombre:e.target.value})}
  onChangeApellido = (e) => {this.setState({Apellido:e.target.value})}
  onChangeimg  = (e) => { this.setState({ imagen:e.target.value })}
  onChangeEdad = (e) => { this.setState({ Edad:e.target.value })}
  onChangeemail = (e) =>{ this.setState({ email:e.target.value })} 
  onChangepassword = (e) => { this.setState({ password:e.target.value })}
  onChangepassword_conf = (e) => { this.setState({ password_conf:e.target.value })}
  onChangeTelefono = (e) => { this.setState({ Telefono:e.target.value })} 
  onChangeSexo = (e) => { this.setState({ Sexo:e.target.value })}

  Cerrarsecion= async e=>{
    e.preventDefault();
    localStorage.removeItem('token');
    window.location.href="/";
  }


  onSubmitLogin = async e => {
    e.preventDefault();
    const res = await fetch('http://localhost:3001/api/Usuarios/Login',{
      method:'POST', headers:{
        'Accept':'application/json',
        'Content-Type':'application/json',
        'token':localStorage.getItem('token')
      }, 
      body: JSON.stringify({
        email:this.state.email,
        password:this.state.password,
      })
    }).then((response)=>response.json()).then((res,req,next)=>{   
        if(res.success===true){
            localStorage.setItem('token',res.Token);
            const tokenString = localStorage.getItem('token');
            swal({icon: "success", closeOnClickOutside: false,text:'Tu token : ' + tokenString}).then(willDelete => {
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
  
  onSubmit= async e => {
    e.preventDefault();
      const res = await fetch('http://localhost:3001/api/Usuarios',{
        method:'POST', headers:{
          'Accept':'application/json',
          'Content-Type':'application/json',
        }, 
        body: JSON.stringify({
          Nombre:this.state.Nombre,
          Apellido:this.state.Apellido,
          imagen:this.state.imagePreviewUrl,
          Edad:this.state.Edad,
          email:this.state.email,
          password:this.state.password,
          password_conf:this.state.password_conf,     
          Telefono:this.state.Telefono,  
          Sexo:this.state.Sexo,
        })
      }).then((response)=>response.json()).then((res)=>{        
      if(res.success===true){
        swal({icon: "success", closeOnClickOutside: false,text:res.message}).then(willDelete => {
          if (willDelete) {
            window.location.href="/";
          }
        });
      }
      else{
        swal({ closeOnClickOutside: false,text:res.message,icon: "info" });
      }
    })
  }
  
  render() {
    const { backdrop, showRegistro,showlogin } = this.state;
    let { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    if ( imagePreviewUrl  ){
      $imagePreview = ( <img src={imagePreviewUrl} />);
    } 
    else{
    $imagePreview = (<div className="previewText">La imagen no se ha elegido</div>);
    }
    return(
      <div> 
        <br/>
        <div className="col-md-12">
          <ol style={{background:"rgb(92 90 90)",borderRadius:"10px"}}  className="col-md-1 breadcrumb">

              <li style={{color: "antiquewhite"}}> <i style={{color: "antiquewhite"}} class="fa fa-2x"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                </svg>Sesión
              </i>
            </li>
          </ol>
        </div> 
                
        <Modal style={{background:"rgb(224 224 224)", minHeight:"579px"}} backdrop={backdrop} show={this.state.showlogin} onHide={this.openLogin}>
          <div className="login-wrap1">
            <div className="login-html">    
            
              <center><label style={{color:"white"}} htmlFor="PrimerNombre">Iniciar sesión</label></center>               
              <div className="login-form">      
                <form  onSubmit={this.onSubmitLogin}>
                  <div className="group">
                    <label htmlFor="email" className="label">email</label>
                    <input  placeholder="email@gmail.com"  id="email" name="email" onChange={this.onChangeemail} type="text" className="input"/>
                  </div>
                  <div className="group">
                    <label htmlFor="password" className="label">Contraseña</label>
                    <input placeholder="Tiene que tener mínimo 4 caracteres" id="password" name="password" onChange={this.onChangepassword} type="password" className="input"/>
                  </div>
                  <br></br>
                  <ul class="list-group list-group-horizontal">
                    <li class="col-8"> <button style={{width:"49%", height:"130%", borderRadius:20}}  type="submit">Entrar</button></li>
                    <li class="col-6"> <Button style={{width:"68%", height:"130%", borderRadius:20}} onClick={this.openRegis} appearance="primary">Registro</Button></li>
                  </ul>
                </form> 
                
              </div>
            </div>
          </div>
        </Modal>
        <Modal  style={{background:"rgb(224 224 224)", minHeight:"570px"}} backdrop={backdrop} show={this.state.showRegistro} >
          <div className="login-wrap">
            <div className="login-html">  
              <center><label style={{color:"white"}} htmlFor="PrimerNombre">Registro</label></center>
              <div className="login-form">
                <Button style={{width:"100px", height:"30px", borderRadius:20}} onClick={this.closeRegis} appearance="primary">Sesión</Button>
                <form  onSubmit={this.onSubmit}>
                  
                  <div className='group'>
                    <label htmlFor="Nombre" className="label">Nombre</label>
                    <input placeholder="NOMBRE" id="Nombre" name="Nombre" onChange={this.onChangeNombre} type="text" className="input"/>
                  </div>
                  <div className="group">
                    <label htmlFor=" Apellido" className="label">  Apellido</label>
                    <input placeholder=" APELLIDO" id=" Apellido" name=" Apellido" onChange={this.onChangeApellido} type="text" className="input"/>
                  </div>
                  <div className="group">
                    <label htmlFor="email" className="label">email</label>
                    <input placeholder="email@gmail.com" id="email" name="email" onChange={this.onChangeemail} type="text" className="input"/>
                  </div>
                  <div className="group">
                    <label htmlFor="password" className="label">Contraseña</label>
                    <input placeholder="Tiene que tener mínimo 4 caracteres" id="password" name="password" onChange={this.onChangepassword} type="password" className="input"/>
                  </div>
                  <div className="group">
                    <label htmlFor="password_conf" className="label">Confirmar contraseña</label>
                    <input  placeholder="tiene que tener mínimo 4 caracteres"  id="password_conf" name="password_conf" onChange={this.onChangepassword_conf} type="password" className="input"/>
                  </div>
                  <div className="group">
                    <label htmlFor="sexo" className="label">Sexo</label>
                    <select name="Sexo" id="Sexo" className="input" onChange={this.onChangeSexo}>
                      <option style={{color:'black'}} >Sexo</option>
                      <option style={{color:'black'}} value="Hombre">Hombre</option>
                      <option style={{color:'black'}} value="Mujer">Mujer</option>
                    </select>                   
                  </div>
                  <div className="group">
                    <label htmlFor="Telefono" className="label">Teléfono</label>
                    <input id="Telefono" name="Telefono" onChange={this.onChangeTelefono} type="number" className="input"/>
                  </div>
                  <div className="group">
                    <label htmlFor="Edad" className="label">Año de nacimiento</label>
                    <input type="date" id="Edad" name="Edad" onChange={this.onChangeEdad} className="input"  min="1900-01-01" max="2025-12-31"/>
                  </div>
                  <div className="group">
                  <div >
                    <input className="fileInput" type="file" onChange={(e)=>this._handleImageChange(e)} />  
                    <div className="imgPreview">
                    {$imagePreview}
                    </div>
                  </div>
                  </div>
                  <button className="button" style={{width:"100px", height:"30px", borderRadius:20}} type="submit"  >Guardar</button>
                </form> 
              </div>
            </div>
          </div>
        </Modal>
      </div>
    )
  }
}
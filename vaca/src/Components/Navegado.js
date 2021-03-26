import React, { Component } from 'react';
import { BrowserRouter as Router,Route  } from 'react-router-dom';
import { decodeToken } from "react-jwt"; 
import './css/Index.css';
import Cursos from "./Cursos";
import Notas from "./Notas";
import Notas2 from "./Notas2";
import Gia from "./Gia";
import Login from "./Loign";
import T4notas from "./T4notas";
export default class Navegador extends Component {
    Cerrarsecion= async e=>{
        e.preventDefault();
        localStorage.removeItem('token');
        window.location.href="/";
    }
    render() {
        
        let tokenDes = decodeToken(localStorage.getItem('token'));
        let $RutaT4nota = null;
        let $tokenAll = null;
        let  $cerrar_secion =null;
        if(tokenDes){
            if(tokenDes.role === 'Usuario'){
                $cerrar_secion=(
                    <li> 
                            <a onClick={this.Cerrarsecion}>
                                <i class="fa"> 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="35" fill="currentColor" class="bi bi-door-open-fill" viewBox="0 0 16 16">
                                        <path d="M1.5 15a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1H13V2.5A1.5 1.5 0 0 0 11.5 1H11V.5a.5.5 0 0 0-.57-.495l-7 1A.5.5 0 0 0 3 1.5V15H1.5zM11 2h.5a.5.5 0 0 1 .5.5V15h-1V2zm-2.5 8c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"/>
                                    </svg>
                                </i>
                                <span style={{fontSize:17}} class="nav-text" > Cerrar sesión </span>
                            </a>
                       </li>
                );
                $tokenAll = ( 
                    
                    <a href="/T4notas">
                        <i class="fa ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="35" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                            </svg>
                        </i>
                        <span style={{fontSize:17}} class="nav-text">Tarea 4 notas</span>
                    </a>
                );
                
                $RutaT4nota=(
                    <Route path='/T4notas' component={T4notas}></Route>
                );
            }}
        return (
            <html>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"/>
                <body style={{background:"rgb(224 224 224)"}} >
                    <div class="area"></div>
                    <nav class="main-menu">
                        <ul>
                            <li class="has-subnav">
                                <a href="/Notas">
                                    <i class="fa ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="35" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                        <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                        <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                    </svg>
                                    </i>
                                    <span style={{fontSize:17}} class="nav-text">Inicio</span>
                                </a>
                            </li>
                            
                            <li class="has-subnav">
                                <a href='/Cursos'>
                                    <i class="fa"> 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="35" fill="currentColor" class="bi bi-archive-fill" viewBox="0 0 16 16">
                                        <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15h9.286zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1zM.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8H.8z"/>
                                    </svg>
                                    </i>
                                    <span style={{fontSize:17}} class="nav-text">Cursos</span>
                                </a>
                            </li>
                            
                        

                            <li class="has-subnav main-menu">
                                <a href="">
                                   <i style={{display:"block"}} class="fa">
                                       <svg xmlns="http://www.w3.org/2000/svg" width="22" height="30" fill="currentColor" class="bi bi-image-alt" viewBox="0 0 16 16">
                                            <path d="M7 2.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zm4.225 4.053a.5.5 0 0 0-.577.093l-3.71 4.71-2.66-2.772a.5.5 0 0 0-.63.062L.002 13v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4.5l-4.777-3.947z"/>
                                        </svg>
                                    </i>
                                    <span style={{fontSize:17}} class="nav-text">Tarea 3</span>
                                </a>
                                <div class="area2"></div>
                                <nav class="main-menu2">
                                    <ul class="logout">
                                        <li class=" main-menu">        
                                            <a style={{display:"block"}} href="/Gia">
                                            
                                                <span style={{fontSize:18,width:'63%',textAlign:"center"}} class="fa nav-text">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="30" fill="currentColor" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                                        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                                                    </svg>
                                                Gia</span>
                                                    
                                            </a>
                                        </li>
                                    
                                        <li class=" main-menu"> 
                                            <a style={{display:"block"}} href="">
                                                <span style={{fontSize:18,width:'35%'}} class="fa nav-text"><svg xmlns="http://www.w3.org/2000/svg" width="40" height="20" fill="currentColor" class="bi bi-cloud-fill" viewBox="0 0 16 16">
                                                <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"/>
                                                </svg>Notas 2</span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </li>
                             
                            <li>{$tokenAll} </li>
                        </ul>
                        <ul class="logout">
                        <li>
                                <a href="/">
                                    <i class="fa fa-group fa-2x"></i>
                                    <span style={{fontSize:17}} class="nav-text">Iniciar sesión </span>
                                </a>
                            </li>  
                            {$cerrar_secion}
                        </ul>
                    </nav>
                    
                    <div class="container" >
                        <Router> 
                            <Route path="/" exact component={Login}/>
                            <Route path='/Notas' exact component={Notas}></Route>
                            <Route path='/Cursos' component={Cursos}></Route>
                            <Route path='/Notas2' component={Notas2}></Route>
                            <Route path='/Gia' component={Gia}></Route>
                            {$RutaT4nota}
                        </Router>
                    </div>
                    
                    
            </body>
        </html>
        )
    }
}
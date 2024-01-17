import React from 'react';
import '../hojas-de-estilo/Tarea.css';

//paquete que te permite trabajar con iconos que se utilizan comunmente
//https://react-icons.github.io/react-icons/
//para instalarlo npm install react-icons --save
//import {nombre del incono} from "donde lo vamos a importar"
//son componentes de React
import { AiOutlineCloseCircle } from "react-icons/ai";

function Tarea({ id, texto, completada, completarTarea, eliminarTarea }) {
  // onClick={() => completarTarea(id)}> funcion vacia
  //condicion ternaria para aplicar un estilo segun el valor de props completada
  //la separacion por un espacio porque estamos asignando mas de una clase
  return (
    <div className={completada ? 'tarea-contenedor completada' : 'tarea-contenedor'}>
      <div 
        className='tarea-texto'
        onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div 
        className='tarea-contenedor-iconos'
        onClick={() => eliminarTarea(id)}>
        <AiOutlineCloseCircle className='tarea-icono' />
      </div>
    </div>
  );    
}

export default Tarea;
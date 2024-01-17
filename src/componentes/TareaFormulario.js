import React, { useState } from 'react';
import '../hojas-de-estilo/TareaFormulario.css';
//componente externo para manejar un id unico
//https://www.npmjs.com/package/uuid
//npm install uuid
import { v4 as uuidv4 } from 'uuid';

function TareaFormulario(props) {

  //hook de estado, lo que escribio el usuario hasta el momento
  const [input, setInput] = useState('');

  //los cambios que ocurre en el input
  //e.target.value es el valor que añade el usuario en el campo de texto
  const manejarCambio = e => {
    setInput(e.target.value);
  }

  //se llama cuando se haga clic en el boton "Agregar Tarea"
  const manejarEnvio = e => {
    //para que no se vuelve a cargar toda la aplicacion a la hora de cargar toda la aplicacion cuando se envie los datos
    e.preventDefault();
    
    //datos de la tarea representado como un objeto de js
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    }

    //cuando se envia vamos a pasar la tareaNueva, nos lo pasa la lista de tareas
    //el formulario a través de los props la tarea devuelta a ListaDeTareas
    props.onSubmit(tareaNueva);
  }
  //cuando se llama onSumit, es decir, se envia los datos, se llama a la funcion manejarEnvio
  return (
    <form 
      className='tarea-formulario'
      onSubmit={manejarEnvio}>
      <input 
        className='tarea-input'
        type='text'
        placeholder='Escribe una Tarea'
        name='texto'
        onChange={manejarCambio}
      />
      <button className='tarea-boton'>
        Agregar Tarea
      </button>
    </form>
  );
}

export default TareaFormulario;

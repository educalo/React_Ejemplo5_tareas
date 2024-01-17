import React, { useState } from 'react';
import TareaFormulario from './TareaFormulario';
import Tarea from './Tarea';
import '../hojas-de-estilo/ListaDeTareas.css';

function ListaDeTareas() {

  //estado con lista de tareas
  //estado que en nuestro caso es un array y la funcion que cambia el estado = valor inicial en nuestro caso es un array vacio
  const [tareas, setTareas] = useState([]);


  //cuando vamos a agregar una tarea
  //pasamos esta funcion al componente TareaFormulario
  const agregarTarea = tarea => {
    console.log("Tarea agregada");
    console.log(tarea);
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim();
      //estoy añadiendo la tarea al principio del array tareas
      //con ... estoy conviertiendolas a objetos individuales
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
    }
  }

  //el que cumpla la condicion se añade en el array pero si el id es igual no lo incluimos
  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
  }

  //en el map por cada tarea vamos a comprobar si la tarea fue completada
  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea => {
      if (tarea.id === id) {
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  }
  
  //un componente solo puede tiener un panel principal y dentro de el puede contener otros div
  //sino queremos un panel principal podemos añadir etiquetas vacias, que se llaman fragmentos
  //vamos a renderizar una lista de componentes en nuestro caso el componente tarea
  //map es un metodo que va a tomar cada una de la tareas, una por una, y va a realizar, en nuestro caso un nuevo componente con los datos pasados
  //key es una forma que tiene React para identificar un elemento en la lista y se pasa doble porque el key no se pasa como un props
  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className='tareas-lista-contenedor'>
        {
          tareas.map((tarea) =>
            <Tarea
              key={tarea.id}
              id={tarea.id} 
              texto={tarea.texto}
              completada={tarea.completada}
              completarTarea={completarTarea}
              eliminarTarea={eliminarTarea} />
          ) 
        }
      </div>
    </>
  );    
}

export default ListaDeTareas;
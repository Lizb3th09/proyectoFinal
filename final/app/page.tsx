"use client"
import { useState } from "react"


const Page = () => {

  const [nombre,setNombre] = useState('');
  const [edad,setEdad] = useState(0);
  const [mensaje,setMensaje] = useState('');
  const [contador, setContador] = useState(0);

  function contar(){
    setContador(contador + 1);
  }


  function limpiar(){
    setContador(0);
  }


  const manejadorFormulario = (e:any) => {
    e.preventDefault();
    console.log('Se hizo click');
   
    if (edad >= 18) {
      setMensaje("El número es mayor  a 18");
    } else {
      setMensaje("El número es menor a 18");
    }
  }
    
  
  return (
    <div>
      <h1>Proyecto final</h1>
      <h2>Estructura de datos</h2>
      <h3>Rosa Lizbeth Barcenas Mancilla</h3>
      <h4>{nombre}</h4>
      <button onClick={contar}>Contar</button>
      <button onClick={limpiar}>Limpiar</button>

      <form 
        onSubmit={manejadorFormulario}
        >

        <input type="text" 
          placeholder="Edad" 
          value={edad} 
          onChange={(event) => setEdad(parseInt(event.target.value))}
          />

        <input type="submit" />
      </form>
      
      <p>{contador} número de clicks</p>

      {mensaje}
    </div>
  )
}

export default Page;

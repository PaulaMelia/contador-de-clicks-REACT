
import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {

  /*INTERACTIVIDAD */
  /*Es comun en el arrayde estado, el segundo nombre poner set+el primer nombre del estado,set significa asignar */
  /*valor inicial lde clicks */
  const [numeroClicks, setnumeroClicks] = useState(0); 
  
  const click =() =>{
   setnumeroClicks(numeroClicks + 1) ;
  };
  const reiniciarContador =() =>{
   setnumeroClicks(0);
  };

  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo' 
        src={freeCodeCampLogo} 
        alt='Logo freecodecamp'
        />
      </div>
      <div className='contenedor-principal'>
        <Contador
        numeroClicks={ numeroClicks }  />

        <Boton 
        texto='Click'
        botonClick={true}
        usarClick={click} />

        <Boton
        texto='Reiniciar'
        botonClick={false}
        usarClick={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;

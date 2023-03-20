import React from 'react';
import '../styles/Boton.css'

function Boton({texto, botonClick, usarClick}){ /*Para una mejor practica,dejamos de usar los props y solo nombramos en parametro ,AQUI HAY 3 PROPS*/
  return(
    /*OPERADOR TERNARIO CONDICIONAL */
    <button 
    className={botonClick ? 'boton-click' : 'boton-reiniciar'}
    onClick={usarClick}> 
    {texto}
    </button>
  )
}

export default Boton;
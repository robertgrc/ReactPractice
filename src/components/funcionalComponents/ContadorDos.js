import React, { useState } from 'react';

export default function ContadorDos () {

const [counter, setCounter] = useState(0);

const sumar = () => {setCounter(counter+1)}
const restar = () => {setCounter(counter-1)}

  return(
    
    <>
        <h2>Contador2</h2>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
        <h3>{counter}</h3>
    </>
    
    ) 
  
};

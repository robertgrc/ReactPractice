import React from 'react';

// const Props = ({cadena, numero, boleano}) => {
//   return (
//       <div>{cadena}; {numero}; {boleano}</div>
//   )
// };

export default function Props(props){
    return(
        <div>
            <h2>{props.porDefecto}</h2>
         <ul>
             <li>{props.cadena}</li>
             <li>{props.numero}</li>
             <li>{props.boleano}</li>
             <li>{props.arreglo.join(", --")}</li>
             {/* funcion toma los datos del arreglo y nos trae como resultado el arreglo al cuadrado */}
             <li>{props.arreglo.map(props.funcion).join(", ----")}</li>
             <li>{props.arreglo.map(props.funcion2).join(",------")} </li>
             <li>{props.objeto.nombre + "-" + props.objeto.correo}</li>
             <li>{props.elementoReact}</li>
             <li>{props.componenteReact}</li>
             
         </ul>
        </div>
    )
}

Props.defaultProps ={
    porDefecto:"Las props"
}
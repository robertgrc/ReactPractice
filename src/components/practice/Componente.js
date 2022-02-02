import React from 'react';

//funcion no declarada sino expresada es aun mas corto
const Componente = (props) => <div>{props.mensaje} </div>;

//componente Funcional
// import React from 'react';
// function Componente (props){
//     return <h2>{props.mensaje}</h2>
// }


////Componente con clases
// import React, {Component} from 'react';
// class Componente extends Component  {
// render(){
//     return <h2>{this.props.mensaje}</h2>
// }
// }

export default Componente;
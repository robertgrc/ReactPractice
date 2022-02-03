import React, {Component} from 'react';

export default class Padre extends Component{
    state={
        contador:0,
    };

    incrementarContador=(e)=>{
        this.setState({
            contador:this.state.contador +1
        })
    }

    render(){
        return(
            <div>
                <h2>Comunicacion entre Componentes</h2>
                <p>
                   Contador <b>{this.state.contador}</b>
                </p>
                <Hijo incrementarContador={this.incrementarContador}mensaje="Mensaje para el hijo1"/>
                <Hijo incrementarContador={this.incrementarContador}mensaje="Mensaje para el hijo2"/>
            </div>
        )
    }
}

function Hijo (props){

  return(
    <> 
         <h2>{props.mensaje}</h2>;
         <button onClick={props.incrementarContador}>+</button>
    </>
)
};

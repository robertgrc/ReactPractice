import React from 'react';
import "./Estilos.css"
import moduleStyles from "./Estilos.module.css"

export default function Estilos(){

    let myStyles = {
        borderRadius:".7rem",
        margin: "2rem auto",
        backgroundColor: "pink"
    }
    return(
    
        <section className='estilos'>

        <h2>Estilos CSS en React</h2>
        <h3 className='bg-react'>Estilos en hoja CSS externa</h3>
        <h3 className='bg-react' style={{borderRadius:".35rem" , margin:"1rem"}}>Estilos en linea(atributo style)</h3>
        <h3 style={myStyles}>Estilos en Linea</h3>
        <h3 className={moduleStyles.error}>Estilos con Modulos</h3>
        <h3 className={moduleStyles.succes}>Estilos con Modulos</h3>
        </section>
        
    )
}
import React, { useEffect, useState } from 'react';


export default function ScrollHooks() {

const [scrollY, setScrollY] = useState(0);

useEffect(()=>{
    console.log("Moviendo el scroll");

    const detectarScroll = () =>setScrollY(window.pageYOffset);
        window.addEventListener("scroll", detectarScroll);
    });

   useEffect(() => {
    console.log("Fase de montaje");
   }, []);

   useEffect(() => {
    console.log("Fase de actualizacion");
   });
   
   useEffect(() => {
     return () => {
       console.log("Fase de desmontaje");
     };
   });
   

    return(
        <>
            <h2>Hooks - useEffect y ciclo de vida(funcional components)</h2>
            <p>Scroll Y del navegador {scrollY} px</p>
        </>
    )
}



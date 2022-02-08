import React from 'react';

export default function Referencias(){

    const handleToggleMenu = (e) => {
        const $menu =document.getElementById("menu");
        console.log(e);

    if (e.target.textContent === "Menu"){
        e.target.textContent="Cerrar";
        $menu.style.display = "block"
        } else{
            e.target.textContent="Menu";
            $menu.style.display = "none"
        }

    };

    return(
        <>
         <h2>Referencias</h2>
         <button id="menu-btn" onClick={handleToggleMenu}>Menu</button>
         <nav id="menu" style={{display:'none'}}>
             <a href="#">Seccion1</a>
             <br />
             <a href="#">Seccion2</a>
             <br />
             <a href="#">Seccion3</a>
             <br />
             <a href="#">Seccion4</a>
             <br />
             <a href="#">Seccion5</a>
         </nav>
        </>
    )
}
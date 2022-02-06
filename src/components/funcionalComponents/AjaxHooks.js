import React, { useState, useEffect } from 'react';

function Pokemon({avatar, name}) {
    return(
        <figure>
            <img src={avatar} alt={name}/>
            <figcaption>{name}</figcaption>
        </figure>
    )
}


export default function AjaxHooks(){
    const [pokemons, setPokemons] = useState([]);

    useEffect(() => {
        let url="https://pokeapi.co/api/v2/pokemon";
        fetch(url)
          .then(res=> res.json())
          .then((json)=>{
              console.log(json);
              json.results.forEach((el)=>{
                  fetch(el.url)
                  .then((res)=>res.json())
                  .then(json=>{
                      console.log(json);

                      let pokemon = {
                          id: json.id,
                          name: json.name,
                          avatar: json.sprites.front_default,
                      };
                        
                     setPokemons((pokemons)=>[...pokemons, pokemon])

                  });

              });
          });
    }, []);
    

    return(
            <>
                <h2>Peticiones Asincronas en hooks</h2>
                {pokemons.length === 0 ?(
                    <h3>Cargando...</h3>
                ) :(
                    pokemons.map((el) =>(
                        <Pokemon key={el.id} name={el.name} avatar={el.avatar}/>
                    ))
                )}
            </>
    )

}


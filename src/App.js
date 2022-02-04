
import './App.css';
import Componente from './components/practice/Componente';
import Componente2 from './components/practice/Componente2';
import Estado from './components/practice/Estado';
import { EventosES6, EventosES7, MasSobreEventos } from './components/practice/Eventos';

import Props from './components/practice/Props';
import RenderizadoCondicional from './components/practice/RenderizadoCondicional';
import ComunicacionComponentes from './components/practice/ComunicacionComponentes'
import CicloVida from './components/practice/CicloVida';



function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Componente mensaje="este es un mensaje enviado al componente desde una prop"/>
       <Componente2 msg="Mensaje2 enviado por props de componente2" />
       <Props 
          cadena="Esta es una cadena" 
          numero={19} 
          boleano={true}
          arreglo={[1,2,3,4,5]}
          funcion={(numero)=>numero*numero}
          funcion2={(num)=>num*7}
          objeto={{nombre:"robert", correo:"robert.rodriguez@gmail.com"}}
          elementoReact={<p>Este es un elemento react</p>}
          componenteReact={<Componente mensaje="soy un componente pasado como prop"/>}
       /> 
       <br/>
       <hr/>
       <Estado />
       <RenderizadoCondicional />
       <EventosES6 />
       <EventosES7 />
       <MasSobreEventos />
       <hr/>
       <ComunicacionComponentes />
       <CicloVida />
      </header>
    </div>
  );
}

export default App;

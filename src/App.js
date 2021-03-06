
import './App.css';
import Componente from './components/practice/Componente';
import Componente2 from './components/practice/Componente2';
// import Estado from './components/practice/Estado';
// import { EventosES6, EventosES7, MasSobreEventos } from './components/practice/Eventos';

// import Props from './components/practice/Props';
// import RenderizadoCondicional from './components/practice/RenderizadoCondicional';
// import ComunicacionComponentes from './components/practice/ComunicacionComponentes'
// import CicloVida from './components/practice/CicloVida';
// import AjaxApis from './components/practice/AjaxApis';
// import ContadorHooks from './components/funcionalComponents/ContadorHooks';
// import ContadorDos from './components/funcionalComponents/ContadorDos';
// import ScrollHooks from './components/funcionalComponents/ScrollHooks';
// import RelojHooks from './components/funcionalComponents/RelojHooks';
// import AjaxHooks from './components/funcionalComponents/AjaxHooks';
// import HooksPersonalizados from './components/funcionalComponents/HooksPersonalizados';
import Referencias from './components/funcionalComponents/Referencias';
import Formularios from './components/funcionalComponents/Formularios';
import Estilos from './components/funcionalComponents/Estillos';

// import Referencias2 from './components/funcionalComponents/Referencias2';




function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Componente mensaje="este es un mensaje enviado al componente desde una prop"/>
       <Componente2 msg="Mensaje2 enviado por props de componente2" />
       {/* <Props 
          cadena="Esta es una cadena" 
          numero={19} 
          boleano={true}
          arreglo={[1,2,3,4,5]}
          funcion={(numero)=>numero*numero}
          funcion2={(num)=>num*7}
          objeto={{nombre:"robert", correo:"robert.rodriguez@gmail.com"}}
          elementoReact={<p>Este es un elemento react</p>}
          componenteReact={<Componente mensaje="soy un componente pasado como prop"/>}
       />  */}
       {/* <br/>
       <hr/> */}
       {/* <Estado />
       <RenderizadoCondicional />
       <EventosES6 />
       <EventosES7 />
       <MasSobreEventos />
       <hr/>
       <ComunicacionComponentes />
       <CicloVida />
       <AjaxApis /> */}
       {/* <ContadorHooks />
       <ContadorDos />
       <ScrollHooks />
       <RelojHooks />
       <AjaxHooks /> 
       <HooksPersonalizados/> */}
       {/* <Referencias2/> */}
       <Referencias/>
       <Formularios />
       <Estilos />

      </header>
    </div>
  );
}

export default App;

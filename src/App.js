import './App.css';
import logoBonetto from './assets/img/alcancias_01.png';
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);




  const handelClick = () => {
    setNumClicks(numClicks+1);
  }

  const reiniciarContador = () => {
    setNumClicks(0);
  }



  return (
    <div className="App">
      <div className="bonetto-logo-contenedor">
        <img 
          className="logo"
          src={logoBonetto}
          alt="logo Bonetto"
        />
      </div>
      
      <div className='contenedor-principal'>
        
        <Contador numClicks={numClicks} />
        


        <Boton 
          texto="CLICK"
          esBotonDeClick={true}
          handelClick={handelClick}
        />
        
        <Boton 
          texto="REINICIAR"
          esBotonDeClick={false}
          handelClick={reiniciarContador}
        />
        
      </div>

      
    </div>
  );
}

export default App;

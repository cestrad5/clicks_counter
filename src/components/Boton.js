import '../styles/Boton.css';

const Boton = ({texto, esBotonDeClick, handelClick}, ) => {
  return (
    <button
      className={esBotonDeClick ? "boton-click" : "boton-reiniciar"}
      onClick={handelClick}
    >
      {texto}
    </button>
  )
}

export default Boton
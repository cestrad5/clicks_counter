import Head from "next/head";
import Sidebar from "../components/Sidebar";
import Modal from "react-modal";
import ModalProducto from "../components/ModalProducto";
import useQuiosco from "../hooks/useQuiosco";


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement("#__next");


export default function Layout({children, pagina}) {
    const { modal } = useQuiosco();
      
    return (
    <>
        
        <Head>
            
            <title>Café - {pagina}</title>
            <meta name="description" content="Quiosco - Cafeteria"/>
        </Head>

<div className="md:flex mx-auto">
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5  md:h-screen md:overflow-y-auto">
          <Sidebar />
        </aside>
        <main className="md:w-8/12 xl:w-3/4  2xl:w-4/5 md:h-screen md:overflow-y-auto">
          <div className="p-10">
            {children}
          </div>
        </main>
</div>
    
      {modal && (
        <Modal isOpen={modal} style={customStyles}>
          <ModalProducto />
        </Modal>
      )}    
    </>
  )
}
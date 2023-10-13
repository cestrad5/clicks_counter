import { useState, useEffect, createContext} from 'react'
import axios from 'axios'
 
const QuioscoContext = createContext()
 
const QuioscoProvider = ({children}) =>{
    const [categorias, setCategorias] = useState([])
    const [categoriaActual, setCategoriaActual] = useState({})
    const [producto, setProducto] = useState({})
    const [modal, setModal] = useState(false)
/*     const [pedido, setPedido] = useState([])
    const [nombre, setNombre] = useState('')
    const [total, setTotal] = useState(0) */

    const obtenerCategorias = async () => {
        const { data } = await axios('/api/categorias')
        setCategorias(data)
    }
    useEffect(() => {
        obtenerCategorias()
    }, [])
 //definimos la categoria por defacto
    useEffect(() => {
        setCategoriaActual(categorias[0])
    }, [categorias])

    const handleClickCategoria = id => {
        const categoria = categorias.filter( cat => cat.id === id )
        setCategoriaActual(categoria[0])
        }

    const handleSetProducto = producto => {
        setProducto(producto)
    }

    const handleChangeModal = () => {
        setModal(!modal)
    }    
 
    return(
 
        <QuioscoContext.Provider 
            value={{
                categorias,
                categoriaActual,
                handleClickCategoria,
                producto,
                handleSetProducto,
                modal, 
                handleChangeModal,
/*                 handleAgregarPedido,
                pedido,
                handleEditarCantidades,
                handleEliminarProducto,
                nombre, 
                setNombre,
                colocarOrden,
                total   */
            }}>
            {children}
 
        </QuioscoContext.Provider>
 
    ) 
 
}
export default QuioscoContext
 
export{
    QuioscoProvider
}
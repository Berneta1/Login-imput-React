const Boton = ({nombre, password})=> {
    const handlelogin = ()=> alert ('ingresando al sitio...')
    return (
        <div>
            <button
            onClick={()=>handlelogin()}>
                Ingresar
                </button>
        </div>

    )
}

export default Boton
import { useState } from "react";

const Boton = ({nombre}) => {

    // const [mostrar, setMostrar] = useState(true)

    // const handleMostrar = () => {
    //     setMostrar(!mostrar); // esto hace que sea "false"
    //     //console.log(mostrar);
    // }

    return (
        <button>{nombre}</button>
    )
}

export default Boton;
import Texto_useEffect from "../Texto_useEffect/Texto_useEffect";
import { useState } from "react";

const Texto = () => {

    const [mostrar, setMostrar] = useState(true)
    // queremos que mostrar es un valor "boolean" (true/false)
    // true para mostrarse
    // false para desaparecer

    const handleMostrar = () => {
        setMostrar(!mostrar); // esto hace que sea "false"
        //console.log(mostrar);
    }

    return (
        <div>
            {/* <button onClick={handleMostrar}>Mostrar / Ocultar</button>          // forma para una*/}    
                    
            {/* con las llaves, { }, podemos meter condicionales en jsx (return) 
                    {mostrar === true && <h2>Hola a todos!</h2>}  
            Esto hace que si mostrar es true, entonce muestra el h2*/}            
            
            {/*  // forma de cambiar el nombre del boton */}
            <button onClick={handleMostrar}>{mostrar ? "Vista" : "No Vista"}</button>
            <br /><br />
            {/* {mostrar ? <h2>Hola a todos!</h2> : <h2>Chau a todos!</h2>} */}                
            {/*mostrar === true ? <h2>Hola a todos!</h2> : <h2>Chau a todos!</h2> 
            ? operador ternario que hace un if-else (primero true y despues del : es false*/}
            {/* {mostrar && <h2>Hola a todos!</h2>} */}            
            {mostrar && <Texto_useEffect/>}
        </div>
    );
}



// 17'30" : explica sobre useEffect()
export default Texto;
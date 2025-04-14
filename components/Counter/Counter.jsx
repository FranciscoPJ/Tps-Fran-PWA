import { useState } from "react";

const Counter = () => {
    // funcion flecha
    // lenguaje js y htmls

    /*
    useState:
    El uso de estados son variables que al cambiar el valor, van a hacer forzar al componente
    a actualizarse (a volver a renderizarse en la pantalla).
    Se desmonta, se eliminar y se carga de nuevo con la informacion nueva
    */

    // useState(); es una funcion, por eso lleva parentesi. Retorna un array
    // const [variable, funcion] = useState();
    const [number, setNumber] = useState(0);

    
    // number (variable en el array) es el que queremos modificar
    // y al ponerlno como un estado (igualarlo = (useState()), 
    // estamos haciendo un HOOK ya que vamos a cambiar el estado o estados

    // y "funcion" en el array, es la funcion que hacer cambiar el estado de number
    // y simpre esa funcion comienza con "set" y luego nombre de la variable "number", 
    // entonces quedaria "setNumber"

    //para inicializar los estado, van a dentro del parentesis useState(___);
    // int: (o);
    // string ("");
    // array ([]);
    // 

    const sumar = () => {
        // llamado de la funcion setNumber
        setNumber(number + 1);
    }

    const restar = () => {
        // llamado de la funcion setNumber
        setNumber(number - 1);
    }
    
    return (
        //retorna un jsx (con lenguaje js y htmls)
        <div>
            <h2>{number}</h2>
            <button onClick={sumar}>Sumar</button>
            <button onClick={restar}>Restar</button>
            <hr />
        </div>
    );
};

export default Counter;

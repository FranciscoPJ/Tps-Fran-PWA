import {useEffect, useState} from 'react'

const Texto_useEffect = () => {
    
    const [texto, setTexto] = useState(""); // cambio de estado (solo actualiza el componente. no hace montaje del componente)

    const handleTexto = (evento) => { // funcion de evento, tiene un parametro llamado "evento" o "e"
        setTexto(evento.target.value);
        // console.log(evento.target.value);
    }

    // useEffect( () => {}, arr);
    // recibe 2 parametros 
    // el primero es una funcion anoninma "() => {}", que queremos ejecutar
    // el segundo es array despues del "}" (}, arr) el array es para uso fecth (traer info de una base datos o api)
    
    // pero vamos a usar un solo parametro
    useEffect( () => { // monta el componente y lo ejecuta.
        // en el minuto 28 (habla el uso del useEffect() - clase 4
        console.log("componente montado");
    });


    /* 
    Entonces esta bien esto?
    useState para actualizar el componente
    y
    useEffecto para montar y ejecutar el componente con un cambio de estado?
    */

    return (
    <div>
        <input type="text" onChange={handleTexto} />  
        {/* // cuando usamos eventos en js, obtenemos el parametro de evento (evento) por 
        // defecto*/}
        <h3>{texto}</h3>
    </div>
    )
}

export default Texto_useEffect;
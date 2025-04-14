import './Home.module.css';

import Counter from '../../components/Counter/Counter.jsx';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer.jsx';
import Texto from '../../components/Texto/Texto.jsx';
import {Titulo} from '../../components/Titulo/Titulo.jsx';

// import '../../components/Tarjeta/Tarjeta.module.css';

function Home() {
    // titulos
    const nombreEmpresa = "Videoclub";
    // const tituloVisto = "Visto";
    // const tituloNoVisto = "No Visto";

    return (
        <div>        
            <Titulo texto={nombreEmpresa}/>    
            <ItemListContainer tipo="Peliculas y Series"/>
            {/* <ItemListContainer tipo="Series"/> 
            <ItemListContainer tipo="Ver"/> 
            <ItemListContainer tipo="Vista"/>  */}

            {/* <Counter/> */}
            {/* <Texto/>   */}
        </div>
    );
};

export default Home

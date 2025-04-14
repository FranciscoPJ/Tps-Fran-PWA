const Boton = ({ nombre, onClick }) => {
    return (
        <button onClick={onClick}>
            {nombre}
        </button>
    );
};

export default Boton;


import React from 'react';
import PropTypes from 'prop-types'


/** FC */
const PrimeraApp = ( { saludo, subtitulo } )=>{
    // const saludo = "Hola mundo!";
    const jsonObject = {
        nombre: "Ricardo",
        edad: 27
    }

    
    return (
        <>
            <h1>{ saludo }</h1>
            {/* <pre>{ JSON.stringify( jsonObject, null, 3 ) }</pre> */}
            {/* <p>Mi primera aplicacion</p> */}
            <p>{ subtitulo }</p>
        </>
    );
}

PrimeraApp.propTypes = {
    saludo : PropTypes.string
}

PrimeraApp.defaultProps = {
    subtitulo : "soy un subtitulo"
}


 export default PrimeraApp;
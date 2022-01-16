import React from 'react'

export const ShowIncrements = React.memo(( { increments } ) => {

    console.log("me volvi a generar :(");
    
    return (
        <button
            className="btn btn-primary"
            onClick={ ()=> increments(5) }
        >
            Ingrementar
        </button>
    )
})

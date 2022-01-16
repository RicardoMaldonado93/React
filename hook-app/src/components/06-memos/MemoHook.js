import React, { useState, useMemo }from 'react'
import procesoPesado from '../../helpers/procesoPesado';
import { useCounter } from '../hooks/useCounter'

export const MemoHook = () => {

    const { counter, increment } = useCounter(5000);
    const [show, setShow] = useState(true);

    const memoProcesoPesado = useMemo(() => procesoPesado( counter ), [counter]);

    return (
        <div>
            <h1>MemoHook </h1>
            <small>Counter : { counter }</small>
            <hr />
            
            <p>{ memoProcesoPesado }</p>

            <button
                className="btn btn-primary"
                onClick={ ()=> increment() }
            >+1
            </button>
           
            <button
                className="btn btn-secondary"
                onClick={ ()=> setShow( !show ) }
            >{ JSON.stringify( show ) }
            </button>
        </div>
    )
}

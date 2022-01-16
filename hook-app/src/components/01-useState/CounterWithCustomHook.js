import React from 'react'
import { useCounter } from '../hooks/useCounter'

export const CounterWithCustomHook = () => {

    const { state, increment, decrement, reset } = useCounter(50);

    return (
        <>
            <h1>Counter With Custom Hook: { state } </h1>    

            <button  className={"btn btn-danger"}
                onClick={ ()=> decrement(2) }
            > 
                -1 
            </button>

            <button  className={"btn btn-primary"}
                onClick={ reset }
            > 
                Reset 
            </button>

            <button  
                className={"btn btn-success"} 
                onClick={ ()=>increment(2)  } > 
                +1 
            </button>
        </>
    )
}

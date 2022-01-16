import React, { useState } from 'react'

export const CounterApp = () => {

    const [ state, setState] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 20,
        counter4: 20,
    });

    const { counter1, counter2 } = state;

    console.log({counter1, counter2})
    return (
        <>
            <h1>Counter1 { counter1 }</h1>   
            <h1>Counter2 { counter2 }</h1>   

            <button  
                className={"btn btn-success"} 
                onClick={ () => setState({
                    ...state,
                    counter1 : counter1 + 1
                })} > 
                +1 
            </button>

        </>
    )
}

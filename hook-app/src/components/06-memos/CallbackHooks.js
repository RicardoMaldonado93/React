import React, { useCallback, useEffect, useState } from 'react'
import { ShowIncrements } from './ShowIncrements';

export const CallbackHooks = () => {


    const [counter, setCounter] = useState(10);

    // const increment = ()=>{
    //     setCounter(counter + 1);
    // }

    const increment = useCallback(( num = 1 ) => { 
        setCounter( c => c + num );
    },[setCounter]);

    useEffect(() => {
        
    }, [increment])

    return (
        <div>
            <h1>CallbackHooks { counter }</h1>
            <hr />

            <ShowIncrements increments={ increment }/>
        </div>
    )
}

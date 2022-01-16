import React, {useState, useLayoutEffect, useRef} from 'react';
import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch';
    
import "./LayoutEffect.css";

    export const LayoutEffect = () => {

        const { increment, counter } = useCounter(1);
        const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
        const { quote } = !!data && data[0];
        
        const pTag = useRef();
        const [boxSize, setBoxSize] = useState({});

        useLayoutEffect(() => {
            setBoxSize(pTag.current.getBoundingClientRect());

        }, [quote]);


        return (
            <>
                <h1>LayoutEffect</h1>   
                <hr />

                <blockquote className="blockquote text-right">
                    <p className="mb-0" ref={pTag}>{quote}</p>
                </blockquote>
                
                <pre style={{"color":"white"}}>
                    { JSON.stringify(boxSize, null, 3) }
                </pre>
                <button 
                    className="btn btn-primary"
                    onClick={ ()=> increment() }
                >
                    Siguiente
                </button>
            </>
        )
    }
    
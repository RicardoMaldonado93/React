import React, {useState} from 'react'
import { useCounter } from '../hooks/useCounter';
import { useFetch } from '../hooks/useFetch'
    
    export const MultipleCustomHooks = () => {

        const { increment, counter } = useCounter(1);
        const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
        const { author, quote } = !!data && data[0];
        
        return (
            <>
                <h1>BreakingBad Quotes</h1>   
                <hr />
                    {
                        loading 
                        ? 
                            ( 
                                <div className="alert alert-info text-center">
                                    loading...
                                </div> 
                            ) 
                        :
                            (
                                <blockquote className="blockquote text-right">
                                    <p className="mb-0">{quote}</p>
                            <footer className="blockquote-footer">{author}</footer>
                                </blockquote>
                            )

                    }

                <button 
                    className="btn btn-primary"
                    onClick={ ()=> increment() }
                >
                    Siguiente
                </button>
            </>
        )
    }
    
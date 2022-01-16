import React, { useContext, useEffect } from 'react'
import { UserContext } from './UseContext'

export const LoginScreen = () => {

    const { setUser } = useContext( UserContext );

    const handleAddUser = (e)=>{
        e.preventDefault();

        const newUser = {
            id: 123456,
            name: "Ricardo",
            email: "ricardomaldonado@gmail.com"
        }

        setUser( newUser );
    }

    
    return (
        <>
            <h1>LoginScreen</h1>   
            <hr />

            <button 
                className="btn btn-primary"
                onClick={ ()=>setUser( {
                    id: 123456,
                    name: "Ricardo",
                    email: "ricardomaldonado@gmail.com"
                }) }
            >
                Login
            </button>
        </>
    )
}

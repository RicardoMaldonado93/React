import React, { useEffect, useState } from 'react'
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    useEffect( ()=>{
        // console.log("Hey!")
    },[]);

    useEffect( ()=>{
        // console.log("FormState change")
    },[formState]);

    useEffect( ()=>{
        // console.log("email change")
    },[email]);


    const handleInputChange = ({target})=>{ 
        setFormState({
            ...formState,
            [target.name] : target.value 
        });
    };

    return (
        <>
            <h1>UseEffect</h1>   
            <hr/>
            <div className={"form-group"}>
                <input 
                    type={"text"}
                    name={"name"}
                    className={"form-control"}
                    placeholder={"ingrese nombre..."}
                    value={name}
                    autoComplete={"off"}
                    onChange={ handleInputChange }
                />
             </div>
                 
             <div className={"form-group"}>
                <input 
                    type={"email"}
                    name={"email"}
                    className={"form-control"}
                    placeholder={"user@domain.com"}
                    value={email}
                    autoComplete={"off"}
                    onChange={ handleInputChange }
                />
            </div>

            { (name === '123') && <Message /> }
        </>
    )
}

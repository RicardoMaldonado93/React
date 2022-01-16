import React, { useEffect } from 'react'
import { useForm } from '../hooks/useForm';

export const FormWithCustomHooks = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const { name, email, password } = formValues;

    useEffect(()=>{
        console.log("el email cambio");
    },[email]);

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(formValues);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>FormWithCustomHooks</h1>   
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

             <div className={"form-group"}>
                <input 
                    type={"password"}
                    name={"password"}
                    className={"form-control"}
                    placeholder={"password"}
                    value={password}
                    autoComplete={"off"}
                    onChange={ handleInputChange }
                />
            </div>


            <button 
                className={"btn btn-primary"}
                type={"submit"}
                name={"guardar"}
            >
                Guardar
            </button>

        </form>
    )
}

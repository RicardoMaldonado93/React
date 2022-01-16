// import { render } from "@testing-library/react";
// import PrimeraApp from "./PrimeraApp";
// import React from 'react';
import React from 'react';
import { shallow } from 'enzyme';
import "@testing-library/jest-dom";
import PrimeraApp from '../tareas/PrimeraApp';

// describe("Pruebas con el componente 'PrimeraApp'", () => {
    
//     test("Debe de mostrar el mensaje 'Hola soy Goku'", () => {
        
//         const saludo = "Hola soy Goku";
//         const { getByText } = render(<PrimeraApp saludo={ saludo }/>);

//         expect( getByText(saludo) ).toBeInTheDocument()
//     });
// })


describe("Pruebas componente '<PrimeraApp />'",()=>{

    test("debe mostrar '<PrimeraApp />' correctamente", ()=>{

        const saludo = "Hola soy Goku";
        const wrapper = shallow( <PrimeraApp saludo={saludo} /> )

        expect( wrapper ).toMatchSnapshot();
    })
})
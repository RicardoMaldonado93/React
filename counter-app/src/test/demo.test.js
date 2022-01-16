import "@testing-library/jest-dom";

describe('Pruebas en el archivo demo.js', () => {
    
    test("deben de ser iguales los string", ()=>{
        const mensaje = "Hola mundo!";
        const mensaje2 = `Hola mundo!`;
    
        expect( mensaje ).toBe( mensaje2 );
    });
});

